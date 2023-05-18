import { sections } from '../data'

export default function Education() {
    return (<section className="px-20 pt-5 mt-10 print:px-5 print:pt-0 print:my-2" id="education">
    <h4 className="mb-8 text-3xl print:mb-2 print:text-xl font-bold text-center md:text-left">Education</h4>
    {sections.education.items.map(item => {
        return <div key={item.school} className="grid grid-cols-1 md:grid-cols-6 my-10 print:my-2">
        <div className="flex flex-col col-span-6 mb-4 md:mb-0 print:mb-2">
            <h5 className="text-xl print:text-lg font-bold">{item.degree}</h5>
            <h6 className="text-lg print:text-sm font-bold">{item.school} </h6>
            <p>{item.dates}</p>
        </div>
    </div>
    })}
</section>)
}
