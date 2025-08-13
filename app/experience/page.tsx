'use client';
import { sections } from '../data'

export default function Experience() {
    return (
        <section className="mx-4 my-8 print:mx-5 print:pt-0 print:my-2" id="experience">
            <div className="modern-card p-8 print:p-4">
                <h2 className="section-header text-center md:text-left print:text-xl print:text-gray-800 print:mb-2">Experience</h2>
                <div className="space-y-8 print:space-y-4">
                    {sections.experience.items.map((item, index) => {
                        return (
                            <div className="pb-8 last:pb-0 print:pb-4" key={item.title + item.company}>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-2">
                                    <div className="lg:col-span-1">
                                        <h3 className="text-xl font-bold text-blue-600 mb-1 print:text-lg print:text-gray-800">{item.title}</h3>
                                        <h4 className="text-lg font-semibold text-gray-700 mb-2 print:text-sm print:text-gray-700">{item.company}</h4>
                                        <p className="text-gray-600 font-medium print:text-sm">{item.location}</p>
                                        <p className="text-gray-500 text-sm print:text-xs">{item.dates}</p>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <ul className="space-y-3 text-gray-600 print:space-y-1 print:text-sm list-disc list-inside">
                                            {item.description.map((line, idx) => (
                                                <li key={idx} className="leading-relaxed print:leading-normal">{line}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
