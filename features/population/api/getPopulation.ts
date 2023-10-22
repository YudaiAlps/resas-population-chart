import { BackendApiClient } from "../../../lib/api/clients";
import { GetPopulationRequest, GetPopulationResponse } from "../../../lib/api/types";

export const getPopulationAsync = async(request: Partial<GetPopulationRequest>): Promise<GetPopulationResponse> => {
  const response = await BackendApiClient.get('/v1/population/composition/perYear', {params: {prefCode:request.prefCode, cityCode:'-'}})
    .then((res:any) => {
      return res?.data
    })
  return response
}