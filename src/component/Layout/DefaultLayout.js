import React from "react"
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import Navbar from '../Layout/Navbar/Navbar'
import style from './DefaultLayout.module.css'
const DefaultLayout = ({children})=>(
       <div className={style.main}>
          <Navbar />
          <main>
            <Header />
            {children}
            <Footer />
          </main>
       </div>
   )

export default DefaultLayout;