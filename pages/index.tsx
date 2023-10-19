import { useEffect } from "react";
import { BackendApiClient } from "../lib/api/clients";

export default  function Home() {
  useEffect(() => {
    (async() => {
      const result = await BackendApiClient.get('/v1/population/composition/perYear', {params: {prefCode:1, cityCode:'-'}})
      console.log(result)
    })()
  }, [])
  return <>aaa</>
}
