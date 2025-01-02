import MoreIcon from '../assets/media/icons/MoreV.svg'
import ArrowIcon from '../assets/media/icons/Arrow.svg'

const StatusCard = (Props: any) => {

    return (
        <div className={`relative overflow-hidden ${Props.CardColor} h-44 w-72 px-3 font-Jost text-primary rounded-3xl flex justify-between gap-7`}>
            <img className='absolute right-0 h-44 mask-fade' src={Props.CardPattern} alt="Pattern" />
            <div className="flex flex-col justify-between py-4 px-2">
                <div className="border border-primary/50 h-10 w-10 flex justify-center items-center rounded-xl">
                    <img src={Props.MainIcon} className='' />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-4xl">{Props.Count}</span>
                    <span className="text-lg">{Props.Title}</span>
                </div>
            </div>
            <div className='py-4 flex flex-col justify-between'>
                <img src={MoreIcon} />
                <img className='size-7 rotate-45' src={ArrowIcon} />
            </div>
        </div>
    )
}

export default StatusCard
