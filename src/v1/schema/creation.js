/** *****************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 ****************************************************************************** */
import config from '../../../config';

export const typeDef = `
type Existing {
  clusterLabels: JSON
  compliances: [ExistingCompliance]
  placements: [ExistingPlacements]
}

type ExistingCompliance {
  name: String
  namespace: String
  annotations: JSON
  spec: JSON
}

type ExistingPlacements {
  name: String
  clusterLabels: JSON
}
`;

export const resolver = {
  Query: {
    existing: async (root, args, {
      clusterModel, complianceModel, PlacementModel,
    }) => {
      // existing cluster labels
      const labelMap = {};
      const clusters = await clusterModel.getAllClusters();
      clusters.forEach(({
        metadata,
      }) => {
        const { labels } = metadata;
        Object.entries(labels).forEach(([key, value]) => {
          if (key !== 'name') {
            labelMap[`${key}=${value}`] = { key, value };
          }
        });
      });
      const clusterLabels = Object.values(labelMap);

      // existing compliances
      let compliances = await complianceModel.getCompliances();
      compliances = compliances.map(({
        name, namespace, metadata = {}, spec = {},
      }) => {
        const { annotations = {} } = metadata;
        return {
          name,
          namespace,
          annotations,
          spec,
        };
      });

      // existing compliance placements
      const complianceNamespace = config.get('complianceNamespace') || 'mcm';
      let placements = await PlacementModel.getPlacementPolicies();
      placements = placements
        .filter(({ metadata: { namespace } }) => namespace === complianceNamespace)
        .map(({ clusterLabels: cl, metadata = {} }) => {
          const { name } = metadata;
          return {
            name,
            clusterLabels: cl,
          };
        });

      return {
        clusterLabels, compliances, placements,
      };
    },
  },
};
