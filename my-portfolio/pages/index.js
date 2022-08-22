import AboutMeLeft from '../components/about-me/about-me-left'
import AboutMeRight from '../components/about-me/about-me-right'
import Layout from '../components/core/Layout'

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
    <Layout
    title={"About Me"}
    left={<AboutMeLeft/>}
    right={<AboutMeRight/>}
/>
  )
}
