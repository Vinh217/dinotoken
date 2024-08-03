import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
function Sliders() {
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <div className="slider-container">
            <Slider
                ref={(slider) => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="/assets/sl1.png" alt="1" className='h-[240px] border rounded-[14px]'/>
                        <div className="rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px] min-h-[250px]">
                            <div className='text-[36px] font-bold text-[#2A4C75] flex items-center gap-[5px]'>
                                BUILD <span className='text-[36px] font-bold text-bg-base'>A DINO COMMUNITY</span>
                            </div>
                            <div className='text-[18px]'>
                                Foster a community of dinosaur enthusiasts and meme lovers who can engage, share, and contribute to our growing library of dino-memes
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="/assets/sl2.png" alt="1" className='h-[240px] border rounded-[14px]'/>
                        <div className="rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px] min-h-[250px]">
                            <div className='text-[36px] font-bold text-[#2A4C75] flex items-center gap-[5px]'>
                                LEARN WITH <span className='text-[36px] font-bold text-bg-base'>FUN</span>
                            </div>
                            <div className='text-[18px]'>
                            Use meme as a platform to share fun and interestin facts about dinosaurs, blending education with entertainment.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="/assets/sl3.png" alt="1" className='h-[240px] border rounded-[14px]' />
                        <div className="rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px] min-h-[250px]">
                            <div className='text-[36px] font-bold text-[#2A4C75] flex items-center gap-[5px]'>
                                CREATE <span className='text-[36px] font-bold text-bg-base'>DINO-MITE CONTENT</span>
                            </div>
                            <div className='text-[18px]'>
                            Develop a collection of engaging and shareable memes featuring various dinosaur species in humorous scenarios.
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className='pt-[40px] flex w-full justify-center gap-[150px]'>
                <img src="/assets/arrow-left.webp" onClick={previous} alt="" className='cursor-pointer w-[67px]'/>
                <img src="/assets/arrow-right.webp" onClick={next} alt="" className='cursor-pointer w-[67px]'/>
            </div>
        </div>
    );
}

export default Sliders;
