import React, { useState } from 'react'
const Footer = () => {

    const links = [
        {Name: "Home", Link: "/"},
        {Name: "Email", Icon: 'far fa-envelope fa-lg', Link: ""},
        {Name: "LinkedIn", Icon: 'fab fa-linkedin fa-lg', Link: "https://www.linkedin.com/in/connorunderwood2004"},
        {Name: "GitHub", Icon: "fab fa-github fa-lg", Link: "https://github.com/Connor-Underwood"},
    ]

    return (
        <div className='text-main-text p-4 relative bg-gray-900'>
            <div className='max-w-7xl w-full mx-auto'>
                <div className='flex flex-wrap gap-4 justify-center my-2'>
                    {links.map((link) => (
                        <a key={link.Link} href={link.Link} target="_blank" className='text-sm font-semibold hover:text-primary transition duration-200 ease-in'>{link.Name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer