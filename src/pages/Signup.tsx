import { useState } from 'react'
import Spinner from '../components/Spinner'

export default function Signup({ navigate }: { navigate: (to: string) => void }) {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img src="/logo.png" alt="الجزائر 360" className="h-14 mx-auto mb-5" />
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-2">
            إنشاء حساب جديد
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            انضم إلى مجتمع الجزائر 360 واستكشف المحتوى الثقافي
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-body-md text-body-md text-on-surface-variant mb-2">
                الاسم الأول
              </label>
              <input
                type="text"
                placeholder="الاسم الأول"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-white/10 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block font-body-md text-body-md text-on-surface-variant mb-2">
                الاسم الأخير
              </label>
              <input
                type="text"
                placeholder="الاسم الأخير"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-white/10 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block font-body-md text-body-md text-on-surface-variant mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-white/10 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block font-body-md text-body-md text-on-surface-variant mb-2">
              كلمة المرور
            </label>
            <input
              type="password"
              placeholder="أنشئ كلمة مرور قوية"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-white/10 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block font-body-md text-body-md text-on-surface-variant mb-2">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              placeholder="أعد إدخال كلمة المرور"
              className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-white/10 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 mt-1 rounded border-white/10 bg-surface-container-low accent-primary" />
            <span className="font-body-md text-body-md text-on-surface-variant">
              أوافق على{' '}
              <a href="#" className="text-primary hover:text-secondary transition-colors">شروط الاستخدام</a>
              {' '}و{' '}
              <a href="#" className="text-primary hover:text-secondary transition-colors">سياسة الخصوصية</a>
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-xl bg-primary text-on-primary font-headline-md text-headline-md hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting && <Spinner />}
            {submitting ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-surface px-4 font-body-md text-body-md text-outline">أو</span>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 rounded-xl border border-white/10 font-body-md text-body-md text-on-surface-variant hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            التسجيل باستخدام Google
          </button>
          <button className="w-full py-3 rounded-xl border border-white/10 font-body-md text-body-md text-on-surface-variant hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            التسجيل باستخدام Facebook
          </button>
        </div>

        <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
          لديك حساب بالفعل؟{' '}
          <button onClick={() => navigate('/login')} className="text-primary hover:text-secondary transition-colors font-bold">
            تسجيل الدخول
          </button>
        </p>
      </div>
    </div>
  )
}
