import { LinkIcon } from "@heroicons/react/solid";

const MLCard = ({project}) => {
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
                
                <a href={project.href} target="_blank" className='w-fit transition duration-150 ease-in group-hover:text-primary'>
                    <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <p className='font-semibold line-clamp-1'>
                        {project.title}
                    </p>
                
                </a>

                <p className='text-gray-600 dark:text-gray-400 select-none text-sm'>
                    {project.description}
                </p>

                <div className='flex gap-2 items-center z-10 relative select-none'>
                    {project.tags.map((tag) => (
                        <div className='text-xs px-2 py-1 font-semibold bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-600 rounded-lg'>
                            {tag}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MLCard;