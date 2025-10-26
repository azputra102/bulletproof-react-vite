import { QueryClient } from '@tanstack/react-query';

interface RouteModule {
  clientLoader?: (queryClient: QueryClient) => any;
  clientAction?: (queryClient: QueryClient) => any;
  default?: any;
  [key: string]: any;
}

export const convert = (queryClient: QueryClient) => (m: RouteModule) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};
