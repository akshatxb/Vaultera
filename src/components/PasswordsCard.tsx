const PasswordsCard = (Props: any) => {

    return (
        <div className='bg-red-600'>
            <h1>Total Passwords</h1>
            <h2>{Props.Count}</h2>
        </div>
    )
}

export default PasswordsCard
