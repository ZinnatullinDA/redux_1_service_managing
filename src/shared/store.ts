import { combineReducers, createStore } from 'redux'
import { formReducer } from '@/store/formReduser'
import { servicesReducer } from '@/store/servicesReducer'

const rootReducer = combineReducers({
  services: servicesReducer,
  form: formReducer,
})

export const store = createStore(rootReducer)

export type AppDispatch = typeof store.dispatch
