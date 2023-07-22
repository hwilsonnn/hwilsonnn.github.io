import { useLoaderData as useLoader } from "react-router-dom"

const useLoaderData = <T,>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  _loader: (..._: any) => Promise<T> | T
): Awaited<T> => useLoader() as Awaited<T>

export default useLoaderData
