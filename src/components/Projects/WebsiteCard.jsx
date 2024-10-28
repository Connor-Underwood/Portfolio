import { LinkIcon } from "@heroicons/react/solid";

const WebsiteCard = ({project}) => {
    return (
        <div className='group relative flex flex-col items-start hover:cursor-pointer'>
            <div className="
                absolute 
                -inset-y-6 
                -inset-x-4 
                z-0 
                scale-95 
                opacity-0 
                transition 
                group-hover:scale-100 
                group-hover:opacity-100
                bg-gray-100  
                dark:bg-gray-700/50 
                sm:-inset-x-6 
                rounded-2xl"
            >

            </div>

            <div className='z-10 relative flex flex-col gap-4'>

                <div className={`rounded-full w-10 h-10 p-[2px] grid place-items-center shadow-md ${project.bg}`}>
                    <div className='rounded-full bg-white w-9 h-9 grid place-items-center'>
                        <img 
                            src={project.image}
                            className='w-6 h-6'
                        />
                    </div>
                </div>

                <p className='font-semibold'>
                    {project.title}
                </p>

                <p className='text-gray-600 dark:text-gray-400 select-none text-sm'>
                    {project.description}
                </p>
                
                <a href={project.href} target="_blank" className={`flex gap-2 items-center w-fit transition duration-150 ease-in ${project.color}`}>
                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <LinkIcon className='w-5 h-5' />
                    <p className='font-semibold line-clamp-1 text-sm'>
                        {project.linkPreview}
                    </p>
                </a>

            </div>
        </div>
    )
}

export default WebsiteCard;