import DotIcon from '../assets/media/icons/More.svg'

type SuggestionProps = {
    Title: string,
    Msg: string,
    ctaColor: string,
    Priority: string
}

const SuggestionInfoCard = (props: SuggestionProps) => {
    return (
        <div className="flex flex-col flex-auto justify-between border border-primary/40 p-5 rounded-2xl overflow-hidden">
            <div className='flex justify-between items-center'>
                <span className='text-base font-medium'>{props.Title}</span>
                <img src={DotIcon} alt="" />
            </div>
            <div className='pt-3 w-64'>
                <span className='text-sm font-light block'>
                    {props.Msg}
                </span>
            </div>
            <div className='flex justify-between items-center pt-3'>
                <span className='text-xs'>Mar 25, 2025</span>
                <div className={`px-2 rounded-md text-black ${props.ctaColor}`}>
                    <span className="text-xs font-semibold">{props.Priority}</span>
                </div>
            </div>
        </div>
    )
}

export default SuggestionInfoCard
