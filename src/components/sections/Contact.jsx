import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { contact, siteConfig } from '../../data/content.js'
import SectionHeader from '../ui/SectionHeader.jsx'
import { useInView } from '../../hooks/useInView.js'
import { validateForm, submitContactForm } from '../../utils/form.js'

// ── Info card ────────────────────────────────────────────────────────────────
function InfoCard({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
        <Icon size={18} className="text-primary-600" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm text-neutral-500 mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
            {value}
          </a>
        ) : (
          <p className="font-semibold text-neutral-900">{value}</p>
        )}
      </div>
    </div>
  )
}

// ── Contact section ──────────────────────────────────────────────────────────
export default function Contact() {
  const [ref, inView] = useInView()

  const [values, setValues]   = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear field error on change
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fieldErrors = validateForm(values, contact.errors)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')
    try {
      await submitContactForm(values)
      setStatus('success')
      setValues({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const f = contact.fields

  return (
    <section
      id="contact"
      className="section-padding gradient-section"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            id="contact-heading"
            badge={contact.badge}
            title={contact.title}
            subtitle={contact.subtitle}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Info column (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <InfoCard
                icon={Phone}
                label="اتصل بنا"
                value={siteConfig.phone}
                href={`tel:${siteConfig.phone}`}
              />
              <InfoCard
                icon={Mail}
                label="راسلنا"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <InfoCard
                icon={MapPin}
                label="موقعنا"
                value={siteConfig.address}
              />
              <InfoCard
                icon={Clock}
                label="ساعات العمل"
                value="الأحد – الخميس، 9:00 ص – 6:00 م"
              />
            </div>

            {/* CTA card */}
            <div className="bg-primary-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">استشارة مجانية!</h3>
              <p className="text-primary-100 text-sm leading-relaxed">
                احجز جلسة استشارية مجانية مع أحد خبرائنا لمناقشة احتياجات مشروعك.
              </p>
            </div>
          </motion.div>

          {/* ── Form column (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle2 size={56} className="text-green-500" />
                <p className="text-xl font-bold text-neutral-900">{contact.successMessage}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary-600 hover:text-primary-700 font-medium underline transition-colors"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card p-6 md:p-8 flex flex-col gap-5"
                noValidate
                aria-label="نموذج التواصل"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {f.name.label} <span className="text-red-500" aria-label="مطلوب">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder={f.name.placeholder}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`input-field ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email + Phone (side by side on md+) */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      {f.email.label} <span className="text-red-500" aria-label="مطلوب">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder={f.email.placeholder}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`input-field ${errors.email ? 'error' : ''}`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      {f.phone.label}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder={f.phone.placeholder}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`input-field ${errors.phone ? 'error' : ''}`}
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} aria-hidden="true" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    {f.message.label} <span className="text-red-500" aria-label="مطلوب">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder={f.message.placeholder}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`input-field resize-none ${errors.message ? 'error' : ''}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* General error */}
                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle size={16} aria-hidden="true" />
                    حدث خطأ ما. يرجى المحاولة مرة أخرى.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                      جارٍ الإرسال…
                    </>
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      {contact.submitLabel}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
