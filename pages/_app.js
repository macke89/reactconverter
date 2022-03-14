import '../styles/globals.css'
import '../styles/animation.css'

function MyApp({Component, pageProps}) {
    return <div data-theme="corporate"><Component {...pageProps} /></div>
}

export default MyApp
