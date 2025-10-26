import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { discussionsApi, DiscussionsQuery, CreateDiscussionData } from '../api';

export const useDiscussions = (query: DiscussionsQuery = {}) => {
  return useQuery({
    queryKey: ['discussions', query],
    queryFn: () => discussionsApi.getDiscussions(query),
  });
};

export const useDiscussion = (id: string) => {
  return useQuery({
    queryKey: ['discussions', id],
    queryFn: () => discussionsApi.getDiscussion(id),
    enabled: !!id,
  });
};

export const useCreateDiscussion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: discussionsApi.createDiscussion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
    },
  });
};

export const useUpdateDiscussion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CreateDiscussionData }) =>
      discussionsApi.updateDiscussion(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      queryClient.invalidateQueries({ queryKey: ['discussions', id] });
    },
  });
};

export const useDeleteDiscussion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: discussionsApi.deleteDiscussion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
    },
  });
};

export const useLikeDiscussion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: discussionsApi.likeDiscussion,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      queryClient.invalidateQueries({ queryKey: ['discussions', id] });
    },
  });
};

export const useUnlikeDiscussion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: discussionsApi.unlikeDiscussion,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      queryClient.invalidateQueries({ queryKey: ['discussions', id] });
    },
  });
};
