import CodingArt from '../assets/media/illustrations/coding-a-website.svg'

const WorkInProgress = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 font-Jost text-secondary'>
            <span className='text-5xl font-semibold'>Coming Soon...</span>
            <img className='h-80 mask-blur' src={CodingArt} alt="" />
            <span className='text-lg text-center w-[43rem]'>We’re working hard to bring this feature to life. Turn on notifications to stay tuned, or join our beta program to explore it before anyone else. We can’t wait to share it with you!</span>
        </div>

    )
}

export default WorkInProgress
