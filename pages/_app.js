import { RecoilRoot } from 'recoil'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { ThemeProvider } from '../context/ThemeContext'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
          <div id="#side" className="col-span-12 p-4 text-center bg-white dark:bg-black lg:col-span-3 rounded-xl">
            <Sidebar />
          </div>
          <div id="#main" className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 dark:bg-black rounded-xl">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
        </div>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
