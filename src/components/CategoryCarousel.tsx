import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', dragFree: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-10 md:py-12 overflow-hidden">
      <h2 className="font-headline-md text-headline-md text-on-background mb-6 px-margin-mobile md:px-margin-desktop">
        التصنيفات
      </h2>

      <div className="relative group/carousel">
        {/* Prev button */}
        <button
          onClick={scrollPrev}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-surface-dim/80 backdrop-blur-md border border-white/10 text-on-surface hover:text-primary hover:border-primary/30 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="السابق"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="flex gap-4 px-margin-mobile md:px-margin-desktop">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="min-w-[75vw] sm:min-w-[260px] md:min-w-[280px] shrink-0 relative rounded-xl overflow-hidden group cursor-pointer h-40 md:h-48"
              >
                <div className="absolute inset-0">
                  <img src={cat.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-90`} />
                </div>
                <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end border border-white/10 rounded-xl group-hover:border-secondary-container/50 transition-colors">
                  <h3 className="font-headline-md text-headline-md text-on-background">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-surface-dim/80 backdrop-blur-md border border-white/10 text-on-surface hover:text-primary hover:border-primary/30 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="التالي"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6 px-margin-mobile md:px-margin-desktop">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? 'w-6 bg-secondary'
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`الانتقال إلى الشريحة ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
