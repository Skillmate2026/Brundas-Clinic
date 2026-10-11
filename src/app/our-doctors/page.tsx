import Doctor from '@/component/Doctor'
import MapWraper from '@/component/MapWraper'
import PageBanner from '@/component/PageBanner'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const OurDoctors = () => {
  return (
    <div>
        <Header/>
        <PageBanner filteredData={{ title: "Our Doctors" }} title="Our Doctors" bnrimage={''}/>
         <Doctor />
          <MapWraper />
         <Footer/>
    </div>
  )
}

export default OurDoctors