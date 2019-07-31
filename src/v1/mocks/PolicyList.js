/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */

/* eslint comma-dangle: ["error", {"arrays": "ignore", "objects": "ignore"}] */

export const mockCompletedResourceView = {
  kind: 'ResourceView',
  apiVersion: 'mcm.ibm.com/v1alpha1',
  metadata: {
    name: 'policies-policy-mcm-ibm-com-1563995392802',
    namespace: 'default',
    selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/default/resourceviews/policies-policy-mcm-ibm-com-1563995392802',
    uid: 'c48cf584-b224-11e9-92a6-42a4786221be',
    resourceVersion: '144730',
    creationTimestamp: '2019-07-29T17:17:39Z',
    labels: {
      name: 'policies-policy-mcm-ibm-com-1563995392802',
    },
    annotations: {
      'mcm.ibm.com/user-group': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50cyxzeXN0ZW06c2VydmljZWFjY291bnRzOmt1YmUtc3lzdGVtLHN5c3RlbTphdXRoZW50aWNhdGVk',
      'mcm.ibm.com/user-identity': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRlZmF1bHQ=',
    },
  },
  spec: {
    scope: {
      resource: 'policies.policy.mcm.ibm.com',
    },
  },
  status: {
    conditions: [
      {
        type: 'Completed',
        lastUpdateTime: '2019-07-29T17:17:40Z',
      },
    ],
    results: {
      cluster1: {
        apiVersion: 'policy.mcm.ibm.com/v1alpha1',
        items: [
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"policy.mcm.ibm.com/v1alpha1","kind":"Policy","metadata":{"annotations":{"policy.mcm.ibm.com/categories":"SystemAndInformationIntegrity","policy.mcm.ibm.com/controls":"MutationAdvisor","policy.mcm.ibm.com/standards":"NIST"},"name":"policy-iam","namespace":"mcm"},"spec":{"policy-templates":[{"objectDefinition":{"apiVersion":"mcm-grcpolicy.ibm.com/v1alpha1","kind":"IamPolicy","metadata":{"label":{"category":"System-Integrity"},"name":"iam-policy-example"},"spec":{"maxClusterRoleBindingUsers":5,"namespaceSelector":{"exclude":["kube-system"],"include":["default","kube-*"]},"remediationAction":"enforce"}}}]}}n',
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '2',
              },
              creationTimestamp: '2019-07-26T02:53:40Z',
              finalizers: [
                'policy.finalizer.mcm.ibm.com',
                'sync.finalizer.mcm.ibm.com'
              ],
              generation: 2,
              name: 'policy-iam',
              namespace: 'cluster1',
              resourceVersion: '12312413',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-iam',
              uid: '92ec079a-af50-11e9-98f0-005056a04901',
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'mcm-grcpolicy.ibm.com/v1alpha1',
                    kind: 'IamPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity',
                      },
                      name: 'iam-policy-example',
                    },
                    spec: {
                      maxClusterRoleBindingUsers: 5,
                      namespaceSelector: {
                        exclude: [
                          'kube-system',
                        ],
                        include: [
                          'default',
                          'kube-*',
                        ],
                      },
                      remediationAction: 'enforce',
                    },
                  },
                  status: {
                    Compliant: 'NonCompliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:41Z',
                        message: 'mapping error from raw object: `no matches for kind "IamPolicy" in version "mcm-grcpolicy.ibm.com/v1alpha1"`',
                        reason: 'K8s creation error',
                        status: 'False',
                        type: 'violation',
                      },
                    ],
                  },
                },
              ],
            },
            status: {
              compliant: 'NonCompliant',
            },
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '56',
              },
              creationTimestamp: '2019-07-26T02:53:40Z',
              finalizers: [
                'policy.finalizer.mcm.ibm.com',
                'sync.finalizer.mcm.ibm.com',
              ],
              generation: 56,
              name: 'policy-ma',
              namespace: 'cluster1',
              resourceVersion: '12836442',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-ma',
              uid: '92d146dc-af50-11e9-98f0-005056a04901',
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'policies.ibm.com/v1alpha1',
                    kind: 'MutationPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity',
                      },
                      name: 'mutation-policy-example',
                    },
                    spec: {
                      conditions: {
                        ownership: [
                          'ReplicaSet',
                          'Deployment',
                          'DeamonSet',
                          'ReplicationController',
                        ],
                      },
                      namespaceSelector: {
                        exclude: [
                          'kube-system',
                        ],
                        include: [
                          'default',
                          'kube-*',
                        ],
                      },
                      remediationAction: 'enforce',
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-29T03:04:40Z',
                        message: 'Compliant; 0 mutated pods detected in namespace `default`; 0 mutated pods detected in namespace `kube-public`',
                        reason: 'policy: cluster1/mutation-policy-example',
                        status: 'True',
                        type: 'completed',
                      },
                    ],
                  },
                },
              ],
              remediationAction: 'enforce',
            },
            status: {
              compliant: 'Compliant',
            },
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '2',
              },
              creationTimestamp: '2019-07-26T02:53:40Z',
              finalizers: [
                'policy.finalizer.mcm.ibm.com',
                'sync.finalizer.mcm.ibm.com',
              ],
              generation: 2,
              name: 'policy-pod',
              namespace: 'cluster1',
              resourceVersion: '12312397',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-pod',
              uid: '92d6cc5a-af50-11e9-98f0-005056a04901',
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*',
                ],
                include: [
                  'default',
                ],
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'Pod',
                    metadata: {
                      name: 'nginx-pod',
                    },
                    spec: {
                      containers: [
                        {
                          image: 'nginx:1.7.9',
                          name: 'nginx',
                          ports: [
                            {
                              containerPort: 80,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:41Z',
                        message: 'pods `nginx-pod` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification',
                      },
                    ],
                  },
                },
              ],
              remediationAction: 'inform',
            },
            status: {
              compliant: 'Compliant',
            },
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '2',
              },
              creationTimestamp: '2019-07-28T08:52:03Z',
              finalizers: [
                'policy.finalizer.mcm.ibm.com',
                'sync.finalizer.mcm.ibm.com',
              ],
              generation: 2,
              name: 'policy-role',
              namespace: 'cluster1',
              resourceVersion: '12701902',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-role',
              uid: 'f8677509-b114-11e9-98f0-005056a04901',
            },
            spec: {
              namespaces: {
                exclude: [
                  'kube*',
                ],
                include: [
                  'default',
                ],
              },
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role-policy',
                  },
                  rules: [
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'extensions',
                          'apps',
                        ],
                        resources: [
                          'deployments',
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'create',
                          'delete',
                          'patch',
                        ],
                      },
                    },
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true',
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {
                      valid: true,
                    },
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-28T08:52:07Z',
                        message: 'k8s RBAC role "operator-role-policy" exists and matches',
                        reason: 'K8s RBAC role matches',
                        status: 'True',
                        type: 'completed',
                      },
                    ],
                  },
                },
              ],
            },
            status: {
              compliant: 'Compliant',
              valid: true,
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity, RBAC',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '5',
              },
              creationTimestamp: '2019-07-26T02:53:41Z',
              finalizers: [
                'policy.finalizer.mcm.ibm.com',
                'sync.finalizer.mcm.ibm.com',
              ],
              generation: 6,
              name: 'policy1',
              namespace: 'cluster1',
              resourceVersion: '12312426',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy1',
              uid: '9321abdd-af50-11e9-98f0-005056a04901',
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*',
                ],
                include: [
                  'default',
                ],
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'rbac.authorization.k8s.io/v1',
                    kind: 'RoleBinding',
                    metadata: {
                      name: 'operate-pods-rolebinding',
                      namespace: 'default',
                    },
                    roleRef: {
                      apiGroup: 'rbac.authorization.k8s.io',
                      kind: 'Role',
                      name: 'operator',
                    },
                    subjects: [
                      {
                        apiGroup: 'rbac.authorization.k8s.io',
                        kind: 'User',
                        name: 'admin',
                      },
                    ],
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:45Z',
                        message: 'rolebindings `operate-pods-rolebinding` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification',
                      },
                    ],
                  },
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'policy/v1beta1',
                    kind: 'PodSecurityPolicy',
                    metadata: {
                      annotations: {
                        'seccomp.security.alpha.kubernetes.io/allowedProfileNames': '*',
                      },
                      name: 'restricted-mcm',
                    },
                    spec: {
                      allowPrivilegeEscalation: false,
                      allowedCapabilities: [
                        '*',
                      ],
                      fsGroup: {
                        rule: 'RunAsAny',
                      },
                      hostIPC: false,
                      hostNetwork: true,
                      hostPID: false,
                      hostPorts: [
                        {
                          max: 65535,
                          min: 1000,
                        },
                      ],
                      privileged: false,
                      runAsUser: {
                        rule: 'RunAsAny',
                      },
                      seLinux: {
                        rule: 'RunAsAny',
                      },
                      supplementalGroups: {
                        rule: 'RunAsAny',
                      },
                      volumes: [
                        '*',
                      ],
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:45Z',
                        message: 'podsecuritypolicies `restricted-mcm` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification',
                      },
                    ],
                  },
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'networking.k8s.io/v1',
                    kind: 'NetworkPolicy',
                    metadata: {
                      name: 'deny-from-other-namespaces',
                      namespace: 'default',
                    },
                    spec: {
                      ingress: [
                        {
                          from: [
                            {
                              podSelector: {},
                            },
                          ],
                        },
                      ],
                      podSelector: {
                        matchLabels: null,
                      },
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:45Z',
                        message: 'networkpolicies `deny-from-other-namespaces` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification',
                      },
                    ],
                  },
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'LimitRange',
                    metadata: {
                      name: 'mem-limit-range',
                    },
                    spec: {
                      limits: [
                        {
                          default: {
                            memory: '512Mi',
                          },
                          defaultRequest: {
                            memory: '256Mi',
                          },
                          type: 'Container',
                        },
                      ],
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:45Z',
                        message: 'limitranges `mem-limit-range` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification',
                      },
                    ],
                  },
                },
              ],
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role',
                  },
                  rules: [
                    {
                      complianceType: 'mustnothave',
                      policyRule: {
                        apiGroups: [
                          'core',
                        ],
                        resources: [
                          'secrets',
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'delete',
                          'create',
                          'update',
                          'patch',
                        ],
                      },
                    },
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'core',
                        ],
                        resources: [
                          'pods',
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                        ],
                      },
                    },
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true',
                    },
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {
                      valid: true,
                    },
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-26T02:53:45Z',
                        message: 'k8s RBAC role "operator-role" exists and matches',
                        reason: 'K8s RBAC role matches',
                        status: 'True',
                        type: 'completed',
                      },
                    ],
                  },
                },
              ],
            },
            status: {
              compliant: 'Compliant',
              valid: true,
            },
          },
        ],
        kind: 'PolicyList',
        metadata: {
          continue: '',
          resourceVersion: '12938871',
          selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/policies'
        },
      },
      clusterhub: {
        apiVersion: 'policy.mcm.ibm.com/v1alpha1',
        items: [
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"policy.mcm.ibm.com/v1alpha1","kind":"Policy","metadata":{"annotations":{"policy.mcm.ibm.com/categories":"SystemAndInformationIntegrity","policy.mcm.ibm.com/controls":"MutationAdvisor","policy.mcm.ibm.com/standards":"NIST"},"name":"policy-iam","namespace":"mcm"},"spec":{"policy-templates":[{"objectDefinition":{"apiVersion":"mcm-grcpolicy.ibm.com/v1alpha1","kind":"IamPolicy","metadata":{"label":{"category":"System-Integrity"},"name":"iam-policy-example"},"spec":{"maxClusterRoleBindingUsers":5,"namespaceSelector":{"exclude":["kube-system"],"include":["default","kube-*"]},"remediationAction":"enforce"}}}]}}n',
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '1',
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
              ],
              generation: 2,
              name: 'policy-iam',
              namespace: 'cluster1',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-iam',
                  uid: '40ac7fbd-ae25-11e9-8e7d-005056a0b88e',
                },
              ],
              resourceVersion: '5456650',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-iam',
              uid: 'bb8108b1-b124-11e9-8e7d-005056a0b88e',
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'mcm-grcpolicy.ibm.com/v1alpha1',
                    kind: 'IamPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity',
                      },
                      name: 'iam-policy-example',
                    },
                    spec: {
                      maxClusterRoleBindingUsers: 5,
                      namespaceSelector: {
                        exclude: [
                          'kube-system',
                        ],
                        include: [
                          'default',
                          'kube-*',
                        ],
                      },
                      remediationAction: 'enforce',
                    },
                  },
                  status: {
                    Validity: {},
                  },
                },
              ],
            },
            status: {
              compliant: 'NonCompliant',
            },
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '1'
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 16,
              name: 'policy-ma',
              namespace: 'cluster1',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-ma',
                  uid: '7388cd06-a960-11e9-8e7d-005056a0b88e',
                },
              ],
              resourceVersion: '5630260',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-ma',
              uid: 'bb90584f-b124-11e9-8e7d-005056a0b88e',
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'policies.ibm.com/v1alpha1',
                    kind: 'MutationPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity',
                      },
                      name: 'mutation-policy-example',
                    },
                    spec: {
                      conditions: {
                        ownership: [
                          'ReplicaSet',
                          'Deployment',
                          'DeamonSet',
                          'ReplicationController',
                        ],
                      },
                      namespaceSelector: {
                        exclude: [
                          'kube-system',
                        ],
                        include: [
                          'default',
                          'kube-*',
                        ],
                      },
                      remediationAction: 'enforce',
                    },
                  },
                  status: {
                    Validity: {}
                  },
                },
              ],
              remediationAction: 'enforce'
            },
            status: {
              compliant: 'Compliant',
            },
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '1',
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
              ],
              generation: 2,
              name: 'policy-pod',
              namespace: 'cluster1',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-pod',
                  uid: '76d4e342-a960-11e9-8e7d-005056a0b88e',
                },
              ],
              resourceVersion: '5456648',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-pod',
              uid: 'bb978e90-b124-11e9-8e7d-005056a0b88e',
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*',
                ],
                include: [
                  'default',
                ],
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'Pod',
                    metadata: {
                      name: 'nginx-pod'
                    },
                    spec: {
                      containers: [
                        {
                          image: 'nginx:1.7.9',
                          name: 'nginx',
                          ports: [
                            {
                              containerPort: 80
                            }
                          ]
                        }
                      ]
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ],
              remediationAction: 'inform'
            },
            status: {
              compliant: 'Compliant'
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '1'
              },
              creationTimestamp: '2019-07-28T08:52:03Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 2,
              name: 'policy-role',
              namespace: 'cluster1',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-role',
                  uid: '7a09ed2f-a960-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5435958',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-role',
              uid: 'f8781099-b114-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role-policy'
                  },
                  rules: [
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'extensions',
                          'apps'
                        ],
                        resources: [
                          'deployments'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'create',
                          'delete',
                          'patch'
                        ]
                      }
                    }
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true'
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ]
            },
            status: {
              compliant: 'Compliant',
              valid: true
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity, RBAC',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '2'
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 2,
              name: 'policy1',
              namespace: 'cluster1',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy1',
                  uid: 'dc761733-a95f-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5456649',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy1',
              uid: 'bb859867-b124-11e9-8e7d-005056a0b88e'
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'rbac.authorization.k8s.io/v1',
                    kind: 'RoleBinding',
                    metadata: {
                      name: 'operate-pods-rolebinding',
                      namespace: 'default'
                    },
                    roleRef: {
                      apiGroup: 'rbac.authorization.k8s.io',
                      kind: 'Role',
                      name: 'operator'
                    },
                    subjects: [
                      {
                        apiGroup: 'rbac.authorization.k8s.io',
                        kind: 'User',
                        name: 'admin'
                      }
                    ]
                  },
                  status: {
                    Validity: {}
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'policy/v1beta1',
                    kind: 'PodSecurityPolicy',
                    metadata: {
                      annotations: {
                        'seccomp.security.alpha.kubernetes.io/allowedProfileNames': '*'
                      },
                      name: 'restricted-mcm'
                    },
                    spec: {
                      allowPrivilegeEscalation: false,
                      allowedCapabilities: [
                        '*'
                      ],
                      fsGroup: {
                        rule: 'RunAsAny'
                      },
                      hostIPC: false,
                      hostNetwork: true,
                      hostPID: false,
                      hostPorts: [
                        {
                          max: 65535,
                          min: 1000
                        }
                      ],
                      privileged: false,
                      runAsUser: {
                        rule: 'RunAsAny'
                      },
                      seLinux: {
                        rule: 'RunAsAny'
                      },
                      supplementalGroups: {
                        rule: 'RunAsAny'
                      },
                      volumes: [
                        '*'
                      ]
                    }
                  },
                  status: {
                    Validity: {}
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'networking.k8s.io/v1',
                    kind: 'NetworkPolicy',
                    metadata: {
                      name: 'deny-from-other-namespaces',
                      namespace: 'default'
                    },
                    spec: {
                      ingress: [
                        {
                          from: [
                            {
                              podSelector: {}
                            }
                          ]
                        }
                      ],
                      podSelector: {
                        matchLabels: null
                      }
                    }
                  },
                  status: {
                    Validity: {}
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'LimitRange',
                    metadata: {
                      name: 'mem-limit-range'
                    },
                    spec: {
                      limits: [
                        {
                          default: {
                            memory: '512Mi'
                          },
                          defaultRequest: {
                            memory: '256Mi'
                          },
                          type: 'Container'
                        }
                      ]
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ],
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role'
                  },
                  rules: [
                    {
                      complianceType: 'mustnothave',
                      policyRule: {
                        apiGroups: [
                          'core'
                        ],
                        resources: [
                          'secrets'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'delete',
                          'create',
                          'update',
                          'patch'
                        ]
                      }
                    },
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'core'
                        ],
                        resources: [
                          'pods'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch'
                        ]
                      }
                    }
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true'
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ]
            },
            status: {
              compliant: 'Compliant',
              valid: true
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"policy.mcm.ibm.com/v1alpha1","kind":"Policy","metadata":{"annotations":{"policy.mcm.ibm.com/categories":"SystemAndInformationIntegrity","policy.mcm.ibm.com/controls":"MutationAdvisor","policy.mcm.ibm.com/standards":"NIST"},"name":"policy-iam","namespace":"mcm"},"spec":{"policy-templates":[{"objectDefinition":{"apiVersion":"mcm-grcpolicy.ibm.com/v1alpha1","kind":"IamPolicy","metadata":{"label":{"category":"System-Integrity"},"name":"iam-policy-example"},"spec":{"maxClusterRoleBindingUsers":5,"namespaceSelector":{"exclude":["kube-system"],"include":["default","kube-*"]},"remediationAction":"enforce"}}}]}}n',
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '3'
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
                'policy.finalizer.mcm.ibm.com'
              ],
              generation: 3,
              name: 'policy-iam',
              namespace: 'clusterhub',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-iam',
                  uid: '40ac7fbd-ae25-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5680907',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/clusterhub/policies/policy-iam',
              uid: 'bb7f060d-b124-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'mcm-grcpolicy.ibm.com/v1alpha1',
                    kind: 'IamPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity'
                      },
                      name: 'iam-policy-example'
                    },
                    spec: {
                      maxClusterRoleBindingUsers: 5,
                      namespaceSelector: {
                        exclude: [
                          'kube-system'
                        ],
                        include: [
                          'default',
                          'kube-*'
                        ]
                      },
                      remediationAction: 'enforce'
                    }
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-29T07:51:20Z',
                        message: 'Compliant; 0 clusterrole admin users violations detected in namespace `kube-public` ; 0 clusterrole admin users violations detected in namespace `cluster-wide` ; 0 clusterrole admin users violations detected in namespace `default`',
                        reason: 'policy: clusterhub/iam-policy-example',
                        status: 'True',
                        type: 'completed'
                      }
                    ]
                  }
                }
              ]
            },
            status: {
              compliant: 'Compliant'
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '4'
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
                'policy.finalizer.mcm.ibm.com'
              ],
              generation: 4,
              name: 'policy-ma',
              namespace: 'clusterhub',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-ma',
                  uid: '7388cd06-a960-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5725478',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/clusterhub/policies/policy-ma',
              uid: 'bb869f0f-b124-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'policies.ibm.com/v1alpha1',
                    kind: 'MutationPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity'
                      },
                      name: 'mutation-policy-example'
                    },
                    spec: {
                      conditions: {
                        ownership: [
                          'ReplicaSet',
                          'Deployment',
                          'DeamonSet',
                          'ReplicationController'
                        ]
                      },
                      namespaceSelector: {
                        exclude: [
                          'kube-system'
                        ],
                        include: [
                          'default',
                          'kube-*'
                        ]
                      },
                      remediationAction: 'enforce'
                    }
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-29T12:02:43Z',
                        message: 'Compliant; 0 mutated pods detected in namespace `default`; 0 mutated pods detected in namespace `kube-public`',
                        reason: 'policy: clusterhub/mutation-policy-example',
                        status: 'True',
                        type: 'completed'
                      }
                    ]
                  }
                }
              ],
              remediationAction: 'enforce'
            },
            status: {
              compliant: 'Compliant'
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '2'
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
                'policy.finalizer.mcm.ibm.com'
              ],
              generation: 2,
              name: 'policy-pod',
              namespace: 'clusterhub',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-pod',
                  uid: '76d4e342-a960-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5456722',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/clusterhub/policies/policy-pod',
              uid: 'bbb61bc5-b124-11e9-8e7d-005056a0b88e'
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'Pod',
                    metadata: {
                      name: 'nginx-pod'
                    },
                    spec: {
                      containers: [
                        {
                          image: 'nginx:1.7.9',
                          name: 'nginx',
                          ports: [
                            {
                              containerPort: 80
                            }
                          ]
                        }
                      ]
                    }
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-28T10:45:42Z',
                        message: 'pods `nginx-pod` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification'
                      }
                    ]
                  }
                }
              ],
              remediationAction: 'inform'
            },
            status: {
              compliant: 'Compliant'
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '26707'
              },
              creationTimestamp: '2019-07-28T08:52:03Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
                'policy.finalizer.mcm.ibm.com'
              ],
              generation: 26707,
              name: 'policy-role',
              namespace: 'clusterhub',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy-role',
                  uid: '7a09ed2f-a960-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5781088',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/clusterhub/policies/policy-role',
              uid: 'f8761313-b114-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role-policy'
                  },
                  rules: [
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'extensions',
                          'apps'
                        ],
                        resources: [
                          'deployments'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'create',
                          'delete',
                          'patch'
                        ]
                      }
                    }
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true'
                    }
                  },
                  status: {
                    Compliant: 'NonCompliant',
                    Validity: {
                      valid: true
                    },
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-29T17:17:38Z',
                        message: 'k8s RBAC role is missing: operator-role-policy',
                        reason: 'K8s RBAC role is missing',
                        status: 'True',
                        type: 'completed'
                      }
                    ]
                  }
                }
              ]
            },
            status: {
              compliant: 'NonCompliant',
              valid: true
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity, RBAC',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '25254'
              },
              creationTimestamp: '2019-07-28T10:44:53Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com',
                'policy.finalizer.mcm.ibm.com'
              ],
              generation: 25255,
              name: 'policy1',
              namespace: 'clusterhub',
              ownerReferences: [
                {
                  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: 'Policy',
                  name: 'policy1',
                  uid: 'dc761733-a95f-11e9-8e7d-005056a0b88e'
                }
              ],
              resourceVersion: '5781086',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/clusterhub/policies/policy1',
              uid: 'bb835a34-b124-11e9-8e7d-005056a0b88e'
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'rbac.authorization.k8s.io/v1',
                    kind: 'RoleBinding',
                    metadata: {
                      name: 'operate-pods-rolebinding',
                      namespace: 'default'
                    },
                    roleRef: {
                      apiGroup: 'rbac.authorization.k8s.io',
                      kind: 'Role',
                      name: 'operator'
                    },
                    subjects: [
                      {
                        apiGroup: 'rbac.authorization.k8s.io',
                        kind: 'User',
                        name: 'admin'
                      }
                    ]
                  },
                  status: {
                    Compliant: 'NonCompliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-28T10:45:42Z',
                        message: 'rolebindings `operate-pods-rolebinding` is missing, and should be created',
                        reason: 'K8s missing a must have object',
                        status: 'True',
                        type: 'violation'
                      }
                    ]
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'policy/v1beta1',
                    kind: 'PodSecurityPolicy',
                    metadata: {
                      annotations: {
                        'seccomp.security.alpha.kubernetes.io/allowedProfileNames': '*'
                      },
                      name: 'restricted-mcm'
                    },
                    spec: {
                      allowPrivilegeEscalation: false,
                      allowedCapabilities: [
                        '*'
                      ],
                      fsGroup: {
                        rule: 'RunAsAny'
                      },
                      hostIPC: false,
                      hostNetwork: true,
                      hostPID: false,
                      hostPorts: [
                        {
                          max: 65535,
                          min: 1000
                        }
                      ],
                      privileged: false,
                      runAsUser: {
                        rule: 'RunAsAny'
                      },
                      seLinux: {
                        rule: 'RunAsAny'
                      },
                      supplementalGroups: {
                        rule: 'RunAsAny'
                      },
                      volumes: [
                        '*'
                      ]
                    }
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-28T10:45:42Z',
                        message: 'podsecuritypolicies `restricted-mcm` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification'
                      }
                    ]
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'networking.k8s.io/v1',
                    kind: 'NetworkPolicy',
                    metadata: {
                      name: 'deny-from-other-namespaces',
                      namespace: 'default'
                    },
                    spec: {
                      ingress: [
                        {
                          from: [
                            {
                              podSelector: {}
                            }
                          ]
                        }
                      ],
                      podSelector: {
                        matchLabels: null
                      }
                    }
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-28T10:45:42Z',
                        message: 'networkpolicies `deny-from-other-namespaces` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification'
                      }
                    ]
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'LimitRange',
                    metadata: {
                      name: 'mem-limit-range'
                    },
                    spec: {
                      limits: [
                        {
                          default: {
                            memory: '512Mi'
                          },
                          defaultRequest: {
                            memory: '256Mi'
                          },
                          type: 'Container'
                        }
                      ]
                    }
                  },
                  status: {
                    Compliant: 'Compliant',
                    Validity: {},
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-28T10:45:42Z',
                        message: 'limitranges `mem-limit-range` exists as it should be, therefore the this Object template is compliant',
                        reason: 'K8s `must have` object already exists',
                        status: 'True',
                        type: 'notification'
                      }
                    ]
                  }
                }
              ],
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role'
                  },
                  rules: [
                    {
                      complianceType: 'mustnothave',
                      policyRule: {
                        apiGroups: [
                          'core'
                        ],
                        resources: [
                          'secrets'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'delete',
                          'create',
                          'update',
                          'patch'
                        ]
                      }
                    },
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'core'
                        ],
                        resources: [
                          'pods'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch'
                        ]
                      }
                    }
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true'
                    }
                  },
                  status: {
                    Compliant: 'NonCompliant',
                    Validity: {
                      valid: true
                    },
                    conditions: [
                      {
                        lastTransitionTime: '2019-07-29T17:17:38Z',
                        message: 'k8s RBAC role is missing: operator-role',
                        reason: 'K8s RBAC role is missing',
                        status: 'True',
                        type: 'completed'
                      }
                    ]
                  }
                }
              ]
            },
            status: {
              compliant: 'NonCompliant',
              valid: true
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"policy.mcm.ibm.com/v1alpha1","kind":"Policy","metadata":{"annotations":{"policy.mcm.ibm.com/categories":"SystemAndInformationIntegrity","policy.mcm.ibm.com/controls":"MutationAdvisor","policy.mcm.ibm.com/standards":"NIST"},"name":"policy-iam","namespace":"mcm"},"spec":{"policy-templates":[{"objectDefinition":{"apiVersion":"mcm-grcpolicy.ibm.com/v1alpha1","kind":"IamPolicy","metadata":{"label":{"category":"System-Integrity"},"name":"iam-policy-example"},"spec":{"maxClusterRoleBindingUsers":5,"namespaceSelector":{"exclude":["kube-system"],"include":["default","kube-*"]},"remediationAction":"enforce"}}}]}}n',
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '1'
              },
              creationTimestamp: '2019-07-24T15:11:03Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 22,
              name: 'policy-iam',
              namespace: 'mcm',
              resourceVersion: '5456786',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mcm/policies/policy-iam',
              uid: '40ac7fbd-ae25-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'mcm-grcpolicy.ibm.com/v1alpha1',
                    kind: 'IamPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity'
                      },
                      name: 'iam-policy-example'
                    },
                    spec: {
                      maxClusterRoleBindingUsers: 5,
                      namespaceSelector: {
                        exclude: [
                          'kube-system'
                        ],
                        include: [
                          'default',
                          'kube-*'
                        ]
                      },
                      remediationAction: 'enforce'
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ]
            },
            status: {
              placementBindings: [
                'binding-iam'
              ],
              placementPolicies: [
                'placement-iam'
              ],
              status: {
                cluster1: {
                  aggregatePoliciesStatus: {
                    'policy-iam': {
                      compliant: 'NonCompliant'
                    }
                  },
                  clustername: 'cluster1',
                  compliant: 'NonCompliant'
                },
                clusterhub: {
                  aggregatePoliciesStatus: {
                    'policy-iam': {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'clusterhub',
                  compliant: 'Compliant'
                }
              }
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '1'
              },
              creationTimestamp: '2019-07-18T13:32:13Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 95,
              name: 'policy-ma',
              namespace: 'mcm',
              resourceVersion: '5630262',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mcm/policies/policy-ma',
              uid: '7388cd06-a960-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {},
              'policy-templates': [
                {
                  objectDefinition: {
                    apiVersion: 'policies.ibm.com/v1alpha1',
                    kind: 'MutationPolicy',
                    metadata: {
                      label: {
                        category: 'System-Integrity'
                      },
                      name: 'mutation-policy-example'
                    },
                    spec: {
                      conditions: {
                        ownership: [
                          'ReplicaSet',
                          'Deployment',
                          'DeamonSet',
                          'ReplicationController'
                        ]
                      },
                      namespaceSelector: {
                        exclude: [
                          'kube-system'
                        ],
                        include: [
                          'default',
                          'kube-*'
                        ]
                      },
                      remediationAction: 'enforce'
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ],
              remediationAction: 'enforce'
            },
            status: {
              placementBindings: [
                'binding-ma'
              ],
              placementPolicies: [
                'placement-ma'
              ],
              status: {
                cluster1: {
                  aggregatePoliciesStatus: {
                    'policy-ma': {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'cluster1',
                  compliant: 'Compliant'
                },
                clusterhub: {
                  aggregatePoliciesStatus: {
                    'policy-ma': {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'clusterhub',
                  compliant: 'Compliant'
                }
              }
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '1'
              },
              creationTimestamp: '2019-07-18T13:32:18Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 18,
              name: 'policy-pod',
              namespace: 'mcm',
              resourceVersion: '5456723',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mcm/policies/policy-pod',
              uid: '76d4e342-a960-11e9-8e7d-005056a0b88e'
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'Pod',
                    metadata: {
                      name: 'nginx-pod'
                    },
                    spec: {
                      containers: [
                        {
                          image: 'nginx:1.7.9',
                          name: 'nginx',
                          ports: [
                            {
                              containerPort: 80
                            }
                          ]
                        }
                      ]
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ],
              remediationAction: 'inform'
            },
            status: {
              placementBindings: [
                'binding-pod'
              ],
              placementPolicies: [
                'placement-pod'
              ],
              status: {
                cluster1: {
                  aggregatePoliciesStatus: {
                    'policy-pod': {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'cluster1',
                  compliant: 'Compliant'
                },
                clusterhub: {
                  aggregatePoliciesStatus: {
                    'policy-pod': {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'clusterhub',
                  compliant: 'Compliant'
                }
              }
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
                'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
                'seed-generation': '1'
              },
              creationTimestamp: '2019-07-18T13:32:24Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 24,
              name: 'policy-role',
              namespace: 'mcm',
              resourceVersion: '5435960',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mcm/policies/policy-role',
              uid: '7a09ed2f-a960-11e9-8e7d-005056a0b88e'
            },
            spec: {
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role-policy'
                  },
                  rules: [
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'extensions',
                          'apps'
                        ],
                        resources: [
                          'deployments'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'create',
                          'delete',
                          'patch'
                        ]
                      }
                    }
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true'
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ]
            },
            status: {
              placementBindings: [
                'binding-role'
              ],
              placementPolicies: [
                'placement-role'
              ],
              status: {
                cluster1: {
                  aggregatePoliciesStatus: {
                    'policy-role': {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'cluster1',
                  compliant: 'Compliant'
                },
                clusterhub: {
                  aggregatePoliciesStatus: {
                    'policy-role': {
                      compliant: 'NonCompliant'
                    }
                  },
                  clustername: 'clusterhub',
                  compliant: 'NonCompliant'
                }
              }
            }
          },
          {
            apiVersion: 'policy.mcm.ibm.com/v1alpha1',
            kind: 'Policy',
            metadata: {
              annotations: {
                'policy.mcm.ibm.com/categories': 'SystemAndInformationIntegrity, RBAC',
                'policy.mcm.ibm.com/controls': 'MutationAdvisor',
                'policy.mcm.ibm.com/standards': 'NIST',
                'seed-generation': '2'
              },
              creationTimestamp: '2019-07-18T13:27:59Z',
              finalizers: [
                'propagator.finalizer.mcm.ibm.com'
              ],
              generation: 68,
              name: 'policy1',
              namespace: 'mcm',
              resourceVersion: '5456660',
              selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mcm/policies/policy1',
              uid: 'dc761733-a95f-11e9-8e7d-005056a0b88e'
            },
            spec: {
              complianceType: 'musthave',
              namespaces: {
                exclude: [
                  'kube*'
                ],
                include: [
                  'default'
                ]
              },
              'object-templates': [
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'rbac.authorization.k8s.io/v1',
                    kind: 'RoleBinding',
                    metadata: {
                      name: 'operate-pods-rolebinding',
                      namespace: 'default'
                    },
                    roleRef: {
                      apiGroup: 'rbac.authorization.k8s.io',
                      kind: 'Role',
                      name: 'operator'
                    },
                    subjects: [
                      {
                        apiGroup: 'rbac.authorization.k8s.io',
                        kind: 'User',
                        name: 'admin'
                      }
                    ]
                  },
                  status: {
                    Validity: {}
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'policy/v1beta1',
                    kind: 'PodSecurityPolicy',
                    metadata: {
                      annotations: {
                        'seccomp.security.alpha.kubernetes.io/allowedProfileNames': '*'
                      },
                      name: 'restricted-mcm'
                    },
                    spec: {
                      allowPrivilegeEscalation: false,
                      allowedCapabilities: [
                        '*'
                      ],
                      fsGroup: {
                        rule: 'RunAsAny'
                      },
                      hostIPC: false,
                      hostNetwork: true,
                      hostPID: false,
                      hostPorts: [
                        {
                          max: 65535,
                          min: 1000
                        }
                      ],
                      privileged: false,
                      runAsUser: {
                        rule: 'RunAsAny'
                      },
                      seLinux: {
                        rule: 'RunAsAny'
                      },
                      supplementalGroups: {
                        rule: 'RunAsAny'
                      },
                      volumes: [
                        '*'
                      ]
                    }
                  },
                  status: {
                    Validity: {}
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'networking.k8s.io/v1',
                    kind: 'NetworkPolicy',
                    metadata: {
                      name: 'deny-from-other-namespaces',
                      namespace: 'default'
                    },
                    spec: {
                      ingress: [
                        {
                          from: [
                            {
                              podSelector: {}
                            }
                          ]
                        }
                      ],
                      podSelector: {
                        matchLabels: null
                      }
                    }
                  },
                  status: {
                    Validity: {}
                  }
                },
                {
                  complianceType: 'musthave',
                  objectDefinition: {
                    apiVersion: 'v1',
                    kind: 'LimitRange',
                    metadata: {
                      name: 'mem-limit-range'
                    },
                    spec: {
                      limits: [
                        {
                          default: {
                            memory: '512Mi'
                          },
                          defaultRequest: {
                            memory: '256Mi'
                          },
                          type: 'Container'
                        }
                      ]
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ],
              remediationAction: 'inform',
              'role-templates': [
                {
                  apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                  complianceType: 'musthave',
                  metadata: {
                    creationTimestamp: null,
                    name: 'operator-role'
                  },
                  rules: [
                    {
                      complianceType: 'mustnothave',
                      policyRule: {
                        apiGroups: [
                          'core'
                        ],
                        resources: [
                          'secrets'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch',
                          'delete',
                          'create',
                          'update',
                          'patch'
                        ]
                      }
                    },
                    {
                      complianceType: 'musthave',
                      policyRule: {
                        apiGroups: [
                          'core'
                        ],
                        resources: [
                          'pods'
                        ],
                        verbs: [
                          'get',
                          'list',
                          'watch'
                        ]
                      }
                    }
                  ],
                  selector: {
                    matchLabels: {
                      dev: 'true'
                    }
                  },
                  status: {
                    Validity: {}
                  }
                }
              ]
            },
            status: {
              placementBindings: [
                'binding-policy1'
              ],
              placementPolicies: [
                'placement-policy1'
              ],
              status: {
                cluster1: {
                  aggregatePoliciesStatus: {
                    policy1: {
                      compliant: 'Compliant'
                    }
                  },
                  clustername: 'cluster1',
                  compliant: 'Compliant'
                },
                clusterhub: {
                  aggregatePoliciesStatus: {
                    policy1: {
                      compliant: 'NonCompliant'
                    }
                  },
                  clustername: 'clusterhub',
                  compliant: 'NonCompliant'
                }
              }
            }
          }
        ],
        kind: 'PolicyList',
        metadata: {
          continue: '',
          resourceVersion: '5781091',
          selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/policies'
        }
      }
    }
  }
};

export const mockCreateResourceGet = {
  kind: 'ResourceViewList',
  apiVersion: 'mcm.ibm.com/v1alpha1',
  metadata: {
    selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/default/resourceviews',
    resourceVersion: '144656',
  },
  items: [
    {
      metadata: {
        name: 'policies-policy-mcm-ibm-com-1563995392802',
        namespace: 'default',
        selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/default/resourceviews/policies-policy-mcm-ibm-com-1563995392802',
        uid: 'e8aad049-b222-11e9-92a6-42a4786221be',
        resourceVersion: '144656',
        creationTimestamp: '2019-07-29T17:04:21Z',
        labels: {
          name: 'policies-policy-mcm-ibm-com-1563995392802',
        },
        annotations: {
          'mcm.ibm.com/user-group': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50cyxzeXN0ZW06c2VydmljZWFjY291bnRzOmt1YmUtc3lzdGVtLHN5c3RlbTphdXRoZW50aWNhdGVk',
          'mcm.ibm.com/user-identity': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRlZmF1bHQ=',
        },
      },
      spec: {
        scope: {
          resource: 'policies.policy.mcm.ibm.com',
        },
      },
      status: {
        conditions: [
          {
            type: 'Completed',
            lastUpdateTime: '2019-07-29T17:04:21Z',
          },
        ],
      },
    },
  ],
};

export const mockCreateResourcePost = {
  kind: 'ResourceView',
  apiVersion: 'mcm.ibm.com/v1alpha1',
  metadata: {
    name: 'policies-policy-mcm-ibm-com-1563995392802',
    namespace: 'default',
    selfLink:
      '/apis/mcm.ibm.com/v1alpha1/namespaces/default/resourceviews/policies-policy-mcm-ibm-com-1563995392802',
    uid: '9db12327-ae46-11e9-aefd-d6c200451d50',
    resourceVersion: '146053',
    creationTimestamp: '2019-07-24T19:09:52Z',
    labels: {
      name: 'policies-policy-mcm-ibm-com-1563995392802',
    },
    annotations: {
      'mcm.ibm.com/user-group': 'c3lzdGVtOmF1dGhlbnRpY2F0ZWQ=',
      'mcm.ibm.com/user-identity': 'aHR0cHM6Ly8xMjcuMC4wLjE6OTQ0My9vaWRjL2VuZHBvaW50L09QI2FkbWlu',
    },
  },
  spec: {
    scope: {
      resource: 'policies.policy.mcm.ibm.com',
    },
  },
  status: {},
};

export const mockClusterListResponse = {
  data: {
    clustersInPolicy: [
      {
        name: 'cluster1',
        metadata: {
          labels: {
            cloud: 'IBM',
            datacenter: 'toronto',
            environment: 'Dev',
            name: 'cluster1',
            owner: 'marketing',
            region: 'US',
            vendor: 'ICP',
          },
          name: 'cluster1',
          namespace: 'cluster1',
          annotations: {
            'mcm.ibm.com/deployer-prefix': 'md',
            'mcm.ibm.com/secretRef': 'cluster1-federation-secret',
            'mcm.ibm.com/user-group': 'aGNtOmNsdXN0ZXJzLHN5c3RlbTphdXRoZW50aWNhdGVk',
            'mcm.ibm.com/user-identity': 'aGNtOmNsdXN0ZXJzOmNsdXN0ZXIxOmNsdXN0ZXIx',
          },
          uid: '16870299-a7ca-11e9-aefd-d6c200451d50',
          selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/cluster1/clusterstatuses/cluster1',
        },
        kind: 'Cluster',
        apiVersion: 'clusterregistry.k8s.io/v1alpha1',
        spec: {
          consoleURL: 'https://9.42.78.148:8443',
        },
        status: {
          conditions: [
            {
              type: 'OK',
              status: '',
              lastHeartbeatTime: '2019-07-22T16:44:32Z',
              lastTransitionTime: null,
            },
          ],
        },
        total: '1',
        violated: '0',
        policy: {
          apiVersion: 'policy.mcm.ibm.com/v1alpha1',
          kind: 'Policy',
          metadata: {
            annotations: {
              'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"policy.mcm.ibm.com/v1alpha1","kind":"Policy","metadata":{"annotations":{"policy.mcm.ibm.com/categories":"SystemAndCommunicationsProtections,SystemAndInformationIntegrity","policy.mcm.ibm.com/controls":"MutationAdvisor,VA","policy.mcm.ibm.com/standards":"NIST,HIPAA"},"name":"policy-role","namespace":"mcm"},"spec":{"namespaces":{"exclude":["kube*"],"include":["default"]},"remediationAction":"inform","role-templates":[{"apiVersion":"roletemplate.mcm.ibm.com/v1alpha1","complianceType":"musthave","metadata":{"name":"operator-role-policy","namespace":""},"rules":[{"complianceType":"musthave","policyRule":{"apiGroups":["extensions","apps"],"resources":["deployments"],"verbs":["get","list","watch","create","delete","patch"]}}],"selector":{"matchLabels":{"dev":"true"}}}]}}',
              'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
              'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
              'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
              'seed-generation': '2',
            },
            creationTimestamp: '2019-07-22T13:45:06Z',
            finalizers: [
              'policy.finalizer.mcm.ibm.com',
              'sync.finalizer.mcm.ibm.com',
            ],
            generation: 2,
            name: 'policy-role',
            namespace: 'cluster1',
            resourceVersion: '12597689',
            selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/cluster1/policies/policy-role',
            uid: 'ea2dde00-ac86-11e9-af27-005056a0e992',
          },
          spec: {
            namespaces: {
              exclude: [
                'kube*',
              ],
              include: [
                'default',
              ],
            },
            remediationAction: 'inform',
            'role-templates': [
              {
                apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                complianceType: 'musthave',
                metadata: {
                  creationTimestamp: null,
                  name: 'operator-role-policy',
                },
                rules: [
                  {
                    complianceType: 'musthave',
                    policyRule: {
                      apiGroups: [
                        'extensions',
                        'apps',
                      ],
                      resources: [
                        'deployments',
                      ],
                      verbs: [
                        'get',
                        'list',
                        'watch',
                        'create',
                        'delete',
                        'patch',
                      ],
                    },
                  },
                ],
                selector: {
                  matchLabels: {
                    dev: 'true',
                  },
                },
                status: {
                  Compliant: 'Compliant',
                  Validity: {
                    valid: true,
                  },
                  conditions: [
                    {
                      lastTransitionTime: '2019-07-22T13:45:11Z',
                      message: 'k8s RBAC role "operator-role-policy" exists and matches',
                      reason: 'K8s RBAC role matches',
                      status: 'True',
                      type: 'completed',
                    },
                  ],
                },
              },
            ],
          },
          status: {
            compliant: 'Compliant',
            valid: true,
          },
        },
      },
      {
        name: 'clusterhub',
        metadata: {
          labels: {
            cloud: 'IBM',
            datacenter: 'toronto',
            environment: 'Dev',
            name: 'clusterhub',
            owner: 'marketing',
            region: 'US',
            vendor: 'ICP',
          },
          name: 'clusterhub',
          namespace: 'clusterhub',
          annotations: {
            'mcm.ibm.com/deployer-prefix': 'md',
            'mcm.ibm.com/secretRef': 'clusterhub-federation-secret',
            'mcm.ibm.com/user-group': 'aGNtOmNsdXN0ZXJzLHN5c3RlbTphdXRoZW50aWNhdGVk',
            'mcm.ibm.com/user-identity': 'aGNtOmNsdXN0ZXJzOmNsdXN0ZXJodWI6Y2x1c3Rlcmh1Yg==',
          },
          uid: '3976ec4a-a7c9-11e9-aefd-d6c200451d50',
          selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/clusterhub/clusterstatuses/clusterhub',
        },
        kind: 'Cluster',
        apiVersion: 'clusterregistry.k8s.io/v1alpha1',
        spec: {
          consoleURL: 'https://9.42.81.137:8443',
        },
        status: {
          conditions: [
            {
              type: 'OK',
              status: '',
              lastHeartbeatTime: '2019-07-22T16:44:43Z',
              lastTransitionTime: null,
            },
          ],
        },
        total: '1',
        violated: '1',
        policy: {
          apiVersion: 'policy.mcm.ibm.com/v1alpha1',
          kind: 'Policy',
          metadata: {
            annotations: {
              'kubectl.kubernetes.io/last-applied-configuration': '{"apiVersion":"policy.mcm.ibm.com/v1alpha1","kind":"Policy","metadata":{"annotations":{"policy.mcm.ibm.com/categories":"SystemAndCommunicationsProtections,SystemAndInformationIntegrity","policy.mcm.ibm.com/controls":"MutationAdvisor,VA","policy.mcm.ibm.com/standards":"NIST,HIPAA"},"name":"policy-role","namespace":"mcm"},"spec":{"namespaces":{"exclude":["kube*"],"include":["default"]},"remediationAction":"inform","role-templates":[{"apiVersion":"roletemplate.mcm.ibm.com/v1alpha1","complianceType":"musthave","metadata":{"name":"operator-role-policy","namespace":""},"rules":[{"complianceType":"musthave","policyRule":{"apiGroups":["extensions","apps"],"resources":["deployments"],"verbs":["get","list","watch","create","delete","patch"]}}],"selector":{"matchLabels":{"dev":"true"}}}]}}',
              'policy.mcm.ibm.com/categories': 'SystemAndCommunicationsProtections,SystemAndInformationIntegrity',
              'policy.mcm.ibm.com/controls': 'MutationAdvisor,VA',
              'policy.mcm.ibm.com/standards': 'NIST,HIPAA',
              'seed-generation': '3004',
            },
            creationTimestamp: '2019-07-22T13:45:06Z',
            finalizers: [
              'propagator.finalizer.mcm.ibm.com',
              'policy.finalizer.mcm.ibm.com',
            ],
            generation: 3004,
            name: 'policy-role',
            namespace: 'clusterhub',
            ownerReferences: [
              {
                apiVersion: 'policy.mcm.ibm.com/v1alpha1',
                blockOwnerDeletion: true,
                controller: true,
                kind: 'Policy',
                name: 'policy-role',
                uid: '47dbc091-a7cc-11e9-8a41-005056a061f1',
              },
            ],
            resourceVersion: '1229059',
            selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/clusterhub/policies/policy-role',
            uid: 'ea2cc1bd-ac86-11e9-8a41-005056a061f1',
          },
          spec: {
            namespaces: {
              exclude: [
                'kube*',
              ],
              include: [
                'default',
              ],
            },
            remediationAction: 'inform',
            'role-templates': [
              {
                apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
                complianceType: 'musthave',
                metadata: {
                  creationTimestamp: null,
                  name: 'operator-role-policy',
                },
                rules: [
                  {
                    complianceType: 'musthave',
                    policyRule: {
                      apiGroups: [
                        'extensions',
                        'apps',
                      ],
                      resources: [
                        'deployments',
                      ],
                      verbs: [
                        'get',
                        'list',
                        'watch',
                        'create',
                        'delete',
                        'patch',
                      ],
                    },
                  },
                ],
                selector: {
                  matchLabels: {
                    dev: 'true',
                  },
                },
                status: {
                  Compliant: 'NonCompliant',
                  Validity: {
                    valid: true,
                  },
                  conditions: [
                    {
                      lastTransitionTime: '2019-07-22T16:44:58Z',
                      message: 'k8s RBAC role is missing: operator-role-policy',
                      reason: 'K8s RBAC role is missing',
                      status: 'True',
                      type: 'completed',
                    },
                  ],
                },
              },
            ],
          },
          status: {
            compliant: 'NonCompliant',
            valid: true,
          },
        },
      },
    ],
  },
};

export const mockViolationListResponse = {
  data: {
    violations: {
      cluster: 'clusterhub',
      message: 'k8s RBAC role is missing: operator-role-policy',
      name: 'operator-role-policy',
      reason: 'K8s RBAC role is missing',
      selector: {
        matchLabels: {
          dev: 'true',
        },
      },
      status: 'NonCompliant',
      __typename: 'Violations',
    },
  },
};

export const mockPolicyListResponse = {
  kind: 'ResourceView',
  apiVersion: 'mcm.ibm.com/v1alpha1',
  metadata: {
    name: 'policy-1546551175122',
    namespace: 'default',
    selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/default/resourceviews/policy-1546551175122',
    uid: '21c50bb6-0f9f-11e9-a535-e2d4c161f9ad',
    resourceVersion: '30574',
    creationTimestamp: '2019-01-03T21:32:55Z',
    labels: {
      name: 'policy-1546551175122',
    },
    annotations: {
      'mcm.ibm.com/user-group': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50cyxzeXN0ZW06c2VydmljZWFjY291bnRzOmt1YmUtc3lzdGVtLHN5c3RlbTphdXRoZW50aWNhdGVk',
      'mcm.ibm.com/user-identity': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRlZmF1bHQ=',
    },
  },
  spec: {
    clusterSelector: {
      matchLabels: {
        name: 'cluster2',
      },
    },
    scope: {
      resource: 'policy',
      resourceName: 'policy-all',
      namespace: 'mcm-cluster2',
    },
  },
  status: {
    conditions: [{
      type: 'Completed',
      lastUpdateTime: '2019-01-03T21:32:55Z',
    }],
    results: {
      cluster2: {
        apiVersion: 'policy.mcm.ibm.com/v1alpha1',
        kind: 'Policy',
        metadata: {
          annotations: {
            'seed-generation': '7',
          },
          creationTimestamp: '2019-01-03T16:29:46Z',
          finalizers: [
            'finalizer.mcm.ibm.com',
          ],
          generation: 1,
          labels: {
            compliance: 'compliance-all',
            ignore: 'false',
          },
          name: 'policy-all',
          namespace: 'mcm-cluster2',
          ownerReferences: [{
            apiVersion: 'compliance.mcm.ibm.com/v1alpha1',
            blockOwnerDeletion: true,
            controller: true,
            kind: 'Compliance',
            name: 'compliance-all',
            uid: 'c8ad7adb-0f74-11e9-9723-0e8b333ab57e',
          }],
          resourceVersion: '5543743',
          selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mcm-cluster2/policies/policy-all',
          uid: 'c8af7ef9-0f74-11e9-9723-0e8b333ab57e',
        },
        spec: {
          complianceType: 'musthave',
          namespaces: {
            exclude: [
              'kube*',
            ],
            include: [
              'default',
            ],
          },
          'object-templates': [{
            complianceType: 'musthave',
            objectDefinition: {
              apiVersion: 'v1',
              kind: 'Pod',
              metadata: {
                name: 'nginx',
              },
              spec: {
                containers: [{
                  image: 'nginx:1.7.9',
                  name: 'nginx',
                  ports: [{
                    containerPort: 80,
                  }],
                }],
              },
            },
            status: {
              Compliant: 'Compliant',
              Validity: {},
              conditions: [{
                lastTransitionTime: '2019-01-03T21:32:49Z',
                message: 'pods `nginx` exists as it should be, therefore the this Object template is compliant',
                reason: 'K8s `must have` object already exists',
                status: 'True',
                type: 'notification',
              }],
            },
          },
          {
            complianceType: 'musthave',
            objectDefinition: {
              apiVersion: 'v1',
              kind: 'Namespace',
              metadata: {
                labels: {
                  name: 'production',
                },
                name: 'production',
              },
            },
            status: {
              Compliant: 'Compliant',
              Validity: {},
              conditions: [{
                lastTransitionTime: '2019-01-03T21:32:49Z',
                message: 'namespaces `production` exists as it should be, therefore the this Object template is compliant',
                reason: 'K8s `must have` object already exists',
                status: 'True',
                type: 'notification',
              }],
            },
          },
          {
            complianceType: 'musthave',
            objectDefinition: {
              apiVersion: 'rbac.authorization.k8s.io/v1',
              kind: 'RoleBinding',
              metadata: {
                name: 'operate-pods-rolebinding',
                namespace: 'default',
              },
              roleRef: {
                apiGroup: 'rbac.authorization.k8s.io',
                kind: 'Role',
                name: 'operator',
              },
              subjects: [{
                apiGroup: 'rbac.authorization.k8s.io',
                kind: 'User',
                name: 'jane',
              }],
            },
            status: {
              Compliant: 'Compliant',
              Validity: {},
              conditions: [{
                lastTransitionTime: '2019-01-03T21:32:49Z',
                message: 'rolebindings `operate-pods-rolebinding` exists as it should be, therefore the this Object template is compliant',
                reason: 'K8s `must have` object already exists',
                status: 'True',
                type: 'notification',
              }],
            },
          },
          {
            complianceType: 'musthave',
            objectDefinition: {
              apiVersion: 'policy/v1beta1',
              kind: 'PodSecurityPolicy',
              metadata: {
                annotations: {
                  'seccomp.security.alpha.kubernetes.io/allowedProfileNames': '*',
                },
                name: 'privileged-mcm',
              },
              spec: {
                allowPrivilegeEscalation: true,
                allowedCapabilities: [
                  '*',
                ],
                fsGroup: {
                  rule: 'RunAsAny',
                },
                hostIPC: true,
                hostNetwork: true,
                hostPID: true,
                hostPorts: [{
                  max: 65535,
                  min: 0,
                }],
                privileged: true,
                runAsUser: {
                  rule: 'RunAsAny',
                },
                seLinux: {
                  rule: 'RunAsAny',
                },
                supplementalGroups: {
                  rule: 'RunAsAny',
                },
                volumes: [
                  '*',
                ],
              },
            },
            status: {
              Compliant: 'Compliant',
              Validity: {},
              conditions: [{
                lastTransitionTime: '2019-01-03T21:32:49Z',
                message: 'podsecuritypolicies `privileged-mcm` exists as it should be, therefore the this Object template is compliant',
                reason: 'K8s `must have` object already exists',
                status: 'True',
                type: 'notification',
              }],
            },
          },
          {
            complianceType: 'musthave',
            objectDefinition: {
              apiVersion: 'networking.k8s.io/v1',
              kind: 'NetworkPolicy',
              metadata: {
                name: 'allow-all-mcm',
              },
              spec: {
                ingress: [{}],
                podSelector: {},
              },
            },
            status: {
              Compliant: 'Compliant',
              Validity: {},
              conditions: [{
                lastTransitionTime: '2019-01-03T21:32:49Z',
                message: 'networkpolicies `allow-all-mcm` exists as it should be, therefore the this Object template is compliant',
                reason: 'K8s `must have` object already exists',
                status: 'True',
                type: 'notification',
              }],
            },
          },
          {
            complianceType: 'musthave',
            objectDefinition: {
              apiVersion: 'v1',
              kind: 'LimitRange',
              metadata: {
                name: 'mem-limit-range',
              },
              spec: {
                limits: [{
                  default: {
                    memory: '512Mi',
                  },
                  defaultRequest: {
                    memory: '256Mi',
                  },
                  type: 'Container',
                }],
              },
            },
            status: {
              Compliant: 'Compliant',
              Validity: {},
              conditions: [{
                lastTransitionTime: '2019-01-03T21:32:53Z',
                message: 'limitranges `mem-limit-range` exists as it should be, therefore the this Object template is compliant',
                reason: 'K8s `must have` object already exists',
                status: 'True',
                type: 'notification',
              }],
            },
          },
          ],
          remediationAction: 'enforce',
          'role-templates': [{
            apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
            complianceType: 'musthave',
            metadata: {
              creationTimestamp: null,
              name: 'operator-role',
            },
            rules: [{
              complianceType: 'musthave',
              policyRule: {
                apiGroups: [
                  'extensions',
                  'apps',
                ],
                resources: [
                  'deployments',
                ],
                verbs: [
                  'get',
                  'list',
                  'watch',
                  'create',
                  'delete',
                  'patch',
                ],
              },
            }],
            selector: {
              matchLabels: {
                hipaa: 'true',
              },
            },
            status: {
              Compliant: 'Compliant',
              Validity: {
                valid: true,
              },
            },
          }],
        },
        status: {
          compliant: 'Compliant',
          valid: true,
        },
      },
    },
  },
};

export const mockSinglePolicyResponse = {
  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
  kind: 'Policy',
  metadata: {
    creationTimestamp: '2018-09-04T16:13:50Z',
    finalizers: [
      'finalizer.mcm.ibm.com',
    ],
    generation: 1,
    labels: {
      compliance: 'compliance-xz',
    },
    name: 'policy-xz-1',
    namespace: 'mycluster',
    ownerReferences: [
      {
        apiVersion: 'compliance.mcm.ibm.com/v1alpha1',
        blockOwnerDeletion: true,
        controller: true,
        kind: 'Compliance',
        name: 'compliance-xz',
        uid: '82de70e7-b05d-11e8-9a12-005056a0d11b',
      },
    ],
    resourceVersion: '4349995',
    selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/mycluster/policies/policy-xz-1',
    uid: '82e00acc-b05d-11e8-9a12-005056a0d11b',
  },
  spec: {
    complianceType: '',
    namespaces: {
      exclude: [
        'kube*',
      ],
      include: [
        'default',
      ],
    },
    remediationAction: 'inform',
    'role-templates': [
      {
        apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
        complianceType: 'musthave',
        kind: 'RoleTemplate',
        metadata: {
          creationTimestamp: null,
          name: 'role-xz-1',
        },
        rules: [
          {
            complianceType: 'musthave',
            policyRule: {
              apiGroups: [
                'extensions',
                'apps',
              ],
              resources: [
                'deployments',
              ],
              verbs: [
                'get',
                'list',
                'watch',
                'create',
                'delete',
                'patch',
              ],
            },
          },
        ],
        selector: {
          matchLabels: {
            cloud: 'IBM',
          },
        },
        status: {
          Compliant: 'NonCompliant',
          Validity: {
            valid: true,
          },
          conditions: [
            {
              lastTransitionTime: '2018-09-06T15:14:44Z',
              message: 'k8s RBAC role is missing: role-xz-1',
              reason: 'K8s RBAC role is missing',
              status: 'True',
              type: 'completed',
            },
          ],
        },
      },
    ],
  },
  status: {
    Compliant: 'NonCompliant',
    Valid: true,
  },
};

export const mockCreatePolicy = {
  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
  kind: 'Policy',
  metadata: {
    creationTimestamp: '2018-09-06T17:12:34Z',
    generation: 1,
    name: 'test-policy',
    namespace: 'default',
    resourceVersion: '4385854',
    selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/default/policies/test-policy',
    uid: '0c388331-b1f8-11e8-9a12-005056a0d11b',
  },
  spec: {
    namespaces: {
      exclude: [
        'kube*',
      ],
      include: [
        'default',
      ],
    },
    remediationAction: 'enforce',
    'role-templates': [
      {
        apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
        complianceType: 'musthave',
        kind: 'RoleTemplate',
        metadata: {
          name: 'test-role',
          namespace: '',
        },
        rules: [
          {
            PolicyRule: {
              apiGroups: [
                'extensions',
                'apps',
              ],
              resources: [
                'deployments',
              ],
              verbs: [
                'get',
                'list',
                'watch',
                'delete',
              ],
            },
            complianceType: 'musthave',
          },
          {
            PolicyRule: {
              apiGroups: [
                'core',
              ],
              resources: [
                'pods',
              ],
              verbs: [
                'create',
                'update',
                'patch',
              ],
            },
            complianceType: 'mustnothave',
          },
          {
            PolicyRule: {
              apiGroups: [
                'core',
              ],
              resources: [
                'secrets',
              ],
              verbs: [
                'get',
                'watch',
                'list',
                'create',
                'delete',
                'update',
                'patch',
              ],
            },
          },
        ],
        selector: {
          matchLabels: {
            cloud: 'IBM',
          },
        },
      },
    ],
  },
};


export const mockPlacementPolicyResponse = {
  kind: 'PlacementPolicyList',
  apiVersion: 'mcm.ibm.com/v1alpha1',
  metadata: {
    selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/mcm/placementpolicies',
    resourceVersion: '51490',
  },
  items: [
    {
      metadata: {
        name: 'placement-xz',
        namespace: 'mcm',
        selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/mcm/placementpolicies/placement-xz',
        uid: '3df1e8f5-1053-11e9-a535-e2d4c161f9ad',
        resourceVersion: '51486',
        creationTimestamp: '2019-01-04T19:02:11Z',
        annotations: {
          'mcm.ibm.com/user-group': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50cyxzeXN0ZW06c2VydmljZWFjY291bnRzOmt1YmUtc3lzdGVtLHN5c3RlbTphdXRoZW50aWNhdGVk',
          'mcm.ibm.com/user-identity': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRlZmF1bHQ=',
        },
      },
      spec: {
        clusterLabels: {
          matchLabels: {
            cloud: 'IBM',
          },
        },
        resourceHint: {

        },
      },
      status: {
        decisions: [
          {
            clusterName: 'cluster3',
            clusterNamespace: 'cluster3',
          },
          {
            clusterName: 'cluster1',
            clusterNamespace: 'cluster1',
          },
        ],
      },
    },
  ],
};

export const mockPlacementBindingResponse = {
  kind: 'PlacementBindingList',
  apiVersion: 'mcm.ibm.com/v1alpha1',
  metadata: {
    selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/mcm/placementbindings',
    resourceVersion: '48564',
  },
  items: [
    {
      metadata: {
        name: 'binding-xz',
        namespace: 'mcm',
        selfLink: '/apis/mcm.ibm.com/v1alpha1/namespaces/mcm/placementbindings/binding-xz',
        uid: '7fc24685-0ec6-11e9-a535-e2d4c161f9ad',
        resourceVersion: '249',
        creationTimestamp: '2019-01-02T19:42:12Z',
        annotations: {
          'mcm.ibm.com/user-group': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50cyxzeXN0ZW06c2VydmljZWFjY291bnRzOmt1YmUtc3lzdGVtLHN5c3RlbTphdXRoZW50aWNhdGVk',
          'mcm.ibm.com/user-identity': 'c3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRlZmF1bHQ=',
          'seed-generation': '1',
        },
        finalizers: [
          'finalizer.mcm.ibm.com',
        ],
      },
      subjects: [
        {
          kind: 'Compliance',
          name: 'compliance-all',
        },
      ],
      placementRef: {
        name: 'placement-xz',
      },
    },
  ],
};

export const mockDeleteResponse = {
  apiVersion: 'policy.mcm.ibm.com/v1alpha1',
  kind: 'Policy',
  metadata: {
    creationTimestamp: '2018-09-06T15:06:23Z',
    deletionGracePeriodSeconds: 0,
    deletionTimestamp: '2018-09-06T15:09:33Z',
    finalizers: [
      'finalizer.mcm.ibm.com',
    ],
    generation: 2,
    name: 'test-policy',
    namespace: 'default',
    resourceVersion: '4348453',
    selfLink: '/apis/policy.mcm.ibm.com/v1alpha1/namespaces/default/policies/test-policy',
    uid: '6b4cc90c-b1e6-11e8-9a12-005056a0d11b',
  },
  spec: {
    complianceType: '',
    namespaces: {
      exclude: [
        'kube*',
      ],
      include: [
        'default',
      ],
    },
    remediationAction: 'enforce',
    'role-templates': [
      {
        apiVersion: 'roletemplate.mcm.ibm.com/v1alpha1',
        complianceType: 'musthave',
        kind: 'RoleTemplate',
        metadata: {
          creationTimestamp: null,
          name: 'test-role',
        },
        rules: [
          {
            complianceType: 'musthave',
            policyRule: {
              apiGroups: [
                'extensions',
                'apps',
              ],
              resources: [
                'deployments',
              ],
              verbs: [
                'get',
                'list',
                'watch',
                'delete',
              ],
            },
          },
          {
            complianceType: 'mustnothave',
            policyRule: {
              apiGroups: [
                'core',
              ],
              resources: [
                'pods',
              ],
              verbs: [
                'create',
                'update',
                'patch',
              ],
            },
          },
          {
            complianceType: 'musthave',
            policyRule: {
              apiGroups: [
                'core',
              ],
              resources: [
                'secrets',
              ],
              verbs: [
                'get',
                'watch',
                'list',
                'create',
                'delete',
                'update',
                'patch',
              ],
            },
          },
        ],
        selector: {
          matchLabels: {
            cloud: 'IBM',
          },
        },
        status: {
          Compliant: 'Compliant',
          Validity: {
            valid: true,
          },
          conditions: [
            {
              lastTransitionTime: '2018-09-06T15:06:24Z',
              message: 'k8s RBAC role "test-role" was missing ',
              reason: 'K8s RBAC role created',
              status: 'True',
              type: 'completed',
            },
          ],
        },
      },
    ],
  },
  status: {
    Compliant: 'Compliant',
    Valid: true,
  },
};
