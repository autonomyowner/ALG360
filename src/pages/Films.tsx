import { useState, useEffect } from 'react'
import Skeleton from '../components/Skeleton'
import EmptyState from '../components/EmptyState'

const films = [
  {
    title: 'وادي الذكريات',
    category: 'دراما',
    year: '2024',
    description: 'رحلة سينمائية عبر أزقة القصبة العتيقة، حيث تتداخل حكايات الماضي مع نبض الحاضر.',
  },
  {
    title: 'أوراس الصامد',
    category: 'وثائقي',
    year: '2023',
    description: 'فيلم وثائقي يوثق بطولات الثورة الجزائرية من خلال شهادات حية وصور نادرة.',
  },
  {
    title: 'نسمة الصحراء',
    category: 'مغامرة',
    year: '2024',
    description: 'مغامرة شيقة في عمق الصحراء الجزائرية، حيث الطبيعة الخلابة والأسرار المدفونة.',
  },
  {
    title: 'زهرة اللوتس',
    category: 'رومانسي',
    year: '2023',
    description: 'قصة حب تتحدى الصعاب في مدينة وهران الساحرة، تمتزج فيها الثقافات.',
  },
  {
    title: 'اللحن الأخير',
    category: 'موسيقي',
    year: '2024',
    description: 'رحلة فنان شاب يسعى لإحياء التراث الموسيقي الجزائري الأصيل.',
  },
  {
    title: 'تيمقاد',
    category: 'تاريخي',
    year: '2023',
    description: 'إعادة بناء حياة مدينة رومانية عريقة من خلال أحدث تقنيات السينما.',
  },
]

export default function Films() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3">
          الأفلام الجزائرية
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          اكتشف مجموعة مختارة من أفضل الأفلام الجزائرية، من الدراما إلى الوثائقيات والتاريخ.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="card" />
          ))}
        </div>
      ) : films.length === 0 ? (
        <EmptyState
          icon="movie_off"
          title="لا توجد أفلام"
          description="لم نتمكن من العثور على أفلام حالياً. يرجى العودة لاحقاً."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.map((film) => (
            <div
              key={film.title}
              className="group relative rounded-xl overflow-hidden bg-surface-container-low border border-white/5 hover:border-secondary-container/50 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-surface-container-high" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">{film.category}</span>
                  <span className="text-outline">•</span>
                  <span className="font-label-caps text-label-caps text-outline">{film.year}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-primary transition-colors">
                  {film.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
