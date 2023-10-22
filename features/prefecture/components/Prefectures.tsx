import { useEffect } from "react";
import { PrefectureCheckBoxes } from "../../../components/ui/PrefectureCheckBoxes";
import styles from "../../../lib/css/style.module.css"
import { useRasas } from "../../../lib/stores";
import { BackendApiClient } from "../../../lib/api/clients";
import { getPrefectures } from "../api/getPrefectures";

export const Prefectures = () => {
  const setPrefecture = useRasas((state) => state.setPrefectures)
  useEffect(() => {
    (async() => {
      const prefectures = await getPrefectures().then((res) => {
        if (res.result.length < 1) return []

        return res.result
      })

      setPrefecture(prefectures)
    })()
  }, [])
  return (
    <div className={styles.prefecturesWrapper}>
      <div className={styles.prefecturesLabel}>
        <span>
          都道府県
        </span>
      </div>
      <div className={styles.prefecturesCheckBoxWrapper}>
        <PrefectureCheckBoxes />
      </div>
    </div>
  )
}