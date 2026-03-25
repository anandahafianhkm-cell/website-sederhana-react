import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../Data/HomeSection'
import { courseSection } from '../Data/CourseSection'
import '../styles/Home.css'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='wrapper'>
      <section className="home">
        <img src={homeSection.image}/>
        <div className='kolom'>
          <p className='deskripsi'>{homeSection.heading}</p>
          <h1 className='deskripsi2'>{homeSection.subheading}</h1>
          <p className='deskripsi3'>{homeSection.description}</p>
          <button className='button'>{homeSection.linktombol}</button>
        </div>
      </section>

      {/* <section className="course">
        <img src={courseSection.image}/>
      </section> */}
    </div>

    <Footer/>
    </>
  )
}

export default Home
