import prefectureData from '../../assets/prefectures.json'
export const notNull = <T>(item: T | null | undefined): item is T => {
  return item !== null && item !== undefined
}

export const getLineColor = (prefectureCode: number) => {
  return prefectureData.prefectures.find(pref => pref.code === prefectureCode)?.color || ''
}

export const castToPrefectureName = (prefectureCode: number) => {
  return prefectureData.prefectures.find(pref => pref.code === prefectureCode)?.name || ''
}