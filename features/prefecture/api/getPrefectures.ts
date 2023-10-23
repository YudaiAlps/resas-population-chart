import { BackendApiClient } from '../../../lib/api/clients'
import { GetPrefecturesResponse } from '../../../lib/api/types/getPrefectures'

export const getPrefectures = async (): Promise<GetPrefecturesResponse> => {
  const response = await BackendApiClient.get('/v1/prefectures').then((res: any) => {
    return res.data
  })

  return response
}
