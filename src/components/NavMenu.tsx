import ProfilePhoto from '../assets/media/profile.png'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchIcon from '../assets/media/icons/Search.svg'
import BellIcon from '../assets/media/icons/Notification.svg'
import DotsIcon from '../assets/media/icons/More.svg'
import DotMenu from './DotMenu';

const NavMenu = () => {

    const root = '/dashboard';
    const { pathname } = useLocation();
    const [Page, SetPage] = useState('Welcome!')
    const [isOpen, SetOpen] = useState(false);

    const HandleDotMenu = () => {
        SetOpen(!isOpen)
    }

    const UserId = 'Antony Nicole'

    useEffect(() => {
        switch (pathname) {
            case root + '/':
                SetPage('Dashboard')
                break;
            case root + '/passwords':
                SetPage('Passwords')
                break;
            case root + '/generator':
                SetPage('Generator')
                break;
            case root + '/sharing':
                SetPage('Sharing')
                break;
            case root + '/history':
                SetPage('History')
                break;
            default:
                break;
        }
    }, [pathname])

    return (
        <div className="flex justify-between items-center py-6 px-7 font-Jost relative">
            <div className="text-secondary text-3xl font-bold">
                {Page}
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="border border-secondary h-10 w-10 rounded-xl flex justify-center items-center">
                    <img src={SearchIcon} alt="Search" />
                </div>
                <div className="border border-secondary h-10 w-10 rounded-xl flex justify-center items-center">
                    <img src={BellIcon} alt="Notification" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="h-10 rounded-xl" src={ProfilePhoto} alt="Profile" />
                    <span className="text-sm font-medium">{UserId}</span>
                    <img className='cursor-pointer' onClick={HandleDotMenu} src={DotsIcon} alt="More" />
                </div>
            </div>
            <DotMenu isOpen={isOpen} />
        </div>
    )
}

export default NavMenu
