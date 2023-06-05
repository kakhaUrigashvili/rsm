'use client';
import { sections } from '../data'

export default function Experience() {
    return (<section className="px-5 mt-5 lg:px-20 print:px-5 print:pt-0 print:my-2" id="experience">
        <h4 className="text-xl print:mb-2 print:text-xl font-bold text-center md:text-left">Experience</h4>
        {sections.experience.items.map(item => {
            return <div className="grid grid-cols-1 md:grid-cols-8 my-2 lg:my-5 print:my-2" key={item.title + item.company}>
                <div className="flex flex-col col-span-2 mb-2 md:mb-0 print:mb-2">
                    <h5 className="text-xl print:text-lg font-bold">{item.title}</h5>
                    <h6 className="text-lg print:text-sm font-bold">{item.company} | {item.location}</h6>
                    <p>{item.dates}</p>
                </div>
                <div className="flex flex-col col-span-6 mx-5">
                    <ul className='list-disc print:text-sm'>
                        {item.description.map(line => <li key={line}>{line}</li>)}
                    </ul>
                </div>
            </div>
        })}
    </section>)
}
