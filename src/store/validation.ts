import type { FormErrors } from './types'

export const validateForm = (name: string, price: string): FormErrors => {
  const errors: FormErrors = {}

  if (!name.trim()) {
    errors.name = 'Введите название услуги'
  }
  else if (name.trim().length < 2) {
    errors.name = 'Название должно содержать минимум 2 символа'
  }

  const numericPrice = Number(price)

  if (!price.trim()) {
    errors.price = 'Введите цену'
  }
  else if (Number.isNaN(numericPrice)) {
    errors.price = 'Цена должна быть числом'
  }
  else if (numericPrice <= 0) {
    errors.price = 'Цена должна быть больше 0'
  }

  return errors
}
