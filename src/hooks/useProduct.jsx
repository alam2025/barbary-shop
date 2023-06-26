import { useQuery } from "@tanstack/react-query"

const useProduct=()=>{
      const {data : products=[],isLoading: productLoading}=useQuery({
            queryKey :['product'],
            queryFn:async()=>{
                  const res = await fetch('/products.json')
                  return res.json()
            }
      })

      return [products,productLoading]
}

export default useProduct