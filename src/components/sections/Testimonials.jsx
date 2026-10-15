import { useState } from 'react'
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../../data/content.js'
import SectionHeader from '../ui/SectionHeader.jsx'
import StarRating from '../ui/StarRating.jsx'
import { useInView } from '../../hooks/useInView.js'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()
  const total = testimonials.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      className="section-padding gradient-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            id="testimonials-heading"
            center
            badge="آراء عملائنا"
            title="ماذا يقول"
            titleAccent="عملاؤنا؟"
            subtitle="نفخر بثقة عملائنا ونعمل دومًا على تجاوز توقعاتهم."
          />
        </motion.div>

        {/* ── Featured testimonial card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="relative card p-8 md:p-10 shadow-md overflow-hidden">
            <Quote
              size={48}
              className="absolute top-6 end-6 text-primary-100"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <StarRating rating={t.rating} />

                <blockquote className="mt-4 text-lg md:text-xl text-neutral-700 leading-relaxed font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 mt-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${t.color}`}
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Navigation controls ── */}
        <div className="flex items-center justify-center gap-4">
          {/* Prev — in RTL, the "previous" item is visually to the left, so we use ChevronRight */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-colors focus-visible:ring-2 focus-visible:ring-primary-600"
            aria-label="الشهادة السابقة"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2" role="tablist" aria-label="شهادات العملاء">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`شهادة ${item.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 bg-primary-600'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          {/* Next — in RTL, the "next" item is visually to the right, so we use ChevronLeft */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-colors focus-visible:ring-2 focus-visible:ring-primary-600"
            aria-label="الشهادة التالية"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
