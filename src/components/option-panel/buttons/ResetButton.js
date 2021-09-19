import { useAppContext } from '../../../common/useAppContext'

function ResetButton() {
  const { resetWalls } = useAppContext()

  const handleOnClick = () => {
    const ok = window.confirm('현재 벽에 적용된 색상을 초기화 하시겠어요?')
    if (!ok) {
      return
    }

    resetWalls()
  }

  return (
    <button onClick={handleOnClick}>칠해진 벽 색상 초기화</button>
  )
}

export default ResetButton