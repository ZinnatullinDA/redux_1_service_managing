import { combineReducers, createStore } from 'redux'
import { filterReducer } from '@/store/filterReducer'
import { formReducer } from '@/store/formReduser'
import { servicesReducer } from '@/store/servicesReducer'

const rootReducer = combineReducers({
  services: servicesReducer,
  form: formReducer,
  filter: filterReducer,
})

export const store = createStore(rootReducer)

export type AppDispatch = typeof store.dispatch
