import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Films from './pages/Films'
import Podcasts from './pages/Podcasts'
import Library from './pages/Library'
import Academic from './pages/Academic'
import Heritage from './pages/Heritage'
import Login from './pages/Login'
import Signup from './pages/Signup'

function useRouter() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)
    setPathname(to)
  }

  return { pathname, navigate }
}

function Route({ path, component, pathname }: { path: string; component: React.ReactNode; pathname: string }) {
  return pathname === path ? <>{component}</> : null
}

export default function App() {
  const { pathname, navigate } = useRouter()

  return (
    <>
      <Navbar navigate={navigate} pathname={pathname} />
      <main className="flex-grow pt-20">
        <Route path="/" component={<Home navigate={navigate} />} pathname={pathname} />
        <Route path="/films" component={<Films />} pathname={pathname} />
        <Route path="/podcasts" component={<Podcasts />} pathname={pathname} />
        <Route path="/library" component={<Library />} pathname={pathname} />
        <Route path="/academic" component={<Academic />} pathname={pathname} />
        <Route path="/heritage" component={<Heritage />} pathname={pathname} />
        <Route path="/login" component={<Login navigate={navigate} />} pathname={pathname} />
        <Route path="/signup" component={<Signup navigate={navigate} />} pathname={pathname} />
      </main>
      <Footer navigate={navigate} />
    </>
  )
}
