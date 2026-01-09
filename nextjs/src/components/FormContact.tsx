'use client'

import { validateContact, isHoneypotFilled, type ContactFormData, type ContactFormErrors } from '@/lib/validation'
import { useState } from 'react'

export default function FormContact() {
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [value, setValue] = useState<ContactFormData>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault()
    const newValue = {
      ...value,
      [event.target.name]: event.target.value,
    }
    setValue(newValue)
    setErrors(validateContact(newValue))
  }

  const isSubmitDisabled = Object.keys(errors).length > 0 || isSubmitting

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isHoneypotFilled(value)) {
      setSubmitStatus('success')
      return
    }

    const validationErrors = validateContact(value)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // For now, just simulate a form submission
      // In the future, this can be connected to an API route or Firestore
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // You can integrate with services like:
      // - Email service (SendGrid, Resend, etc.)
      // - Firestore database
      // - Google Forms
      // - Formspree

      setSubmitStatus('success')
      setValue({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      })
      setErrors({})
      alert('Gracias por contactarte con nosotros. Te responderemos a la brevedad!')
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto px-6 py-12 space-y-8"
      noValidate
      aria-label="Formulario de contacto"
    >
      <input
        type="text"
        name="honeypot"
        value={value.honeypot}
        onChange={handleChange}
        className="absolute -left-[9999px] opacity-0 h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-black/80">
            Nombre <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            className="w-full h-12 border border-gray-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ibm-blue/20 focus:border-ibm-blue transition-all"
            type="text"
            placeholder="Tu nombre"
            name="name"
            value={value.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors?.name ? 'true' : 'false'}
            aria-describedby={errors?.name ? 'name-error' : undefined}
          />
          <p
            id="name-error"
            role="alert"
            className="text-red-500 text-sm"
            style={{ visibility: errors?.name ? 'visible' : 'hidden' }}
          >
            {errors?.name || ' '}
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-lastName" className="text-sm font-medium text-black/80">
            Apellido <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-lastName"
            className="w-full h-12 border border-gray-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ibm-blue/20 focus:border-ibm-blue transition-all"
            type="text"
            placeholder="Tu apellido"
            name="lastName"
            value={value.lastName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors?.lastName ? 'true' : 'false'}
            aria-describedby={errors?.lastName ? 'lastName-error' : undefined}
          />
          <p
            id="lastName-error"
            role="alert"
            className="text-red-500 text-sm"
            style={{ visibility: errors?.lastName ? 'visible' : 'hidden' }}
          >
            {errors?.lastName || ' '}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-black/80">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          className="w-full h-12 border border-gray-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ibm-blue/20 focus:border-ibm-blue transition-all"
          type="email"
          placeholder="tu.email@ejemplo.com"
          name="email"
          value={value.email}
          onChange={handleChange}
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors?.email ? 'true' : 'false'}
          aria-describedby={errors?.email ? 'email-error' : undefined}
        />
        <p
          id="email-error"
          role="alert"
          className="text-red-500 text-sm"
          style={{ visibility: errors?.email ? 'visible' : 'hidden' }}
        >
          {errors?.email || ' '}
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-phone" className="text-sm font-medium text-black/80">
          Teléfono <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-phone"
          className="w-full h-12 border border-gray-200 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-ibm-blue/20 focus:border-ibm-blue transition-all"
          type="tel"
          placeholder="+54 11 2233 4455"
          name="phone"
          value={value.phone}
          onChange={handleChange}
          autoComplete="tel"
          aria-required="true"
          aria-invalid={errors?.phone ? 'true' : 'false'}
          aria-describedby={errors?.phone ? 'phone-error' : undefined}
        />
        <p
          id="phone-error"
          role="alert"
          className="text-red-500 text-sm"
          style={{ visibility: errors?.phone ? 'visible' : 'hidden' }}
        >
          {errors?.phone || ' '}
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-black/80">
          Mensaje <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          className="w-full min-h-[180px] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ibm-blue/20 focus:border-ibm-blue transition-all resize-none"
          placeholder="Cuéntanos cómo podemos ayudarte..."
          name="message"
          value={value.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors?.message ? 'true' : 'false'}
          aria-describedby={errors?.message ? 'message-error' : undefined}
        />
        <p
          id="message-error"
          role="alert"
          className="text-red-500 text-sm"
          style={{ visibility: errors?.message ? 'visible' : 'hidden' }}
        >
          {errors?.message || ' '}
        </p>
      </div>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="bg-ibm-gold text-white hover:bg-ibm-gold/90 px-10 py-4 rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          disabled={isSubmitDisabled}
          aria-disabled={isSubmitDisabled}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>

      {submitStatus === 'error' && (
        <p role="alert" className="text-red-500 text-center text-sm">
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </p>
      )}
    </form>
  )
}
