import { useRef } from 'react'
import { useAppContext } from '../../../common/useAppContext'

function SaveButton() {
  const { walls } = useAppContext()
  const ref = useRef()

  const handleSave = () => {
    const data = [
      {
        title: 'noname',
        date: new Date(),
        walls,
      },
    ]

    const encoded = encodeURIComponent(JSON.stringify(data))

    const href = `data:application/json;charset=utf-8,${encoded}`

    ref.current.setAttribute('href', href)
    ref.current.click()
  }

  return (
    <>
      <button type="button" onClick={handleSave}>저장</button>
      <a download="save.json" ref={ref} />
    </>
  )
}

export default SaveButton