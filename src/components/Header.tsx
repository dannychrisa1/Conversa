import { useLocation } from "react-router-dom"
import {disablePageScroll, enablePageScroll } from "scroll-lock"
import { conversa } from "../assets"
import { navigation } from "../constants"
import { Button } from "./Button"
import MenuSvg from "../assets/svg/MenuSvg"
import { HamburgerMenu } from "./design/Header"
import { useState } from "react"



export const Header = () => {
    const pathname = useLocation()
    const [openNavigation, setOpenNavigation ] = useState<boolean>(false)

    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false)
            enablePageScroll()
        }else{
            setOpenNavigation(true)
            disablePageScroll()
        }
    }
    
    const handleClick = () => {
        if(!openNavigation) return
        enablePageScroll()
        setOpenNavigation(false)
    }
    return (
        <div className={`fixed top-0 left-0 w-full z-50
        backdrop-blur-sm border-b border-n-6
        lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className="flex items-center px-5 lg:px-7.5
            xl:px-10 py-4 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={conversa} width={190} height={40} alt="brainwave" />
                </a>
                <nav className="fixed top-[7rem] left-0 right-0
                bottom-0 lg:static lg:mx-auto lg:bg-transparent
                ">
                    <div className={`${openNavigation ? 'flex' : 'hidden'} bg-n-8 relative z-2 flex-col items-center
                    justify-center m-auto lg:flex lg:flex-row`}>
                        {navigation.map((item) => (
                            <a key={item.id} onClick={handleClick} className={`block relative font-code
                            text-2xl uppercase text-n-1 transition-colors
                            hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''}
                            px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                            ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                            lg:leading-5 lg:hover-text-n-1 xl:px-12`} href={item.url}>
                                {item.title}
                            </a>
                        ))}
                       
                    </div>
                    <HamburgerMenu />

                </nav>
                <a href="#signup" className="button hidden mr-8 text-n-1/50
                transition-colors hover:text-n-1 lg:block">
                    New Account
                </a>
                <Button className="hidden lg:flex" href="#login">Sign in</Button>
                <Button onClick={toggleNavigation} className="button ml-auto lg:hidden" px="px-3">
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>

        </div>
    )
}