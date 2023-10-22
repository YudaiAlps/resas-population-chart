
export type Population = {
  year: number
  value: number
}
export type DataType = {
  label:string 
  data: Population[]
}

export type GetPopulationRequest = {
  prefCode: number, cityCode: string, addArea:string
}

export type GetPopulationResponse = { 
  message: string, 
  result:{boundaryYear:number, data:DataType[]}
}