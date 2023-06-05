'use client';
import { useState } from 'react';
import { contactInfo, sections } from '../data'

const navigation = Object.entries(sections).map(item => {
    const [_, value] = item
    return { name: value.name, href: value.href, action: value.action }
})


export default function Navbar() {

    const [responsiveMenuHidden, setResponsiveMenuHidden] = useState(true);

    function handleClick() {
        setResponsiveMenuHidden(!responsiveMenuHidden)
    }

    function print() {
        if (window.print) {
            window.print()
        }
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 print:border-b-2 print:border-gray-500">
                <div className="px-[2.5rem] lg:px-[6.2rem] py-4 flex flex-wrap items-center justify-between">
                    <a href="#" className="flex">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{contactInfo.name}</span>
                    </a>
                    <button onClick={handleClick} type="button" className="print:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open Menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={(responsiveMenuHidden ? "hidden" : "") + " w-full md:block md:w-auto print:flex print:w-1/2 print:justify-end"} id="navbar-default">
                        <ul className="print:hidden font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navigation.map(item => {
                                return <li key={item.name}>

                                    <a href={item.href} onClick={item.action === 'PRINT' ? print : undefined} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{item.name}</a>
                                </li>
                            })}
                            {contactInfo.links.map(link => {
                                return <li key={link.name} className='mx-[0.6rem]'>
                                    <a href={link.url} target="_blank" aria-label={link.name}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 50 50">
                                            <path d={link.svg}></path>
                                        </svg>
                                    </a>
                                </li>
                            })}
                        </ul>
                        <ul className="hidden print:flex text-xs">
                            {contactInfo.printLinks.map(link => {
                                return <li key={link.name} className='ml-2'>
                                    <a href={link.url} target="_blank" aria-label={link.name}>
                                        {link.display}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>)
}
