import Image from 'next/image';
import { 
        GlobeAltIcon,
        MenuIcon,
        UserCircleIcon,
        UsersIcon,
        SearchIcon 
        } from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white 
                            shadow-md p-5 md:px-10">
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src='https://links.papareact.com/qd3'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm">
                <input className="flex-grow outline-none bg-transparent 
                                    pl-5 text-sm text-gray-600 placeholder-gray-400" 
                                    type="text" 
                                    placeholder="start your search"/>

                <SearchIcon className="hidden-md:inline-flex h-8 bg-red-400 
                                        text-white rounded-full p-2 
                                        cursor-pointer md:mx-2"/>
            </div>

            <div className="flex items-center space-x-5 justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div className="flex rounded-full space-x-2 border-2 items-center p-2">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
        </header>
    )
}

export default Header
