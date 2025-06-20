import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import REACT_QUERY_CONFIGS from "../../configs/react-query.config";

export type ReactQueryProviderProps = {
  children: ReactNode;
};
const queryClient = new QueryClient(REACT_QUERY_CONFIGS);
export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
