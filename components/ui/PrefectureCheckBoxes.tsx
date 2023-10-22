import Prefectures from '../../assets/prefectures.json'
import { useRasas } from '../../lib/stores'
import { CheckBox } from '../base/CheckBox'
import styles from '../../lib/css/style.module.css'

export const PrefectureCheckBoxes = () => {
  const prefecture = useRasas((state) => state.prefectures)
  const addPrefecture = useRasas((state) => state.addPref)
  const removePrefecture = useRasas((state) => state.removePref)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (prefecture.find(pre => pre === parseInt(e.target.value))) {
      removePrefecture(parseInt(e.target.value))
      return
    }
    addPrefecture(parseInt(e.target.value))
  }
  const prefectures = Prefectures.prefectures.map((prefecture: {code:number, name: string}) => {
    return (
      <div key={prefecture.code}>
        <label className={styles.checkBox}>
          <CheckBox value={prefecture.code} onChange={(e) => onChange(e)} />
          <div className={styles.checkBoxLabel}>
          {prefecture.name}
          </div>
        </label>
      </div>
    )
  })
  
  return (
    <div className={styles.checkBoxWrapper}>
      {prefectures}
    </div>
  )
}

