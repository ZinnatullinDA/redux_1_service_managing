export interface Service {
  id: string
  name: string
  price: number
}

export interface FormErrors {
  name?: string
  price?: string
}

export interface RootState {
  services: {
    items: Service[]
  }
  form: {
    name: string
    price: string
    editingId: string | null
    errors: FormErrors
  }
  filter: {
    searchTerm: ''
  }
}
