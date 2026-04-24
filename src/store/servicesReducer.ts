import type { Service } from './types'
import { nanoid } from 'nanoid'
import { ADD_SERVICE, DELETE_SERVICE, UPDATE_SERVICE } from './actions'

interface ServicesState {
  items: Service[]
}

const initialState: ServicesState = {
  items: [
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  ],
}

export const servicesReducer = (state = initialState, action: any): ServicesState => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nanoid(),
            name: action.payload.name,
            price: action.payload.price,
          },
        ],
      }

    case UPDATE_SERVICE:
      return {
        ...state,
        items: state.items.map(service =>
          service.id === action.payload.id
            ? {
                ...service,
                name: action.payload.name,
                price: action.payload.price,
              }
            : service,
        ),
      }

    case DELETE_SERVICE:
      return {
        ...state,
        items: state.items.filter(
          service => service.id !== action.payload.id,
        ),
      }

    default:
      return state
  }
}
