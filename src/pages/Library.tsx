import { useState, useEffect } from 'react'
import Skeleton from '../components/Skeleton'
import EmptyState from '../components/EmptyState'

const resources = [
  {
    title: 'موسوعة التراث الجزائري',
    type: 'كتاب',
    pages: 680,
    description: 'أكبر مجموعة شاملة للتراث المادي واللامادي الجزائري.',
  },
  {
    title: 'التحول الرقمي في الجزائر 2025',
    type: 'تقرير',
    pages: 142,
    description: 'دراسة تحليلية حول مستقبل الرقمنة في القطاعات الحيوية.',
  },
  {
    title: 'الأطلس الثقافي الجزائري',
    type: 'أطلس',
    pages: 320,
    description: 'خرائط تفاعلية للمعالم الثقافية والأثرية عبر الولايات.',
  },
  {
    title: 'قواعد اللغة الأمازيغية',
    type: 'مرجع أكاديمي',
    pages: 450,
    description: 'مرجع شامل لقواعد اللغة الأمازيغية بمختلف فروعها.',
  },
  {
    title: 'الاستثمار في الجزائر 2024',
    type: 'دليل',
    pages: 98,
    description: 'دليل المستثمر الشامل للفرص والحوافز الاستثمارية.',
  },
  {
    title: 'ديوان الشعر الجزائري',
    type: 'مجموعة شعرية',
    pages: 280,
    description: 'مختارات من الشعر الجزائري من الجاهلي إلى المعاصر.',
  },
  {
    title: 'المطبخ الجزائري بين الأصالة والمعاصرة',
    type: 'كتاب طبخ',
    pages: 210,
    description: 'رحلة في عالم النكهات الجزائرية عبر 150 وصفة تقليدية.',
  },
  {
    title: 'الموسيقى الجزائرية',
    type: 'أرشيف',
    pages: 190,
    description: 'توثيق لأنواع الموسيقى الجزائرية من الشعبي إلى المالوف.',
  },
]

export default function Library() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3">
          المكتبة
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          مكتبة رقمية تضم مئات المصادر والمراجع حول الجزائر: ثقافة، تاريخ، اقتصاد، وفنون.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} variant="card" />
          ))}
        </div>
      ) : resources.length === 0 ? (
        <EmptyState
          icon="menu_book"
          title="المكتبة فارغة"
          description="لا توجد موارد حالياً. يرجى العودة لاحقاً."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {resources.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl overflow-hidden bg-surface-container-low border border-white/5 hover:border-tertiary/30 transition-all duration-300 p-5"
            >
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-tertiary">menu_book</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-caps text-label-caps text-tertiary">{item.type}</span>
                <span className="text-outline">•</span>
                <span className="font-label-caps text-label-caps text-outline">{item.pages} صفحة</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-tertiary transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
