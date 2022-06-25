import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { encryptKeystore } from '@ethersproject/json-wallets';
import { HTMLInputTypeAttribute } from 'react';

import Market from './Transactions';
import Exchange from './Services';

import logo from '../../images/NOBIDEXX.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [multiPage, setMultiPage] = useState(true);
    <div className="w-full h-[0.25px] bg-gray-400 mt-5 " />

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-52 cursor-pointer'></img>
            </div>
            <ul className='text-gray md:flex hidden list-none flex-row justify-between items-center flex-initial cursor-pointer'>
                {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] text-white py-2 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className='flex relative'>
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer items-center" onClick={() => setToggleMenu (flase)} />
                : <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu (true)} />}
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 right-0 p-2 w-full h-full h-screen shadow-2xl md:hidden list-none
                            flex flex-row justify-center items-center rounded-lg black-glassmorphism text-black animate-slide-in"
                    > 
                        <li className='text-xl w-full my-5'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        <nav className='fixed'>
                        </nav>
                    <nav className='z-10 w-40 fixed top-3 left-4 py-2 flex flex-row justify-center items-center'>
                        <img src={logo} alt="logo" className="rounded-0" />
                        </nav>
                    <nav className="fixed justify-center justify-between top-3 flex mt-0 right-0 items-center">
                        <li className="bg-[#1e81b0] text-center text-white py-2 px-6 mx-4 cursor-pointer hover:bg-[#2546bd]">
                            Login
                        </li>
                        <li className="bg-[#1e81b0] text-center text-white py-2 px-6 mx-4 cursor-pointer hover:bg-[#2546bd]">
                            Join!
                        </li>
                    </nav>
                        </li>
                        <ul className='z-10 w-full fixed bottom-0 right-0 py-0 shadow-2xl sea-glassmorphism
                            flex flex-row justify-center items-center rounded-sm text-white'>
                        {["Market", "Exchange", "Tutorials", "Wallet"].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classProps="my-7 text-lg" 
                    multiPage='Market, Exchange, Tutorials, Wallet'
                        />
                ))}
                    </ul>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;