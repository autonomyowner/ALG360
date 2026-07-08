const categories = [
  {
    title: 'التراث',
    image: '/تراث.webp',
    gradient: 'from-surface-dim to-transparent',
  },
  {
    title: 'الاستثمار',
    image: '/investment.webp',
    gradient: 'from-surface-dim to-transparent',
  },
  {
    title: 'الثقافة',
    image: '/ثقافة.webp',
    gradient: 'from-surface-dim to-transparent',
  },
]

export default function CategoryCarousel() {
  return (
    <section className="py-10 md:py-12">
      <h2 className="font-headline-md text-headline-md text-on-background mb-6 px-margin-mobile md:px-margin-desktop">
        التصنيفات
      </h2>
      <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 snap-x px-margin-mobile md:px-margin-desktop">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="min-w-[260px] md:min-w-[280px] snap-start relative rounded-xl overflow-hidden group cursor-pointer shrink-0"
          >
            <div className="absolute inset-0">
              <img src={cat.image} alt="" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-90`} />
            </div>
            <div className="relative z-10 h-40 md:h-48 p-5 md:p-6 flex flex-col justify-end border border-white/10 rounded-xl group-hover:border-secondary-container/50 transition-colors">
              <h3 className="font-headline-md text-headline-md text-on-background">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
