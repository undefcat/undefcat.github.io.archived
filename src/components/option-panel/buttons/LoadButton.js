import { useAppContext } from '../../../common/useAppContext'

function LoadButton() {
  const { setWalls } = useAppContext()

  const handleChange = e => {
    const { files } = e.target

    if (files.length === 0) {
      return
    }

    const file = files[0]
    const reader = new FileReader()

    reader.onload = e => {
      const { result } = e.target

      try {
        const json = JSON.parse(result)
        const { walls } = json[0]

        setWalls(walls)

      } catch (e) {
        alert('파일을 읽을 수 없습니다.. ㅠ_ㅠ 파일이 깨진 것 같습니다.')
      }
    }

    reader.readAsText(file)
  }

  return (
    <input
      accept="application/json"
      type="file"
      onChange={handleChange}
    />
  )
}

export default LoadButton