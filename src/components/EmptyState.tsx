export default function EmptyState({
  icon = 'search_off',
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon?: string
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <span className="material-symbols-outlined text-6xl text-outline/40 mb-4">
        {icon}
      </span>
      <h3 className="font-headline-md text-headline-md text-on-surface-variant mb-2">
        {title}
      </h3>
      {description && (
        <p className="font-body-md text-body-md text-outline max-w-sm mb-6">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="font-body-md text-body-md text-primary hover:text-secondary transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
