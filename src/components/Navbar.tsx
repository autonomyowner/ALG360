import { useState, useEffect } from 'react'
import SearchOverlay from './SearchOverlay'

const navLinks = [
  { label: 'الأفلام', to: '/films' },
  { label: 'بودكاست', to: '/podcasts' },
  { label: 'المكتبة', to: '/library' },
  { label: 'المركز الأكاديمي', to: '/academic' },
  { label: 'التراث', to: '/heritage' },
]

const dropdownItems = [
  { label: 'التكوينات و الدورات', to: '/courses' },
]

export default function Navbar({ navigate, pathname }: { navigate: (to: string) => void; pathname: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  const handleNav = (to: string) => {
    navigate(to)
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled ? 'bg-black/60 backdrop-blur-xl shadow-2xl border-white/10' : 'bg-transparent backdrop-blur-0 border-transparent'
        }`}
      >
        <div className="flex flex-row items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-container-max mx-auto">
          <div className="flex flex-1 justify-start md:flex-none">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 p-2 rounded-full"
            >
              <span className="material-symbols-outlined">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
            <button onClick={() => navigate('/')} className="hidden md:block w-9 h-9 rounded-full border-2 border-primary overflow-hidden shrink-0">
              <img src="/logo.png" alt="الجزائر 360" className="w-full h-full object-cover" />
            </button>
          </div>

          <div className="flex flex-1 justify-center">
            <button onClick={() => navigate('/')} className="md:hidden w-9 h-9 rounded-full border-2 border-primary overflow-hidden shrink-0">
              <img src="/logo.png" alt="الجزائر 360" className="w-full h-full object-cover" />
            </button>
            <div className="hidden md:flex flex-row gap-8 items-center">
              {navLinks.map((link) => {
                if (link.label === 'المركز الأكاديمي') {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        onClick={() => navigate(link.to)}
                        className={`font-body-md text-body-md transition-colors flex items-center gap-1 ${
                          pathname === link.to || pathname === '/courses'
                            ? 'text-primary border-b-2 border-primary pb-1'
                            : 'text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        {link.label}
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                      </button>
                      {dropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-56 bg-surface-container/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                          {dropdownItems.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => { navigate(item.to); setDropdownOpen(false) }}
                              className={`w-full text-right px-5 py-3 font-body-md text-body-md transition-colors flex items-center justify-between ${
                                pathname === item.to
                                  ? 'text-primary bg-primary/10'
                                  : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
                              }`}
                            >
                              {item.label}
                              <span className={`w-2 h-2 rounded-full ${
                                pathname === item.to ? 'bg-primary' : 'bg-transparent'
                              }`} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                const isActive = pathname === link.to
                return (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.to)}
                    className={`font-body-md text-body-md transition-colors ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-1 justify-end items-center gap-4">
            <button onClick={() => setSearchOpen(true)} className="text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 p-2 rounded-full">
              <span className="material-symbols-outlined">search</span>
            </button>
            <div className="hidden md:flex items-center gap-3 mr-4 md:mr-6 pr-4 md:pr-6 border-l border-white/10">
              <button
                onClick={() => navigate('/login')}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors px-3 py-2"
              >
                تسجيل الدخول
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="font-body-md text-body-md text-on-primary bg-primary hover:brightness-110 transition-all px-4 py-2 rounded-xl"
              >
                إنشاء حساب
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute top-20 right-4 w-72 md:hidden z-50 bg-surface-container/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="py-3">
                {[...navLinks, ...dropdownItems].map((link, i) => {
                  const isActive = pathname === link.to
                  return (
                    <div key={link.label}>
                      {i > 0 && <div className="mx-5 h-px bg-white/5" />}
                      <button
                        onClick={() => handleNav(link.to)}
                        className={`w-full text-right px-6 py-4 font-body-md text-body-md transition-all duration-200 flex items-center justify-between ${
                          isActive
                            ? 'text-primary bg-primary/10'
                            : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          isActive ? 'bg-primary' : 'bg-transparent'
                        }`} />
                        {link.label}
                      </button>
                    </div>
                  )
                })}
              </div>
              <div className="border-t border-white/5 px-6 py-4 flex items-center gap-3">
                <button
                  onClick={() => handleNav('/login')}
                  className="flex-1 py-3 rounded-xl border border-white/10 font-body-md text-body-md text-on-surface-variant hover:bg-white/5 transition-colors text-center"
                >
                  تسجيل الدخول
                </button>
                <button
                  onClick={() => handleNav('/signup')}
                  className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-body-md text-body-md hover:brightness-110 transition-all text-center"
                >
                  إنشاء حساب
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={navigate} />
    </>
  )
}
