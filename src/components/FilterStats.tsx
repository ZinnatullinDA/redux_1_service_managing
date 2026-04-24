import { useSelector } from 'react-redux'
import { selectFilterStats } from '@/store/selectors'

export function FilterStats() {
  const { found, total } = useSelector(selectFilterStats)

  return (
    <p>
      Найдено:
      {' '}
      {found}
      {' '}
      из
      {' '}
      {total}
    </p>
  )
}
