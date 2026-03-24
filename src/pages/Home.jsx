import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../Data/HomeSection'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='wrapper'>
      <section id="home">
        <img src={homeSection.image}/>
        <div className='kolom'>
          <p className='deskripsi'>{homeSection.heading}</p>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  )
}

export default Home
