import {
  createQueryKeys,
  mergeQueryKeys,
} from "@lukemorales/query-key-factory";
import { getHttpEndpoint } from "@orbs-network/ton-access";

const tonEndpoint = createQueryKeys("tonEndpoint", {
  all: {
    queryFn: async () => {
      return await getHttpEndpoint({ network: "testnet" });
    },
    queryKey: ["tonEndpoint"],
  },
});

// Добавьте новый набор ключей запроса для API
const investmentChart = createQueryKeys("investmentChart", {
  all: {
    queryFn: async () => {
      const response = await fetch(
        "https://what-if-web-2d23e359a863.herokuapp.com/api/v1/investments/5/chart",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    queryKey: ["investmentChart"],
  },
});

export const queryKeys = mergeQueryKeys(tonEndpoint, investmentChart);
