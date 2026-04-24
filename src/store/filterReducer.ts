import { CLEAR_SEARCH, SET_SEARCH_TERM } from './actions'

interface FilterState {
  searchTerm: string
}

const initialState: FilterState = {
  searchTerm: '',
}

export function filterReducer(state = initialState, action: any): FilterState {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      }

    case CLEAR_SEARCH:
      return initialState

    default:
      return state
  }
}
