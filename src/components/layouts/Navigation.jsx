import React, { useEffect, useState } from "react";

export default function Navigation() {

    const [isScrolled, setisScrolled] = useState(false)

    const handleScroll = ()=> {
        if (window.scrollY > window.innerHeight) {
            setisScrolled(true)
        }else {
            setisScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return ()=> {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header>
            <nav className={`text-white`}>
                <div className={`h-16 w-full px-10 flex justify-between place-items-center fixed transition-all z-50 top-0 ${isScrolled ? 'backdrop-blur-lg bg-black bg-opacity-25' : 'bg-transparent'} `}>
                    <h1 className="w-1/3 text-2xl font-bold">Explore Indo</h1>
                    <ul className="w-1/3 flex justify-center">
                        <li className="mx-1">Information</li>
                        <li className="mx-1">About Us</li>
                        <li className="mx-1">Culture</li>
                    </ul>
                    <div className="w-1/3 flex justify-end">
                        search
                    </div>
                </div>
            </nav>
        </header>
    )
}
