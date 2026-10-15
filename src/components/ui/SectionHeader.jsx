/**
 * Reusable section header with badge, title, accent, and optional subtitle.
 * Supports centered and start-aligned layouts.
 */
export default function SectionHeader({
  badge,
  title,
  titleAccent,
  subtitle,
  center = false,
  id,
}) {
  const alignClass = center ? 'text-center items-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-primary-100">
          {badge}
        </span>
      )}
      <h2 id={id} className="section-title">
        {title}{' '}
        {titleAccent && <span className="text-primary-600">{titleAccent}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
