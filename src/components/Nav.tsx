import { FaBook } from 'react-icons/fa'
import { GiConsoleController, GiToken } from 'react-icons/gi'
import { RiRoadMapFill } from 'react-icons/ri'


const Nav = () => {
    const navList = [
        {
            label: 'About',
            slug: '/about',
            icon: <FaBook />
        },
        {
            label: 'Gameplay',
            slug: '/gameplay',
            icon: <GiConsoleController className="text-xl" />
        },
        {
            label: 'Token',
            slug: '/token',
            icon: <GiToken className="text-xl" />
        },
        {
            label: 'Roadmap',
            slug: '/roadmap',
            icon: <RiRoadMapFill className="text-xl" />
        },
    ]

    return (
        <nav className="w-full h-auto absolute top-0 left-0 px-5 z-20">
            <div className="max-w-[1500px] w-full h-auto py-7 flex items-center gap-x-10 mx-auto">
                <img src="/logo.webp" alt="Logo" className="w-16 cursor-pointer" />
                <ul className="flex items-center gap-x-10 sm:gap-x-16 text-sm font-medium">
                    {navList.map((items, i) => {
                        return (
                            <li className="uppercase group relative" key={i}>
                                <a href={`#${items.slug}`} className="">
                                    <p className="md:block hidden">
                                        {items.label}
                                    </p>

                                    <div className="md:hidden block">
                                        {items.icon}
                                    </div>
                                </a>

                                <div className="absolute left-0 right-0 mx-auto -bottom-2 w-0 group-hover:w-6 ease-in-out duration-300 transition-all bg-lavender h-[3px]">

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;