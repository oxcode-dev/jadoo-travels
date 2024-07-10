import { Layout } from "./layout"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Destinations } from "./components/Destinations"

function App() {

  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Destinations />
      </Layout>
    </>
  )
}

export default App
