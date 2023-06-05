import Image from 'next/image'
import Navbar from './navbar/page'
import Skills from './skills/page'
import Experience from './experience/page'
import Education from './education/page'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col justify-between p-5 pt-0 print:p-0">
        <Skills></Skills>
        <hr className="border-gray-400 mx-5 print:hidden"></hr>
        <Experience></Experience>
        <hr className="border-gray-400 mx-5 print:hidden"></hr>
        <Education></Education>
      </main>
    </>
  )
}
