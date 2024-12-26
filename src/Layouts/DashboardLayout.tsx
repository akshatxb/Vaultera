import MainMenu from '../components/MainMenu'
import NavMenu from '../routes/DashBoard/NavMenu'
import { DashLayout } from '../types/Layout.types'

const DashboardLayout = ({ isCollapsed, ToggleCollapse, children }: DashLayout) => {
    return (
        <div className='flex h-dvh'>
            <MainMenu isCollapsed={isCollapsed} ToggleCollapse={ToggleCollapse} />
            <div className='flex flex-auto flex-col'>
                <NavMenu />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
