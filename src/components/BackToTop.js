import React from 'react'
import Image from 'next/image'
import icon from "../../public/btop.ico"


const isBrowser = () => typeof window !== 'undefined'; 

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const BackToTop = () => {
  return (
<button  className="fixed bottom-0 right-0 p-10 lg:p-0 lg:bottom-1 lg:right-1" onClick={scrollToTop}>
            <Image src={icon} alt="back to top" width={32}></Image>
        </button>
  )
}

export default BackToTop