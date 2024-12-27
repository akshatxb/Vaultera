type LogoSectionProps = {
    [key: string]: any,
}

const LogoSection = ({ ...Props }: LogoSectionProps) => {


    return (
        <img {...Props} className='w-20' />
    )
}

export default LogoSection
