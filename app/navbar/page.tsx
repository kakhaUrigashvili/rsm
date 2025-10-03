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
            <h1 className="text-center only-print font-bold text-lg">{contactInfo.name} {contactInfo.printLinks.map(link => ` | ${link.display}`)}
            </h1>
            <div className="mt-3 mb-5 only-print">
                <h2 className="text-center">Authorized to work in the US for any employer (US Citizen)</h2>
            </div>
            <div className="max-w-7xl mx-auto no-print">
                <nav className="modern-card mx-4 mt-4 mb-8 print:mx-0 print:mt-0 print:mb-4 print:border-b-2 print:border-gray-500 print:rounded-none">
                <div className="px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between">
                    <a href="#" className="flex group">
                        <span className="self-center text-3xl font-bold whitespace-nowrap text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:scale-105">{contactInfo.name}</span>
                    </a>
                    <button onClick={handleClick} type="button" className="print:hidden inline-flex items-center p-3 ml-3 text-gray-600 rounded-xl md:hidden hover:bg-gray-100 focus:outline-none transition-all duration-200 dark:text-gray-300 dark:hover:bg-gray-700" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open Menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={(responsiveMenuHidden ? "hidden" : "") + " w-full md:block md:w-auto print:flex print:w-1/2 print:justify-end"} id="navbar-default">
                        <ul className="print:hidden font-medium flex flex-col p-4 md:p-0 mt-4 bg-gray-50 rounded-xl border border-gray-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            {navigation.map(item => {
                                return <li key={item.name}>
                                    <a href={item.href} onClick={item.action === 'PRINT' ? print : undefined} className="block py-3 px-4 text-gray-700 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-2 transition-all duration-200 font-medium dark:text-gray-200 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{item.name}</a>
                                </li>
                            })}
                            {contactInfo.links.map(link => {
                                return <li key={link.name} className='mx-2'>
                                    <a href={link.url} target="_blank" aria-label={link.name} className="block p-2 rounded-xl hover:bg-gray-100 hover:scale-110 transition-all duration-200 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" viewBox="0 0 50 50" fill="currentColor">
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
            </div>
        </>)
}
