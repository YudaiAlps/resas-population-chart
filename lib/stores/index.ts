import {create} from 'zustand'

export type PopulationData= {
  label: string
  data: number[]
  borderColor: string
}

export type State = {
  prefectures: number[]
  populations:  PopulationData[]
}

type Actions = {
  addPref: (pref: number) => void
  removePref: (pref:number) => void
  initPref: () => void
  addPopulations: (populationInfo: PopulationData[]) => void
}

const initState:State = {
  prefectures: [],
  populations: []
}

export const useRasas = create<State & Actions>()((set, get) => ({
  ...initState,
  addPref: (pref:number) => {
    set({prefectures: [...get().prefectures, pref]})
  },
  removePref: (pref: number) => {
    set({prefectures: get().prefectures.filter(pre => pre !== pref)})
  },
  initPref: () => {
    set(initState)
  },
  addPopulations: (populationInfo) => {
    set({populations: [...populationInfo]})
  }
}))