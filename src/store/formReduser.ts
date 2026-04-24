import type { FormErrors } from './types'
import { CANCEL_EDITING, CLEAR_FORM, DELETE_SERVICE, SET_FORM_FIELD, SET_VALIDATION_ERRORS, START_EDITING } from './actions'

interface FormState {
  name: string
  price: string
  editingId: string | null
  errors: FormErrors
}

const initialState: FormState = {
  name: '',
  price: '',
  editingId: null,
  errors: {},
}

export const  formReducer = (state = initialState, action: any): FormState => {
  switch (action.type) {
    case SET_FORM_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        errors: {
          ...state.errors,
          [action.payload.field]: undefined,
        },
      }

    case START_EDITING:
      return {
        name: action.payload.name,
        price: String(action.payload.price),
        editingId: action.payload.id,
        errors: {},
      }

    case CANCEL_EDITING:
    case CLEAR_FORM:
      return initialState

    case SET_VALIDATION_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }

    case DELETE_SERVICE:
      if (state.editingId === action.payload.id) {
        return initialState
      }

      return state

    default:
      return state
  }
}
