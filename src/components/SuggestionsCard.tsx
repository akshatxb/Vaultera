import SuggestionInfoCard from './SuggestionInfoCard'


const SuggestionsCard = () => {
    return (
        <div className="flex flex-col flex-auto bg-secondary rounded-3xl font-Jost p-4 border border-secondary/30 text-primary max-h-[39rem] overflow-hidden">
            <div className='flex items-center px-4 pt-3 pb-6'>
                <span className='text-xl font-medium'>Suggestions</span>
            </div>
            <div className='flex flex-col gap-2 h-full'>
                <SuggestionInfoCard Title="Breached Accounts" Priority="High" ctaColor="bg-ctaColor-tertiary" Msg="You have 4 Breached Accounts. Change your password to protect your accounts."/>
                <SuggestionInfoCard Title="Weak Passwords" Priority="Low" ctaColor="bg-ctaColor-primary" Msg="System has detected 2 weak passwords. "/>
                <SuggestionInfoCard Title="Suspicious Activity" Priority="Medium" ctaColor="bg-ctaColor-secondary" Msg="We have detected suspicious activity in 2 accounts. Manage it now !"/>
            </div>
        </div>
    )
}

export default SuggestionsCard
