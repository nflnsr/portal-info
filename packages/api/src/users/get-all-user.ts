import { axiosInstance } from "@repo/web-utils";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "@repo/web-utils";

export function getAllUser() {
  const { data, isLoading, error } = useQuery<AxiosResponse<any>>({
    queryKey: ["get-all-user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users");
      return response;
    },
  });

    return { data, isLoading, error };
}
