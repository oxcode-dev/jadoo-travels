import { Layout } from "./layout"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Destinations } from "./components/Destinations"
import { Tips } from "./components/Tips"

function App() {

  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Destinations />
        <Tips />
      </Layout>
    </>
  )
}

export default App
