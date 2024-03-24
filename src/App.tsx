import Overview from "./components/overview/Overview"
import SocialMedia from "./components/socialmedia/SocialMedia"
import { ThemeProvider } from "./components/theme-provider"


function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 

    <section className="max-w-[1440px]
 mx-auto mt-20 
    ">
     <SocialMedia/>
     <Overview/>
    </section>
       </ThemeProvider>
  )
}

export default App
