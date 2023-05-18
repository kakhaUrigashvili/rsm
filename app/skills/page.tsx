'use client';
import { useState } from 'react';
import { sections } from '../data'

const { skills } = sections



export default function Skills() {
    return (
        <section className="px-20 my-10 print:px-5 print:my-2" id="skills">
        <h4 className="mb-8 text-3xl print:mb-2 print:text-xl font-bold text-center md:text-left">Technical Skills</h4>
        <div className="flex flex-row flex-wrap justify-between">
            {skills.items.map(item => {
                return <div key={item.name} className="basis-1/6 text-center print:text-sm
                p-2 m-2 print:p-1 border-solid border-2 print:border-0 border-gray-900 rounded-md">{item.name}</div>
            })}
        </div>
    </section>

        )
}
