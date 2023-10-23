import { create } from 'zustand'
import { PrefectureData } from '../api/types/getPrefectures'

export type PopulationData = {
  label: string
  data: number[]
  borderColor: string
}

export type State = {
  prefectures: PrefectureData[]
  selectedPrefectures: number[]
  populations: PopulationData[]
}

type Actions = {
  addPref: (pref: number) => void
  removePref: (pref: number) => void
  initPref: () => void
  addPopulations: (populationInfo: PopulationData[]) => void
  setPrefectures: (prefectures: PrefectureData[]) => void
}

const initState: State = {
  prefectures: [],
  selectedPrefectures: [],
  populations: [],
}

export const useRasas = create<State & Actions>()((set, get) => ({
  ...initState,
  addPref: (pref: number) => {
    set({ selectedPrefectures: [...get().selectedPrefectures, pref] })
  },
  removePref: (pref: number) => {
    set({ selectedPrefectures: get().selectedPrefectures.filter((pre) => pre !== pref) })
  },
  initPref: () => {
    set(initState)
  },
  addPopulations: (populationInfo) => {
    set({ populations: populationInfo })
  },
  setPrefectures: (prefectures) => {
    set({ prefectures })
  },
}))
