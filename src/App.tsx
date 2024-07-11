import { Layout } from "./layout"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Destinations } from "./components/Destinations"
import { Tips } from "./components/Tips"
import { Testimonials } from "./components/Testimonials"
import { Parnters } from "./components/Partners"

function App() {

  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Destinations />
        <Tips />
        <Testimonials />
        <Parnters />
      </Layout>
    </>
  )
}

export default App
