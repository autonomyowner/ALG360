import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchItem {
  id: string
  title: string
  description: string
  type: string
  href: string
  meta?: string
}

const searchIndex: SearchItem[] = [
  ...['وادي الذكريات', 'أوراس الصامد', 'نسمة الصحراء', 'زهرة اللوتس', 'اللحن الأخير', 'تيمقاد'].map((t, i) => ({
    id: `film-${i}`,
    title: t,
    description: ['رحلة سينمائية عبر أزقة القصبة', 'فيلم وثائقي يوثق بطولات الثورة', 'مغامرة في عمق الصحراء', 'قصة حب في وهران', 'رحلة فنان شاب', 'إعادة بناء حياة مدينة رومانية'][i],
    type: 'فيلم',
    href: '/films',
    meta: ['دراما', 'وثائقي', 'مغامرة', 'رومانسي', 'موسيقي', 'تاريخي'][i],
  })),
  ...['حوارات جزائرية', 'تاريخ الجزائر', 'الاقتصاد الرقمي', 'ثقافة وفنون', 'ريادة الأعمال', 'الطبخ الجزائري'].map((t, i) => ({
    id: `podcast-${i}`,
    title: t,
    description: ['لقاءات أسبوعية', 'رحلات عبر تاريخ الجزائر', 'تحليل التحول الرقمي', 'نافذة على المشهد الثقافي', 'قصص نجاح', 'وصفات تقليدية'][i],
    type: 'بودكاست',
    href: '/podcasts',
    meta: ['حوارات', 'تاريخ', 'اقتصاد', 'ثقافة', 'أعمال', 'مطبخ'][i],
  })),
  ...[
    { title: 'موسوعة التراث الجزائري', desc: 'أكبر مجموعة شاملة للتراث الجزائري', type: 'كتاب' },
    { title: 'التحول الرقمي في الجزائر 2025', desc: 'دراسة تحليلية حول مستقبل الرقمنة', type: 'تقرير' },
    { title: 'الأطلس الثقافي الجزائري', desc: 'خرائط تفاعلية للمعالم الثقافية', type: 'أطلس' },
    { title: 'قواعد اللغة الأمازيغية', desc: 'مرجع شامل لقواعد اللغة الأمازيغية', type: 'مرجع أكاديمي' },
    { title: 'الاستثمار في الجزائر 2024', desc: 'دليل المستثمر الشامل', type: 'دليل' },
    { title: 'ديوان الشعر الجزائري', desc: 'مختارات من الشعر الجزائري', type: 'مجموعة شعرية' },
    { title: 'المطبخ الجزائري بين الأصالة والمعاصرة', desc: 'رحلة في عالم النكهات الجزائرية', type: 'كتاب طبخ' },
    { title: 'الموسيقى الجزائرية', desc: 'توثيق لأنواع الموسيقى الجزائرية', type: 'أرشيف' },
  ].map((item, i) => ({
    id: `library-${i}`,
    title: item.title,
    description: item.desc,
    type: 'مكتبة',
    href: '/library',
    meta: item.type,
  })),
  ...['اللغة الأمازيغية للمبتدئين', 'تاريخ الجزائر الحديث', 'الاقتصاد الجزائري', 'الأدب الجزائري المعاصر', 'الجيولوجيا والثروات الطبيعية', 'الفنون الإسلامية في الجزائر'].map((t, i) => ({
    id: `academic-${i}`,
    title: t,
    description: ['دورة شاملة لتعلم الأمازيغية', 'دراسة تحليلية لتاريخ الجزائر', 'تحليل السياسات الاقتصادية', 'دراسة التيارات الأدبية', 'استكشاف الثروات الطبيعية', 'دورة حول العمارة الإسلامية'][i],
    type: 'أكاديمي',
    href: '/academic',
    meta: ['مبتدئ', 'متوسط', 'متقدم', 'متوسط', 'متقدم', 'متوسط'][i],
  })),
  ...['القصبة', 'طاسيلي ناجّر', 'قسنطينة', 'جبال الأوراس', 'تيمقاد', 'وادي ميزاب', 'الزرنة والمنشدات', 'الملحفة والبرنوس'].map((t, i) => ({
    id: `heritage-${i}`,
    title: t,
    description: ['قلعة تاريخية ومدينة عتيقة', 'أكبر متحف فني في الهواء الطلق', 'مدينة الجسور المعلقة', 'سلسلة جبلية تاريخية', 'مدينة رومانية أثرية', 'مجمع عمراني فريد', 'فن غنائي تقليدي', 'أزياء تقليدية جزائرية'][i],
    type: 'تراث',
    href: '/heritage',
    meta: ['الجزائر العاصمة', 'إليزي', 'قسنطينة', 'باتنة', 'باتنة', 'غرداية', 'تراث شفهي', 'تراث مادي'][i],
  })),
]

const typeConfig: Record<string, { icon: string; color: string }> = {
  فيلم: { icon: 'movie', color: 'text-secondary' },
  بودكاست: { icon: 'podcasts', color: 'text-secondary' },
  مكتبة: { icon: 'menu_book', color: 'text-tertiary' },
  أكاديمي: { icon: 'school', color: 'text-primary' },
  تراث: { icon: 'landscape', color: 'text-tertiary' },
}

export default function SearchOverlay({
  open,
  onClose,
  onNavigate,
}: {
  open: boolean
  onClose: () => void
  onNavigate: (to: string) => void
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        (item.meta && item.meta.toLowerCase().includes(q))
    )
  }, [query])

  const grouped = useMemo(() => {
    const map = new Map<string, SearchItem[]>()
    results.forEach((item) => {
      const group = map.get(item.type) || []
      group.push(item)
      map.set(item.type, group)
    })
    return Array.from(map.entries())
  }, [results])

  const handleSelect = (href: string) => {
    onClose()
    onNavigate(href)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-surface-dim/95 backdrop-blur-2xl flex flex-col"
        >
          <div className="max-w-3xl w-full mx-auto px-margin-mobile md:px-margin-desktop pt-3 md:pt-20 shrink-0">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={onClose}
                className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-1 -mr-1"
              >
                <span className="material-symbols-outlined text-xl">arrow_right</span>
              </button>
              <span className="material-symbols-outlined text-outline text-lg md:text-2xl shrink-0">search</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن أفلام، بودكاست، كتب..."
                className="flex-1 bg-transparent font-headline-md md:font-display-lg text-headline-md md:text-display-lg text-on-background placeholder:text-outline/40 outline-none py-1 md:py-2"
              />
              <button
                onClick={onClose}
                className="hidden md:inline-flex text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="h-px bg-white/5 mt-2 md:mt-6 mb-0 md:mb-6" />
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar px-margin-mobile md:px-margin-desktop max-w-3xl w-full mx-auto pb-4 md:pb-12">
            <div className="min-h-full">
              {query.trim() && results.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 md:py-32">
                  <span className="material-symbols-outlined text-4xl md:text-6xl text-outline/30 mb-3 md:mb-4">search_off</span>
                  <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-outline">لا توجد نتائج لـ &quot;{query}&quot;</p>
                </div>
              )}

              {!query.trim() && (
                <div className="flex flex-col items-center justify-center py-16 md:py-32">
                  <span className="material-symbols-outlined text-4xl md:text-6xl text-outline/30 mb-3 md:mb-4">manage_search</span>
                  <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-outline">ابدأ الكتابة للبحث في المحتوى</p>
                </div>
              )}

              {grouped.map(([type, items]) => {
                const cfg = typeConfig[type] || { icon: 'article', color: 'text-on-surface-variant' }
                return (
                  <div key={type} className="mb-4 md:mb-8">
                    <div className="sticky top-0 bg-surface-dim/90 backdrop-blur-md z-10 -mx-2 px-2 py-2 md:-mx-4 md:px-4 mb-1 md:mb-4 rounded-lg">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <span className={`material-symbols-outlined text-xs md:text-sm ${cfg.color}`}>{cfg.icon}</span>
                        <span className={`font-label-caps text-label-caps ${cfg.color}`}>{type}</span>
                        <span className="text-outline text-xs">({items.length})</span>
                      </div>
                    </div>
                    <div className="space-y-px md:space-y-1">
                      {items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item.href)}
                          className="w-full text-right group flex items-start gap-2 md:gap-4 p-2 md:p-4 -mx-2 md:-mx-4 px-2 md:px-4 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors min-h-[44px] md:min-h-0"
                        >
                          <span className={`material-symbols-outlined text-outline/50 group-hover:${cfg.color} transition-colors mt-0.5 text-lg md:text-2xl shrink-0`}>
                            {cfg.icon}
                          </span>
                          <div className="min-w-0 flex-1">
                            <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                            {item.meta && (
                              <span className="font-label-caps text-label-caps text-outline mr-1 md:mr-2 text-xs">({item.meta})</span>
                            )}
                            <p className="font-body-md text-body-md text-outline/70 text-xs truncate">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
