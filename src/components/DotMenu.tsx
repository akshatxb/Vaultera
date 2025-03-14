import SettingsIcon from '../assets/media/icons/Settings.svg'
import SupportIcon from '../assets/media/icons/Chat.svg'
import LogoutIcon from '../assets/media/icons/Logout.svg'
import ProfileIcon from '../assets/media/icons/User.svg'
import useAuth from '../hooks/useAuth'
import { useEffect, useRef } from 'react'

type DotMenuState = {
    isMenuOpen: boolean,
    ToggleMenu: (isMenuOpen: boolean) => void;
}

const DotMenu = ({ isMenuOpen, ToggleMenu }: DotMenuState) => {

    const UserControls = useAuth();
    const MenuRef = useRef<HTMLDivElement | null>(null);

    const HandleLogoutClick = () => {
        UserControls?.HandleLogout()
    }

    const HandleOutsideClick = (event: MouseEvent) => {
        if (!MenuRef.current?.contains(event.target as Node)) {
            ToggleMenu(false);
        }

    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', HandleOutsideClick);
        } else {
            document.removeEventListener('mousedown', HandleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', HandleOutsideClick);
        };
    }, [isMenuOpen]);


    return (
        <div ref={MenuRef} className={`${isMenuOpen ? '' : 'hidden'} flex flex-col justify-between px-7 py-7 absolute h-64 w-56 bg-secondary right-10 top-12 rounded-2xl font-Jost text-primary font-light`}>
            <div className='flex items-center gap-4'>
                <div className="flex justify-center items-center border border-primary h-10 w-10 rounded-xl">
                    <img className="h-5 mix-blend-difference" src={ProfileIcon} alt="" />
                </div>
                <div>
                    <span>View Profile</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className="flex justify-center items-center border border-primary h-10 w-10 rounded-xl">
                    <img className="h-5 mix-blend-difference" src={SettingsIcon} alt="" />
                </div>
                <div>
                    <span>Settings</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className="flex justify-center items-center border border-primary h-10 w-10 rounded-xl">
                    <img className="h-5" src={SupportIcon} alt="" />
                </div>
                <div>
                    <span>Support</span>
                </div>
            </div>
            <div onClick={HandleLogoutClick} className='flex items-center gap-4'>
                <div className="flex justify-center items-center border border-primary h-10 w-10 rounded-xl">
                    <img className="h-5" src={LogoutIcon} alt="" />
                </div>
                <div>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default DotMenu
