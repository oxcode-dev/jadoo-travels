import { Layout } from "./layout"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Destinations } from "./components/Destinations"
import { Tips } from "./components/Tips"
import { Testimonials } from "./components/Testimonials"
import { Partners } from "./components/Partners"
import { Subscribe } from "./components/Subscribe"

function App() {

  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Destinations />
        <Tips />
        <Testimonials />
        <Partners />
        <Subscribe />
      </Layout>
    </>
  )
}

export default App