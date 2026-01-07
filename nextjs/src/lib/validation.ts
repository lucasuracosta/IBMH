export interface ContactFormData {
  name: string
  lastName: string
  email: string
  phone: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export function validateContact(value: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!value.name) {
    errors.name = 'Se requiere: Nombre'
  }

  if (!value.lastName) {
    errors.lastName = 'Se requiere: Apellido'
  }

  if (!value.phone) {
    errors.phone = 'Se requiere: Teléfono'
  }

  if (!value.email) {
    errors.email = 'Se requiere: Email'
  }

  if (!value.message) {
    errors.message = 'Se requiere: Mensaje'
  }

  return errors
}
