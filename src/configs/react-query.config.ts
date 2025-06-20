import type { QueryClientConfig } from "@tanstack/react-query";

const REACT_QUERY_CONFIGS: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: true,
    },
  },
};

export default REACT_QUERY_CONFIGS;
