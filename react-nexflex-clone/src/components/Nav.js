import React, { useState, useEffect } from 'react';
import "./Nav.css"
//32775d392a2198ab24737e055f1c1f72
export default function Nav() {

    const [show, setShow] = useState(false);

    // function handleShow(show){
    //     const nav = document.getElementsByClassName('nav');
    //     if(show){
    //         nav.style.opacity=0;
    //     }else{
    //         nav.style.opacity=1;
    //     }
        
    // }


    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            console.log('window.scrollY',window.scrollY);
            
            if(window.scrollY > 50){
                setShow(true)
            }else{
                setShow(false)
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {})
        };
    }, []);

    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img 
            alt="nexfilx logo"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/69/20220504140801%21Netflix_logo.svg/120px-Netflix_logo.svg.png"
            className='nav__logo'
            onClick={()=>window.location.reload()}
            ></img>
            <img
            alt="user logged"
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
            className='nav__avatar'>
            </img>
        </nav>

    )
}
