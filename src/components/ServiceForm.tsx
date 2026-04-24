import type { RootState } from '@/store/types'
import { useDispatch, useSelector } from 'react-redux'
import { addService, cancelEditing, clearForm, setFormField, setValidationErrors, updateService } from '@/store/actions'
import { validateForm } from '@/store/validation'

export const ServiceForm = () => {
  const dispatch = useDispatch()

  const { name, price, editingId, errors } = useSelector(
    (state: RootState) => state.form,
  )

  const isEditing = editingId !== null

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateForm(name, price)

    if (Object.keys(validationErrors).length > 0) {
      dispatch(setValidationErrors(validationErrors))
      return
    }

    if (isEditing) {
      dispatch(updateService(editingId, name.trim(), Number(price)))
    }
    else {
      dispatch(addService(name.trim(), Number(price)))
    }

    dispatch(clearForm())
  }

  return (
    <form
      className="service-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {isEditing ? 'Редактирование услуги' : 'Добавление услуги'}
      </h2>

      {isEditing && (
        <p className="edit-info">
          Сейчас редактируется:
          {' '}
          <strong>
            {name}
          </strong>
        </p>
      )}

      <div className="form-row">
        <input
          onChange={event =>
            dispatch(setFormField('name', event.target.value))}
          placeholder="Название услуги"
          type="text"
          value={name}
        />

        {errors.name && (
          <div className="error">
            {errors.name}
          </div>
        )}
      </div>

      <div className="form-row">
        <input
          onChange={event =>
            dispatch(setFormField('price', event.target.value))}
          placeholder="Цена"
          type="text"
          value={price}
        />

        {errors.price && (
          <div className="error">
            {errors.price}
          </div>
        )}
      </div>

      <div className="buttons">
        <button type="submit">
          Save
        </button>

        {isEditing && (
          <button
            onClick={() => dispatch(cancelEditing())}
            type="button"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
