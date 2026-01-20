import { axiosInstance } from "@repo/web-utils";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "@repo/web-utils";

export function searchAllArticle({ query }: { query: string }) {
  const { data, isLoading, error } = useQuery<AxiosResponse<any>>({
    queryKey: ["search-all-article"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/articles?q=${query}`);
      return response;
    },
  });

    return { data, isLoading, error };
}
