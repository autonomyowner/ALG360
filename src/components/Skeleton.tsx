export default function Skeleton({ className = '', variant = 'text' }: { className?: string; variant?: 'text' | 'card' | 'image' | 'circle' }) {
  const base = 'animate-pulse bg-white/5 rounded-xl'

  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className={`${base} h-4 w-full`} />
        <div className={`${base} h-4 w-5/6`} />
        <div className={`${base} h-4 w-2/3`} />
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={`rounded-xl overflow-hidden bg-surface-container-low border border-white/5 ${className}`}>
        <div className={`${base} aspect-[16/9] rounded-none`} />
        <div className="p-5 space-y-3">
          <div className="flex gap-2">
            <div className={`${base} h-4 w-16`} />
            <div className={`${base} h-4 w-12`} />
          </div>
          <div className={`${base} h-5 w-3/4`} />
          <div className={`${base} h-4 w-full`} />
          <div className={`${base} h-4 w-5/6`} />
        </div>
      </div>
    )
  }

  if (variant === 'image') {
    return <div className={`${base} ${className}`} />
  }

  return <div className={`${base} rounded-full ${className}`} />
}
