import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProduct = () => {
    const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token"); 
  

  const {
    data: products = [],
    isLoading: loading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allProducts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      return res.json();
    },
  });

  if (error) {
    console.error("Error fetching products:", error);
  }

  return [products, loading, refetch];
};

export default useProduct;
