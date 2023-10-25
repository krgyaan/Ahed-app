import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ logo, links, button }: NavbarProps) => {
    return (
        <nav className='my-5 mx-8 flex items-center justify-between'>
            <Link href='/'>
                <Image src={logo} alt='logo' height={40} className='rounded-lg' />
            </Link>
            <ul className='flex items-center justify-between gap-5 text-lg font-semibold'>
                {links.map((link) => (
                    <li key={link.url}>
                        <Link href={link.url} >{link.name}</Link>
                    </li>
                ))}
            </ul>
            <Button variant='default' className='rounded-full'>{button}</Button>
        </nav>
    );
};

export default Navbar;