import { sections } from '../data'

export default function Education() {
    return (
        <section className="mx-4 my-8 print:mx-5 print:pt-0 print:my-2" id="education">
            <div className="modern-card p-8 print:p-4">
                <h2 className="section-header text-center md:text-left print:text-xl print:text-gray-800 print:mb-2">Education</h2>
                <div className="space-y-6 print:space-y-3">
                    {sections.education.items.map(item => {
                        return (
                            <div key={item.school} className="pb-6 print:pb-3">
                                    <h3 className="text-xl font-bold text-blue-600 mb-2 print:text-lg print:text-gray-800">{item.degree}</h3>
                                    <h4 className="text-lg font-semibold text-gray-700 mb-1 print:text-sm print:text-gray-700">{item.school}</h4>
                                    <p className="text-gray-600 font-medium print:text-sm">{item.dates}</p>
                                    {item.gpa && (
                                        <p className="text-sm text-gray-500 mt-1 print:text-xs">GPA: {item.gpa}</p>
                                    )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
