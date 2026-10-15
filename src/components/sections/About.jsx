import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { about } from '../../data/content.js'
import SectionHeader from '../ui/SectionHeader.jsx'
import { useInView } from '../../hooks/useInView.js'
import { useCounter } from '../../hooks/useCounter.js'

// ── Animated stat card ───────────────────────────────────────────────────────
function StatCard({ value, suffix, label, index, shouldStart }) {
  const count = useCounter(value, 2000, shouldStart)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={shouldStart ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 text-center border border-neutral-100 shadow-sm"
    >
      <div className="text-4xl font-black text-primary-600 leading-none">
        {count}
        {suffix}
      </div>
      <p className="text-neutral-500 text-sm mt-2 font-medium">{label}</p>
    </motion.div>
  )
}

// ── About section ────────────────────────────────────────────────────────────
export default function About() {
  const [ref, inView] = useInView()

  const highlights = [
    'فريق من المتخصصين بخبرة تزيد عن 7 سنوات',
    'نتائج قابلة للقياس ومبنية على البيانات',
    'تقارير دورية شاملة وشفافة',
    'دعم متواصل على مدار الأسبوع',
  ]

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>

          {/* ── Text column ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              id="about-heading"
              badge={about.badge}
              title={about.title}
            />

            {about.body.map((para, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed mb-4">
                {para}
              </p>
            ))}

            <ul className="mt-6 flex flex-col gap-3" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Stats grid ── */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} shouldStart={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
