export type PrefectureData = {
  prefCode: number
  prefName: string
}

export type GetPrefecturesResponse = {
  message?: string
  result: PrefectureData[]
}