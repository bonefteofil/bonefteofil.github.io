import ContactVertical from './Contact-vertical';
import Contact from './Contact';
import AboutMe from './About-me';
import Skills from './Skills';
import Projects from './Projects';
import Awards from './Awards';

export default function Layout() {

    return (
        <div className='flex lg:h-screen'>
            <div className='w-100 pl-[5vw] lg:py-[8vh] hidden lg:inline'>
                <ContactVertical />
            </div >

            <div className='w-fit px-[5vw] py-[4vh] lg:py-[8vh] flex flex-col lg:overflow-y-auto gap-[4vh] justify-between'>
                <div className='lg:hidden'>
                    <Contact />
                </div>
                <AboutMe />
                <Projects />
                <Awards />
                <Skills />
            </div>
        </div >
    )
}