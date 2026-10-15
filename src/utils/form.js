/**
 * Form utility functions.
 * ─────────────────────────────────────────────────────────────────────────────
 * submitContactForm: Replace the DEMO section with your preferred service
 *   (Formspree, EmailJS, custom API endpoint, etc.)
 *
 * validateForm: Pure validation — returns an object of field-level error strings.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Submit the contact form data.
 *
 * @param {{ name: string, email: string, phone: string, message: string }} data
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function submitContactForm(data) {
  // ─── OPTION 1: Formspree ──────────────────────────────────────────────────
  // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // if (!res.ok) throw new Error('Submission failed')
  // return { success: true }

  // ─── OPTION 2: EmailJS ────────────────────────────────────────────────────
  // import emailjs from '@emailjs/browser'
  // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY')
  // return { success: true }

  // ─── OPTION 3: Custom REST API ────────────────────────────────────────────
  // const res = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return res.json()

  // ─── DEMO: simulate a 1.5s async call ────────────────────────────────────
  await new Promise((resolve) => setTimeout(resolve, 1500))
  console.log('Form submitted:', data)
  return { success: true }
}

/**
 * Validate contact form fields against Arabic error messages.
 *
 * @param {Object} values        - Form field values
 * @param {Object} errorMessages - Arabic error strings from content.js
 * @returns {Object} errors - key/value pairs of field errors
 */
export function validateForm(values, errorMessages) {
  const errors = {}

  if (!values.name?.trim()) {
    errors.name = errorMessages.nameRequired
  }

  if (!values.email?.trim()) {
    errors.email = errorMessages.emailRequired
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = errorMessages.emailInvalid
  }

  if (values.phone && !/^[\d\s+\-()]{7,20}$/.test(values.phone)) {
    errors.phone = errorMessages.phoneInvalid
  }

  if (!values.message?.trim()) {
    errors.message = errorMessages.messageRequired
  } else if (values.message.trim().length < 10) {
    errors.message = errorMessages.messageTooShort
  }

  return errors
}
