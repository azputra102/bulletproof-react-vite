interface ApiError {
  response?: {
    status: number;
  };
}

export const queryConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      retry: (failureCount: number, error: unknown) => {
        const apiError = error as ApiError;
        if (apiError?.response?.status === 404) return false;
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
};
