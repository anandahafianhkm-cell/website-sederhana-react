import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>RumahIyan.</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#Home">Home</a></li>
                     <li><a href="#Tutors">Tutors</a></li>
                      <li><a href="#Partners">Partners</a></li>
                       <li><a href="#Contact">Contact</a></li>
                        <li><a href="">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar