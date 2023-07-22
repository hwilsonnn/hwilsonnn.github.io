import { useLoaderData as useLoader } from "react-router-dom"

const useLoaderData = <T,>(
  _loader: (..._: any) => Promise<T> | T
): Awaited<T> => {
  return useLoader() as Awaited<T>
}

export default useLoaderData
