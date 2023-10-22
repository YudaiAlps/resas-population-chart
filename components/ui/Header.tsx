import styles from "../../lib/css/style.module.css"

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.headerText}>
        各都道府県の「人口構成」
      </span>
    </div>
  )
}