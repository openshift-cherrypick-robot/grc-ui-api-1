/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */

import supertest from 'supertest';
import nock from 'nock';
import server, { GRAPHQL_PATH } from '../index';
import { mockPolicyListResponse, mockSinglePolicyResponse, mockCreatePolicy, mockDeleteResponse } from '../mocks/PolicyList';

function sliceIngoreEscape(str, remover, len, flag) {
  const index = flag ? str.indexOf(remover) : str.lastIndexOf(remover);
  return str.substring(0, index + remover.length)
  + str.substring(index + remover.length + len);
}

describe('Policy Resolver', () => {
  beforeAll(() => {
    // specify the url to be intercepted
    const APIServer = nock('http://0.0.0.0/kubernetes/apis');

    APIServer.get('/compliance.mcm.ibm.com/v1alpha1/namespaces/mcm/policies')
      .reply(200, mockPolicyListResponse);

    APIServer.get('/compliance.mcm.ibm.com/v1alpha1/namespaces/mcm/policies')
      .reply(200, mockSinglePolicyResponse);

    APIServer.get('/compliance.mcm.ibm.com/v1alpha1/namespaces/mcm/policies')
      .reply(200, mockCreatePolicy);

    APIServer.get('/compliance.mcm.ibm.com/v1alpha1/namespaces/mcm/policies')
      .reply(200, mockDeleteResponse);
  });

  test('Correctly Resolves Policy List Query', (done) => {
    supertest(server)
      .post(GRAPHQL_PATH)
      .send({
        query: `
        {
          policies {
            enforcement
            metadata {
              name
              namespace
              selfLink
              creationTimestamp
            }
            status
          }
        }
      `,
      })
      .end((err, res) => {
        expect(JSON.parse(res.text)).toMatchSnapshot();
        done();
      });
  });

  test('Correctly Resolves Single Policy Query', (done) => {
    supertest(server)
      .post(GRAPHQL_PATH)
      .send({
        query: `
        {
          policies(name:"policy-all", clusterName:"cluster1") {
            cluster
            message
            metadata {
              name
              namespace
              selfLink
              creationTimestamp
              annotations
              resourceVersion
              uid
            }
            status
            enforcement
            detail {
              exclude_namespace
              include_namespace
            }
            raw
            roleTemplates {
              apiVersion
              complianceType
              compliant
              status
              lastTransition
              name
              kind
              validity
              raw
            }
            roleBindingTemplates {
              apiVersion
              complianceType
              compliant
              status
              lastTransition
              name
              kind
              validity
              raw
            }
            objectTemplates {
              apiVersion
              complianceType
              compliant
              status
              lastTransition
              name
              kind
              validity
              raw
            }
            violations {
              name
              cluster
              status
              message
              reason
              selector
            }
            rules {
              complianceType
              templateType
              ruleUID
              verbs
              apiGroups
              resources
            }
          }
        }
      `,
      })
      .end((err, res) => {
        let textMessage = JSON.parse(res.text);
        textMessage = sliceIngoreEscape(textMessage.errors[0].message, 'policies-policy-mcm-ibm-com-', 13, true);
        textMessage = sliceIngoreEscape(textMessage, 'policies-policy-mcm-ibm-com-', 13, false);
        expect(textMessage).toMatchSnapshot();
        done();
      });
  });

  test('Correctly Resolves Create Policy Mutation', (done) => {
    supertest(server)
      .post(GRAPHQL_PATH)
      .send({
        query: `
        mutation {
          createPolicy(resources:[{
            apiVersion: "policy.mcm.ibm.com/v1alpha1",
            kind: "Policy",
            metadata: {
              name: "test-policy",
              description: "Instance descriptor for policy resource",
            },
            spec: {
              remediationAction: "enforce",
              namespaces: {
                include: [
                  "default",
                ],
                exclude: [
                  "kube*",
                ],
              },
              roleTemplates: [
                {
                  kind: "RoleTemplate",
                  apiVersion: "roletemplate.mcm.ibm.com/v1alpha1",
                  complianceType: "musthave",
                  metadata: {
                    namespace: "",
                    name: "test-role",
                  },
                  selector: {
                    matchLabels: {
                      cloud: "IBM",
                    },
                  },
                  rules: [
                    {
                      complianceType: "musthave",
                      PolicyRule: {
                        apiGroups: [
                          "extensions",
                          "apps",
                        ],
                        resources: [
                          "deployments",
                        ],
                        verbs: [
                          "get",
                          "list",
                          "watch",
                          "delete",
                        ],
                      },
                    },
                    {
                      complianceType: "mustnothave",
                      PolicyRule: {
                        apiGroups: [
                          "core",
                        ],
                        resources: [
                          "pods",
                        ],
                        verbs: [
                          "create",
                          "update",
                          "patch",
                        ],
                      },
                    },
                    {
                      PolicyRule: {
                        apiGroups: [
                          "core",
                        ],
                        resources: [
                          "secrets",
                        ],
                        verbs: [
                          "get",
                          "watch",
                          "list",
                          "create",
                          "delete",
                          "update",
                          "patch",
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          }]),
        }
      `,
      })
      .end((err, res) => {
        expect(JSON.parse(res.text)).toMatchSnapshot();
        done();
      });
  });

  test('Correctly Resolves Delete Policy Mutation', (done) => {
    supertest(server)
      .post(GRAPHQL_PATH)
      .send({
        query: `
        mutation {
          deletePolicy(name:"test-policy",namespace:"default")
        }
      `,
      })
      .end((err, res) => {
        expect(JSON.parse(res.text)).toMatchSnapshot();
        done();
      });
  });
});