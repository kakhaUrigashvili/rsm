import Image from 'next/image'
import Navbar from './navbar/page'
import Skills from './skills/page'
import Experience from './experience/page'
import Education from './education/page'
import Certifications from './certifications/page'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen pb-12 print:p-0">
        <div className="max-w-7xl mx-auto">
          <Experience></Experience>
          <Skills></Skills>
          <Education></Education>
          <Certifications></Certifications>
        </div>
      </main>
    </>
  )
}
