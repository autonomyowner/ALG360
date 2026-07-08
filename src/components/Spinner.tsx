export default function Spinner({ className = '' }: { className?: string }) {
  return (
    <span className={`material-symbols-outlined animate-spin text-secondary ${className}`}>
      progress_activity
    </span>
  )
}
