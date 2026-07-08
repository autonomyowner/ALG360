import { useState, useEffect } from 'react'
import Skeleton from '../components/Skeleton'
import EmptyState from '../components/EmptyState'

const courses = [
  {
    title: 'الذكاء الاصطناعي',
    category: 'تكنولوجيا',
    level: 'متقدم',
    description: 'تعلم أساسيات الذكاء الاصطناعي وتطبيقاته العملية في بناء أنظمة ذكية.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    title: 'تعلم الآلة',
    category: 'تكنولوجيا',
    level: 'متوسط',
    description: 'دورة شاملة في تعلم الآلة باستخدام أحدث الأدوات والتقنيات.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    title: 'فن الطبخ',
    category: 'مهارات',
    level: 'مبتدئ',
    description: 'اكتشف أسرار المطبخ الجزائري والعالمي مع أشهر الطهاة.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
  },
  {
    title: 'التصميم الجرافيكي',
    category: 'فنون',
    level: 'جميع المستويات',
    description: 'أتقن فن التصميم الجرافيكي باستخدام أدوات احترافية مثل Photoshop و Illustrator.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    title: 'الرسم التشكيلي',
    category: 'فنون',
    level: 'مبتدئ',
    description: 'طور مهاراتك في الرسم التشكيلي من المبادئ الأساسية إلى المستويات المتقدمة.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
  },
  {
    title: 'صناعة البطاقات',
    category: 'حرف يدوية',
    level: 'مبتدئ',
    description: 'تعلم فن صناعة البطاقات اليدوية والإبداعية للمناسبات المختلفة.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
  },
]

export default function TrainingCourses() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3">
          التكوينات و الدورات
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          مجموعة من التكوينات والدورات التعليمية في مجالات مختلفة لتطوير مهاراتك ومعرفتك.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="card" />
          ))}
        </div>
      ) : courses.length === 0 ? (
        <EmptyState
          icon="school"
          title="لا توجد دورات"
          description="لم نتمكن من العثور على دورات حالياً. يرجى العودة لاحقاً."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative rounded-xl overflow-hidden bg-surface-container-low border border-white/5 hover:border-secondary-container/50 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">{course.category}</span>
                  <span className="text-outline">•</span>
                  <span className="font-label-caps text-label-caps text-outline">{course.level}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
