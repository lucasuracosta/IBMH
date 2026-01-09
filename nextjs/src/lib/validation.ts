export interface ContactFormData {
  name: string
  lastName: string
  email: string
  phone: string
  message: string
  honeypot?: string
}

export interface ContactFormErrors {
  name?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-+()]{7,20}$/
const MAX_MESSAGE_LENGTH = 2000
const MAX_NAME_LENGTH = 100

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 5000)
}

export function validateContact(value: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const name = sanitizeInput(value.name)
  const lastName = sanitizeInput(value.lastName)
  const email = sanitizeInput(value.email)
  const phone = sanitizeInput(value.phone)
  const message = sanitizeInput(value.message)

  if (!name) {
    errors.name = 'Se requiere: Nombre'
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.name = `El nombre no puede exceder ${MAX_NAME_LENGTH} caracteres`
  }

  if (!lastName) {
    errors.lastName = 'Se requiere: Apellido'
  } else if (lastName.length > MAX_NAME_LENGTH) {
    errors.lastName = `El apellido no puede exceder ${MAX_NAME_LENGTH} caracteres`
  }

  if (!phone) {
    errors.phone = 'Se requiere: Teléfono'
  } else if (!PHONE_REGEX.test(phone)) {
    errors.phone = 'Formato de teléfono inválido'
  }

  if (!email) {
    errors.email = 'Se requiere: Email'
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Formato de email inválido'
  }

  if (!message) {
    errors.message = 'Se requiere: Mensaje'
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `El mensaje no puede exceder ${MAX_MESSAGE_LENGTH} caracteres`
  }

  return errors
}

export function isHoneypotFilled(value: ContactFormData): boolean {
  return Boolean(value.honeypot && value.honeypot.length > 0)
}
