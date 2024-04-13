import {
  createQueryKeys,
  mergeQueryKeys,
} from "@lukemorales/query-key-factory";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import * as axios from "axios";

const fetchData = async ({ url }) => {
  const headers = {
    "Content-Type": "application/json",
    "X-Telegram-Init-Data": window.Telegram.WebApp.initData,
  };

  const { data } = await axios.default.get(url, {
    headers,
  });
  return data;
};

const tonEndpoint = createQueryKeys("tonEndpoint", {
  all: {
    queryFn: async () => {
      return await getHttpEndpoint({ network: "testnet" });
    },
    queryKey: ["tonEndpoint"],
  },
});

const investmentChart = createQueryKeys("investmentChart", {
  all: {
    queryFn: async () => {
      return await fetchData({
        url: "https://what-if-web-2d23e359a863.herokuapp.com/api/v1/investments/5/chart",
      });
    },
    queryKey: ["investmentChart"],
  },
});

export const queryKeys = mergeQueryKeys(tonEndpoint, investmentChart);
