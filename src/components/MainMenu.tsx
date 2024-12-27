import React, { useEffect, useState } from "react";
import MetaLogo from '../assets/media/meta-logo.svg'
// import MetaLogoalt from '../assets/media/MetaLogo.svg'
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
import { MenuLayout } from "../types/Layout.types";
import LayoutIcon from '../assets/media/icons/Layout.svg'
import KeyIcon from '../assets/media/icons/Key.svg'
import BoltIcon from '../assets/media/icons/Lightning-alt.svg'
import ShareIcon from '../assets/media/icons/Share.svg'
import HistoryIcon from '../assets/media/icons/History.svg'
import LogoSection from "./LogoSection";

const MainMenu = ({ isCollapsed, ToggleCollapse }: MenuLayout) => {

    const { pathname } = useLocation();
    const [ActiveLink, SetActive] = useState(0);

    const root = '/dashboard'
    const NavTitles = ['Dashboard', 'Passwords', 'Generator', 'Sharing', 'History'];
    const NavLinks = ['/', '/passwords', '/generator', '/sharing', '/history']
    const NavIcons = [LayoutIcon, KeyIcon, BoltIcon, ShareIcon, HistoryIcon];

    const HandleCollapseClick = () => {
        ToggleCollapse()
    }

    useEffect(() => {
        switch (pathname) {
            case root + '/':
                SetActive(0);
                break;
            case root + '/passwords':
                SetActive(1);
                break;
            case root + '/generator':
                SetActive(2);
                break;
            case root + '/sharing':
                SetActive(3);
                break;
            case root + '/history':
                SetActive(4);
                break;

            default:
                break;
        }
    }, [pathname])

    return (
        <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-secondary h-full text-primary flex flex-col justify-between items-start`} >
            <div className="py-8 px-7">
                <LogoSection src={MetaLogo} />
                <button onClick={HandleCollapseClick}>CO</button>
            </div>
            <div className="flex flex-col justify-center mt-4 px-7 py-8 font-Jost font-light">
                {Array.from({ length: Math.max(NavIcons.length, NavTitles.length) }).map((_, index) => (
                    <React.Fragment key={index}>
                        {NavLinks[index] && (
                            <Link to={root + NavLinks[index]} className="flex items-center py-2 rounded-xl my-1">
                                {NavIcons[index] && (
                                    <div className={`${(ActiveLink === index) ? 'bg-primary' : ''} w-9 h-9 flex justify-center items-center rounded-xl border border-primary`}>
                                        <img className="h-4 mix-blend-difference" src={NavIcons[index]} />
                                    </div>
                                )}
                                {NavTitles[index] && (
                                    <div className="pl-4 text-sm">{NavTitles[index]}</div>
                                )}
                            </Link>)}
                    </React.Fragment>
                ))}
            </div>

            <div className={`${isCollapsed ? 'hidden' : ''} pro-section flex flex-col bg-tertiary mb-6 mx-6 py-4 px-5 rounded-2xl font-Jost`}>
                <span className="text-sm pb-9">Your trial plan ends in 12 days. Upgrade your plan to unlock more features.</span>
                <Button content='Upgrade to Pro' color='bg-primary' textColor='text-secondary' />
            </div>
        </div >
    )
}

export default MainMenu
