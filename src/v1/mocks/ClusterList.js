/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */

export const mockCluster1Response = {
  kind: 'Cluster',
  apiVersion: 'clusterregistry.k8s.io/v1alpha1',
  metadata: {
    name: 'cluster1',
    namespace: 'cluster1',
    selfLink: '/apis/clusterregistry.k8s.io/v1alpha1/namespaces/cluster1/clusters/cluster1',
    uid: '6120d6bb-e482-11e9-aa00-96bb9600cc18',
    resourceVersion: '154479',
    creationTimestamp: '2019-10-01T19:33:43Z',
    labels: {
      cluster1: 'cluster1',
      environment: 'Dev',
      name: 'cluster1',
      region: 'US',
    },
    annotations: {
      'mcm.ibm.com/hub': 'hub0',
      'mcm.ibm.com/user-group': 'aGNtOmNsdXN0ZXJzLHN5c3RlbTphdXRoZW50aWNhdGVk',
      'mcm.ibm.com/user-identity': 'aGNtOmNsdXN0ZXJzOmNsdXN0ZXIxOmNsdXN0ZXIx',
      'seed-generation': '2',
    },
    finalizers: [
      'platform-api.cluster',
      'propagator.finalizer.mcm.ibm.com',
    ],
  },
  spec: {
    kubernetesApiEndpoints: {
      serverEndpoints: [
        {
          clientCIDR: '0.0.0.0/0',
          serverAddress: '9.42.82.160:8001',
        },
      ],
    },
    authInfo: {

    },
  },
  status: {
    conditions: [
      {
        type: 'OK',
        status: '',
        lastHeartbeatTime: '2019-10-23T14:18:09Z',
        lastTransitionTime: '2019-10-22T15:58:42Z',
      },
    ],
  },
};

export const mockClusterHubResponse = {
  kind: 'Cluster',
  apiVersion: 'clusterregistry.k8s.io/v1alpha1',
  metadata: {
    name: 'clusterhub',
    namespace: 'clusterhub',
    selfLink: '/apis/clusterregistry.k8s.io/v1alpha1/namespaces/clusterhub/clusters/clusterhub',
    uid: '24466f0f-e482-11e9-aa00-96bb9600cc18',
    resourceVersion: '154913',
    creationTimestamp: '2019-10-01T19:32:01Z',
    labels: {
      environment: 'Dev',
      name: 'clusterhub',
      region: 'US',
    },
    annotations: {
      'mcm.ibm.com/hub': 'hub0',
      'mcm.ibm.com/user-group': 'aGNtOmNsdXN0ZXJzLHN5c3RlbTphdXRoZW50aWNhdGVk',
      'mcm.ibm.com/user-identity': 'aGNtOmNsdXN0ZXJzOmNsdXN0ZXJodWI6Y2x1c3Rlcmh1Yg==',
      'seed-generation': '2',
    },
    finalizers: [
      'platform-api.cluster',
      'propagator.finalizer.mcm.ibm.com',
    ],
  },
  spec: {
    kubernetesApiEndpoints: {
      serverEndpoints: [
        {
          clientCIDR: '0.0.0.0/0',
          serverAddress: '9.42.82.240:8001',
        },
      ],
    },
    authInfo: {

    },
  },
  status: {
    conditions: [
      {
        type: 'OK',
        status: '',
        lastHeartbeatTime: '2019-10-23T15:34:40Z',
        lastTransitionTime: '2019-10-19T21:47:19Z',
      },
    ],
  },
};

export const mockMCMResponse = {
  kind: 'Status',
  apiVersion: 'v1',
  metadata: {
  },
  status: 'Failure',
  message: 'clusters.clusterregistry.k8s.io "mcm" not found',
  reason: 'NotFound',
  details: {
    name: 'mcm',
    group: 'clusterregistry.k8s.io',
    kind: 'clusters',
  },
  code: 404,
};

export const mockDefaultResponse = {
  kind: 'Status',
  apiVersion: 'v1',
  metadata: {
  },
  status: 'Failure',
  message: 'clusters.clusterregistry.k8s.io "default" not found',
  reason: 'NotFound',
  details: {
    name: 'default',
    group: 'clusterregistry.k8s.io',
    kind: 'clusters',
  },
  code: 404,
};

export const mockKubeSystemResponse = {
  kind: 'Status',
  apiVersion: 'v1',
  metadata: {

  },
  status: 'Failure',
  message: 'clusters.clusterregistry.k8s.io "kube-system" not found',
  reason: 'NotFound',
  details: {
    name: 'kube-system',
    group: 'clusterregistry.k8s.io',
    kind: 'clusters',
  },
  code: 404,
};
