type LogoSectionProps = {
    [key: string]: any,
    Width: string,
    Height: string
}

const LogoSection = ({ Width, Height, ...Props }: LogoSectionProps) => {


    return (
        <img {...Props} className={`w-${Width} h-${Height}`} />
    )
}

export default LogoSection
