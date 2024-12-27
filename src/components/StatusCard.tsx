import MoreIcon from '../assets/media/icons/MoreV.svg'

const StatusCard = (Props: any) => {

    return (
        <div className={`relative overflow-hidden ${Props.CardColor} h-44 w-64 px-3 font-Jost text-primary rounded-3xl flex justify-between gap-7`}>
            <img className='absolute right-0 h-44 mask-fade' src={Props.CardPattern} alt="Pattern" />
            <div className="flex flex-col justify-between py-4 px-2">
                <div className="border h-10 w-10 flex justify-center items-center rounded-xl">
                    <img src={Props.MainIcon} className='' />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-4xl">{Props.Count}</span>
                    <span className="text-lg">{Props.Title}</span>
                </div>
            </div>
            <div className='py-4'>
                <img src={MoreIcon} />
            </div>
        </div>
    )
}

export default StatusCard
