import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory'
import { getHttpEndpoint } from "@orbs-network/ton-access";


const tonEndpoint = createQueryKeys('tonEndpoint', {
  all: {
    queryFn: async () => {
      const endpoint = await getHttpEndpoint({ network: "testnet" });
      return endpoint
    },
    queryKey: ['tonEndpoint'],
  },
});

export const queryKeys = mergeQueryKeys(tonEndpoint)