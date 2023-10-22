import React from "react"

type Prop = {
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = ({value, onChange}: Prop) => {
  return (
    <>
      <input type="checkbox" value={value} onChange={onChange} />
    </>
  )
}