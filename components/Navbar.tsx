import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from "./ui/NavItems"


const NavBar = () => {
    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* TODO: Mobile nav */}

                            <div className='ml-4 flex lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo className='h10 w-10' />
                                </Link>
                            </div>
                                <div className='hidden z-50 lg:ml-8 lg:block lg:self-strech'>
                                    <NavItems />
                                 </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default NavBar