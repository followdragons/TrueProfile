import { useQuery } from '@tanstack/react-query';
import { TonClient } from '@ton/ton';
import React from "react";
import { useEffect, useState } from 'react';

import { queryKeys } from '~/libs/queries/queryKeys';


function useTonClientQuery() {
  const tonEndpointQuery = useQuery({ ...queryKeys.tonEndpoint.all })
  const [client, setClient] = useState<TonClient | null>(null)

  useEffect(() => {

    if (tonEndpointQuery.isSuccess) {
      setClient(new TonClient({
        endpoint: tonEndpointQuery.data,
      }))
    }
  }, [tonEndpointQuery.data, tonEndpointQuery.isSuccess])

  return client
}

const tonContext = React.createContext<TonClient | null>(null)

export const TonClientProvider = ({ children }) => {
  const client = useTonClientQuery();
  if (!client) return null;
  return <tonContext.Provider value={client}>{children}</tonContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTonClient() {
  const value = React.useContext(tonContext);
  if (!value) {
    throw new Error('useTonClientContext must be used within a TonClientProvider');
  }
  return value;
}