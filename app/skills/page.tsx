'use client';
import { useState } from 'react';
import { sections } from '../data'

const { skills } = sections



export default function Skills() {
    return (
        <section className="px-5 my-5 lg:px-20 lg:py-7 print:px-5 print:my-2" id="skills">
            <h4 className="text-xl print:mb-2 print:text-xl font-bold text-center md:text-left">Technical Skills</h4>
            <div className="flex flex-row flex-wrap justify-between my-2 lg:my-5 print:my-2">
                {skills.items.map(item => {
                    return <div key={item.name} className="basis-1/6 text-center print:text-sm
                p-2 my-2 mr-2 print:p-1 border-solid border-2 print:border-0 border-gray-900 rounded-md">{item.name}</div>
                })}
            </div>
        </section>

    )
}
