import { Twitter, Instagram, Linkedin, Youtube, Zap, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig, footerLinks } from '../../data/content.js'

const socialIcons = {
  twitter:   { Icon: Twitter,   label: 'تويتر'    },
  instagram: { Icon: Instagram, label: 'إنستغرام' },
  linkedin:  { Icon: Linkedin,  label: 'لينكدإن'  },
  youtube:   { Icon: Youtube,   label: 'يوتيوب'   },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      <div className="container-custom section-padding">
        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-700">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="flex items-center justify-center w-9 h-9 bg-primary-600 rounded-lg">
                <Zap size={20} className="text-white" aria-hidden="true" />
              </span>
              {siteConfig.name}
            </a>
            <p className="text-neutral-400 leading-relaxed max-w-sm mb-6">
              {siteConfig.tagline} — نقدم خدمات تسويق رقمي وتطوير ويب احترافية تساعد عملك على النمو والتميز.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-3 text-sm" role="list">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-400 shrink-0" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors" dir="ltr">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-400 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-400 shrink-0" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-neutral-400 hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3" role="list" aria-label="روابط التواصل الاجتماعي">
            {Object.entries(siteConfig.social).map(([key, href]) => {
              const entry = socialIcons[key]
              if (!entry) return null
              const { Icon, label } = entry
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
