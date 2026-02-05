import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createComment, deleteComment } from "../lib/api";

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComment,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["product", variables.productId], // call the useProduct Query in useProducts.js
      });
    },
  });
};

export const useDeleteComment = (productId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      // Here variables doesn't have productId, because deleteComment func only accepts commentId
      queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });
    },
  });
};
