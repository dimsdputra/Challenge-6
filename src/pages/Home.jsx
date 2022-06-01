import React, { useEffect } from 'react'
import CarRental from './Components/UserDashboard/CarRental';
import Faq from './Components/UserDashboard/Faq';
import Services from './Components/UserDashboard/Services';
import Superiority from './Components/UserDashboard/Superiority';
import FooterHome from './Layouts/FooterHome';
import NavbarHome from './Layouts/NavbarHome';


function Home() {
  useEffect (() => {document.title = 'Binar Rental Cars | Home'})

  return (
    <React.Fragment>
      <NavbarHome/>
      <Superiority/>
      <Services/>
      <CarRental/>
      <Faq/>
      <FooterHome/>
    </React.Fragment>
  )
}

export default Home