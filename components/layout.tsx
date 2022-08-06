import React from 'react';
import Header from './header';
import styles from "../styles/Home.module.css";
import Footer from './footer';

interface Props {
    title: string
    children: React.ReactNode
  }

const Layout = ({title, children}) => {

    return(
        <div>
           
            <Header title={title}/>
            {children}

            <Footer/>
        </div>
    )

}

export default Layout;