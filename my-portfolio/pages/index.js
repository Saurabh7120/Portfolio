
import AboutMe from '../components/about-me'
import Layout from '../components/core/Layout'
import Top from '../components/top'

export default function Home() {

  // useEffect(() => {
  //   const callApi = async() => {
  //     const o = await fetch('/api/hello');
  //     const data = await o.json();
  //     console.log(data)
  //   }

  //   callApi()
  // },[])

  return (
    <>
        <video autoPlay muted loop id="bgVideo">
            <source src="/bg-gradient.mp4" type="video/mp4"/>
        </video>
        <Layout>
          <Top/>
          <AboutMe/>
        </Layout>
    </>
  )
}
