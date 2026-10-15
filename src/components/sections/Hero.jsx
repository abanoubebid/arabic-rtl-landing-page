import { ArrowLeft, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { hero } from '../../data/content.js'
import Button from '../ui/Button.jsx'
import { useInView } from '../../hooks/useInView.js'
import { useCounter } from '../../hooks/useCounter.js'

// ── Animated stat item ──────────────────────────────────────────────────────
function StatItem({ value, suffix, label, shouldStart }) {
  const count = useCounter(value, 2000, shouldStart)
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-primary-600">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-neutral-500 mt-1">{label}</div>
    </div>
  )
}

// ── Hero section ─────────────────────────────────────────────────────────────
export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const containerVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative gradient-hero min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="القسم الرئيسي"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-20 start-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 end-0 w-64 h-64 bg-secondary-100/50 rounded-full blur-2xl translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom section-padding w-full" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Text column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" aria-hidden="true" />
              {hero.badge}
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-4"
            >
              {hero.headline}
              <br />
              <span className="text-primary-600">{hero.headlineAccent}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              >
                <Button variant="primary" className="text-base px-8 py-4">
                  {hero.ctaPrimary}
                  {/* Arrow rotated 180° so it points left→right in RTL */}
                  <ArrowLeft size={18} className="rotate-180" aria-hidden="true" />
                </Button>
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
              >
                <Button variant="secondary" className="text-base px-8 py-4">
                  {hero.ctaSecondary}
                </Button>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-6"
            >
              {hero.stats.map((stat) => (
                <StatItem key={stat.label} {...stat} shouldStart={inView} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Visual / mock dashboard ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-neutral-100">
                {/* Browser-chrome dots */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="flex-1 h-4 bg-neutral-100 rounded-full" />
                </div>

                {/* Mock bar chart */}
                <div className="flex items-end gap-3 h-36 mb-4">
                  {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Summary row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500">نمو المبيعات</p>
                    <p className="text-2xl font-bold text-neutral-900">+147%</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                    ↑ ممتاز
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -end-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-neutral-100">
                <p className="text-xs text-neutral-500">عملاء راضون</p>
                <p className="text-xl font-bold text-primary-600">+150</p>
              </div>
              <div className="absolute -bottom-4 -start-4 bg-secondary-500 rounded-2xl shadow-lg px-4 py-3">
                <p className="text-xs text-white/80">معدل النجاح</p>
                <p className="text-xl font-bold text-white">98%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-12">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-primary-600 transition-colors"
            aria-label="التمرير إلى الخدمات"
          >
            <span className="text-xs font-medium">اكتشف المزيد</span>
            <ChevronDown size={20} className="animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
