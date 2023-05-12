import '@/styles/globals.css'
import Header from './Header'

export default function App({ Component, pageProps }) {
  return ( 
  <>
  <Header/>
  <Component {...pageProps} />  
  </>
  )



}
