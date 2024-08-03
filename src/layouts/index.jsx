import Header from './header';
import Footer from './footer';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="fixed left-0 top-[43px] z-10 flex h-[50px] w-full flex-col items-center">
                <div className="ml-auto mr-auto w-full max-w-[1674px] px-[14px]">
                    <div className="headerrr py-[13px] md:py-[22px] pl-[38px] pr-[22px]">
                        <div className="flex items-center gap-[100px]">
                            <a
                                className="cursor-pointer text-[30px] font-[900] text-bg-base"
                                href=""
                            >
                                $DINO
                            </a>
                            <div>
                                
                            </div>
                            <div className="hidden cursor-pointer flex-row gap-[20px] text-[30px] font-bold uppercase text-bg-base md:flex">
                                <a href="#feature" className="cursor-pointer">
                                    Features
                                </a>
                                <a href="#utility" className="cursor-pointer">
                                    UTILITY
                                </a>
                                <a href="#tokenomics" className="cursor-pointer">
                                    TOKENOMICS
                                </a>
                                <a href="#roadmap" className="cursor-pointer">
                                    ROADMAP
                                </a>
                                <a href="#faq" className="cursor-pointer">
                                    FAQ
                                </a>
                                <a href="#footer" className="cursor-pointer">
                                    Social/Footer
                                </a>
                                <a href="#legal" className="cursor-pointer">
                                    Legal/Disclaimer
                                </a>
                            </div>
                        </div>
                        <div className="hidden cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#000000] bg-bg-base px-[20px] py-[5px] md:flex">
                            <div className="cursor-pointer text-[24px] font-bold text-text-white">
                                PRE-SALE
                            </div>
                        </div>
                        <div
                            className="block cursor-pointer md:hidden"
                            onClick={toggleMenu}
                        >
                            <img
                                src="/assets/menu.svg"
                                alt=""
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`menu ${isOpen ? 'open' : ''} z-20 flex bg-bgdino3 bg-100% bg-center bg-no-repeat py-[20px] pl-[16px] md:hidden`}
            >
                <div className="flex flex-col items-start gap-[20px] px-[10px] w-full">
                    <div className='flex justify-between w-full'>
                        <a
                            className="cursor-pointer text-[30px] font-[900] text-bg-base"
                            href=""
                            onClick={() => setIsOpen(false)}
                        >
                            $DINO
                        </a>
                        <div>
                            <img src="/assets/menu-close.svg" className='cursor-pointer' alt="" onClick={() => setIsOpen(false)}/>
                        </div>
                    </div>
                    <div className="flex cursor-pointer flex-col gap-[20px] text-[30px] font-bold uppercase text-bg-base md:hidden">
                        <a
                            href="#feature"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#utility"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            UTILITY
                        </a>
                        <a
                            href="#utility"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            TOKENNOMICS
                        </a>
                        <a
                            href="#roadmap"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            ROADMAP
                        </a>
                        <a
                            href="#faq"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </a>
                        <a
                            href="#faq"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Social/Footer
                        </a>
                        <a
                            href="#faq"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Legal/Disclaimer
                        </a>
                        <a
                            href="#faq"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            CONTRACT ADDRESS:
                        </a>
                    </div>

                    <div className="flex cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#000000] bg-bg-base px-[20px] py-[5px] md:hidden">
                        <div className="cursor-pointer text-[24px] font-bold text-text-white">
                            PRE-SALE
                        </div>
                    </div>
                </div>
            </div>
            <Header />
            {children}
            <Footer />
        </>
    );
}
