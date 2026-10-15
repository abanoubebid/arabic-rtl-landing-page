import { TrendingUp, Share2, Code2, Target, PenTool, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../../data/content.js'
import SectionHeader from '../ui/SectionHeader.jsx'
import { useInView } from '../../hooks/useInView.js'

// Icon registry keyed by string name from content.js
const iconMap = { TrendingUp, Share2, Code2, Target, PenTool, BarChart3 }

// ── Individual service card ──────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] ?? TrendingUp
  const [ref, inView] = useInView()

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="card hover:-translate-y-1 cursor-default group"
      aria-label={service.title}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm">{service.description}</p>
    </motion.article>
  )
}

// ── Services section ─────────────────────────────────────────────────────────
export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section
      id="services"
      className="section-padding gradient-section"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            id="services-heading"
            badge="خدماتنا"
            title="كل ما تحتاجه"
            titleAccent="في مكان واحد"
            subtitle="نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدة عملك على النمو والازدهار."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
