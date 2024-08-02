export default function Footer() {
    return <div className="footer_bg_color w-full text-text-white px-[16px] md:px-[130px] py-[20px]">
        <div className="flex border-b border-[#1D2E27] gap-[16px]">
            <div className="border-r border-[#1D2E27] flex-1 py-[20px]">
                <div className="flex flex-col gap-[16px]">
                    <div className="flex gap-[10px] items-center">
                        <img src="/assets/logo-social.svg" alt="social" className=" w-[20px] md:w-[46px] h-[20px] md:h-[46px]"/>
                        <div className="text-[14px] md:text-[29px] font-bold">Social</div>
                    </div>
                    <div className="flex gap-[20px]">
                        <img src="/assets/ig.svg" alt="ig" className="w-[20px] md:w-[40px]"/>
                        <img src="/assets/fb.svg" alt="ig" className="w-[20px] md:w-[40px]"/>
                        <img src="/assets/in.svg" alt="ig" className="w-[20px] md:w-[40px]"/>
                    </div>
                </div>
                
            </div>
            <div className="text-[10px] md:text-[14px] flex-1 py-[20px]">Join the dino-mite revolution by following us on our social media platforms, sharing our memes, and contributing your own creations. Whether you’re a paleontology buff or just someone who loves a good laugh, Project Dino welcomes everyone to the prehistoric party.</div>
        </div>
        <div className="text-[10px] md:text-[14px] py-[20px]">
        At Project Dino, we believe that laughter is timeless—just like dinosaurs. So, let’s dig up the past and resurrect it with humor, one meme at a time. Get ready to embark on a comedic journey through the Mesozoic era and beyond with Project Dino! Get Dino tokens now!
        </div>
    </div>;
}
