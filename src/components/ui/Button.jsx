/**
 * Reusable Button component.
 *
 * @param {'primary' | 'secondary' | 'ghost'} variant
 */
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const classes = {
    primary:
      'btn-primary',
    secondary:
      'btn-secondary',
    ghost:
      'inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200',
  }

  return (
    <button className={`${classes[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
