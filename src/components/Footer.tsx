export default function Footer({ navigate }: { navigate: (to: string) => void }) {
  return (
    <footer className="bg-surface-container-lowest w-full rounded-t-xl border-t border-outline-variant mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-gutter px-margin-mobile md:px-margin-desktop py-10 md:py-12 max-w-container-max mx-auto">
        <div className="flex flex-col items-start">
          <button onClick={() => navigate('/')} className="mb-4">
            <img src="/logo.png" alt="الجزائر 360" className="h-10 md:h-12 w-auto" />
          </button>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80 hover:opacity-100">
            بوابة الثقافة والاستثمار
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <button onClick={() => navigate('/films')} className="w-fit font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">الأفلام</button>
            <button onClick={() => navigate('/podcasts')} className="w-fit font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">بودكاست</button>
            <button onClick={() => navigate('/library')} className="w-fit font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">المكتبة</button>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <a href="#" className="w-fit font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">تواصل معنا</a>
            <a href="#" className="w-fit font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">سياسة الخصوصية</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end justify-end gap-2">
          <span className="font-body-md text-body-md text-on-surface-variant opacity-80">
            © 2024 الجزائر 360. جميع الحقوق محفوظة.
          </span>
          <a href="https://sitedz.com" target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-tertiary hover:text-tertiary brightness-110 hover:brightness-150 transition-all drop-shadow-[0_0_10px_rgba(231,190,97,0.45)]">
            sitedz
          </a>
        </div>
      </div>
    </footer>
  )
}
