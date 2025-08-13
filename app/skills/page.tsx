'use client';
import { useState } from 'react';
import { sections } from '../data'

const { skills } = sections



export default function Skills() {
    return (
        <section className="mx-4 my-8 print:mx-5 print:my-2" id="skills">
            <div className="modern-card p-8 print:p-4">
                <h2 className="section-header text-center md:text-left print:text-xl print:text-gray-800 print:mb-2">Technical Skills</h2>
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 print:gap-1">
                    {skills.items.map(item => {
                        return <div key={item.name} className="skill-tag print:text-sm print:bg-gray-100 print:text-gray-700 print:border print:border-gray-300 print:p-1">{item.name}</div>
                    })}
                </div>
            </div>
        </section>
    )
}
