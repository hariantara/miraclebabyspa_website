import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout(props: any) {
    return (
        <>
            <NavBar />
                {props?.children}
            <Footer />
        </>
    )
}
