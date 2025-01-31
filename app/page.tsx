import { siteConfig } from "../config/siteConfig"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import DevOpsAIAgent from "./components/DevOpsAIAgent"
import MarketingAIAgent from "./components/MarketingAIAgent"
import CTA from "./components/CTA"
import About from "./components/About"
import Contact from "./components/Contact"
// import InteractiveLogo from "./components/InteractiveBackground"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header companyName={siteConfig.companyName} navigation={siteConfig.navigation} />
      <main className="flex-grow">
        <Hero {...siteConfig.sections.hero} />
        <DevOpsAIAgent {...siteConfig.sections.devOpsAIAgent} />
        <MarketingAIAgent {...siteConfig.sections.marketingAIAgent} />
        <CTA {...siteConfig.sections.cta} />
        <About {...siteConfig.sections.about} />
        <Contact {...siteConfig.sections.contact} />
      </main>
      <Footer companyName={siteConfig.companyName} quickLinks={siteConfig.footer.quickLinks}/>
    </div>
  )
}

