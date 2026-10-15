import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqItems } from '../../data/content.js'
import SectionHeader from '../ui/SectionHeader.jsx'
import { useInView } from '../../hooks/useInView.js'

// ── Individual FAQ item ──────────────────────────────────────────────────────
function FAQItem({ item, isOpen, onToggle, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-neutral-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
        className="w-full flex items-center justify-between gap-4 p-5 text-start bg-white hover:bg-neutral-50 transition-colors duration-200"
      >
        <span className="font-semibold text-neutral-900">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-primary-600 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-neutral-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── FAQ section ──────────────────────────────────────────────────────────────
export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const [ref, inView] = useInView()

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeader
            id="faq-heading"
            center
            badge="الأسئلة الشائعة"
            title="أجوبة على"
            titleAccent="أكثر أسئلتكم"
            subtitle="إذا لم تجد إجابتك هنا، لا تتردد في التواصل معنا مباشرة."
          />
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
