import type { RootState } from '@/store/types'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearch, setSearchTerm } from '@/store/actions'

export function SearchFilter() {
  const dispatch = useDispatch()
  const searchTerm = useSelector(
    (state: RootState) => state.filter.searchTerm,
  )

  return (
    <div className="search">
      <input
        onChange={e => dispatch(setSearchTerm(e.target.value))}
        placeholder="Поиск услуг..."
        type="text"
        value={searchTerm}
      />

      {searchTerm && (
        <button onClick={() => dispatch(clearSearch())}>
          ✕
        </button>
      )}
    </div>
  )
}
