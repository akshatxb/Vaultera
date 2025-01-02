import StatusCard from "../../components/StatusCard"
import LockIcon from '../../assets/media/icons/Lock.svg'
import CautionIcon from '../../assets/media/icons/Caution.svg'
import SheildIcon from '../../assets/media/icons/Shield.svg'
import CardPattern1 from '../../assets/media/pattern1.svg'
import CardPattern2 from '../../assets/media/pattern2.svg'
import CardPattern3 from '../../assets/media/pattern3.svg'
import SuggestionsCard from "../../components/SuggestionsCard"


const Home = () => {

    // const [PasswordCount, SetPasswordCount] = useState(390);

    return (

        <div className='h-full p-2 flex gap-2'>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <StatusCard CardColor='bg-accentColor-secondary' Count='134' Title='Saved Passwords' CardPattern={CardPattern1} MainIcon={LockIcon} />
                    <StatusCard CardColor='bg-accentColor-primary' Count='9' Title='Breached Credentials' CardPattern={CardPattern2} MainIcon={CautionIcon} IconSize='5' />
                    <StatusCard CardColor='bg-accentColor-tertiary' Count='95%' Title='Security Score' CardPattern={CardPattern3} MainIcon={SheildIcon} />
                </div>
                <div className="flex-auto bg-accentColor-primary rounded-3xl">

                </div>
            </div>
            <SuggestionsCard />
        </div>
    )
}

export default Home
