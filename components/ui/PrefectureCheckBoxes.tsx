import { useRasas } from '@/lib/stores'
import { CheckBox } from '@/components/base/CheckBox'
import styles from '@/lib/css/style.module.css'
import React from 'react'

export const PrefectureCheckBoxes = () => {
  const prefecture = useRasas((state) => state.prefectures)
  const selectedPrefectures = useRasas((state) => state.selectedPrefectures)
  const addPrefecture = useRasas((state) => state.addPref)
  const removePrefecture = useRasas((state) => state.removePref)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedPrefectures.find((pre) => pre === parseInt(e.target.value))) {
      removePrefecture(parseInt(e.target.value))
      return
    }
    addPrefecture(parseInt(e.target.value))
  }
  const prefectures = prefecture.map((prefecture: { prefCode: number; prefName: string }) => {
    return (
      <div key={prefecture.prefCode}>
        <label className={styles.checkBox}>
          <CheckBox value={prefecture.prefCode} onChange={(e) => onChange(e)} />
          <div className={styles.checkBoxLabel}>{prefecture.prefName}</div>
        </label>
      </div>
    )
  })

  return <div className={styles.checkBoxWrapper}>{prefectures}</div>
}
