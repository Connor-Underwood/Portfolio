import {CodeIcon, LinkIcon, MailIcon, PhoneIcon} from "@heroicons/react/solid"
export default function ResumeHeader() {
    const contactInfo = [
        {
            icon: <MailIcon className='w-4 h-4 text-indigo-500' />,
            text: "cfarber@purdue.edu"
        },
        {
            icon: <LinkIcon className="w-4 h-4 text-indigo-500" />,
            text: "chrisfarbs.com"
        },
        {
            icon: <PhoneIcon className="w-4 h-4 text-indigo-500" />,
            text: "915-490-6814"
        },
        {
            icon: <CodeIcon className="w-4 h-4 text-indigo-500" />,
            text: "github.com/farbs03"
        }
    ]
    return (
        <div className='flex justify-between items-center'>
            <p className="font-bold text-[16px]">Christopher Farber</p>
            {contactInfo.map((contact) => (
                <div className="flex items-center gap-1">
                    {contact.icon}
                    <p className='text-[12px]'>{contact.text}</p>
                </div>
            ))}
        </div>
    )
}