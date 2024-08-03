import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
function SliderFooter() {
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
                        <img src="/assets/1.png" alt="1" className='h-[240px] border rounded-[14px]'/>
                        <div className="rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px] min-h-[250px]">
                            <div className='text-[36px] font-[900] text-[#2A4C75] flex items-center gap-[5px]'>
                                DINO <span className='text-[36px] font-[900] text-bg-base'>TOURS</span>
                            </div>
                            <div className='text-[18px]'>
                            Escape to paradise with a luxury trip to the Maldives. Stay in the best hotels, enjoy crystal-clear waters, pristine beaches, and indulge in world-class spa treatments.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="/assets/2.png" alt="1" className='h-[240px] border rounded-[14px]'/>
                        <div className="rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px] min-h-[250px]">
                            <div className='text-[36px] font-[900] text-[#2A4C75] flex items-center gap-[5px]'>
                                DINO <span className='text-[36px] font-[900] text-bg-base'>MUSEUMS</span>
                            </div>
                            <div className='text-[18px]'>
                            Escape to paradise with a luxury trip to the Maldives. Stay in the best hotels, enjoy crystal-clear waters, pristine beaches, and indulge in world-class spa treatments.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="/assets/3.png" alt="1" className='h-[240px] border rounded-[14px]'/>
                        <div className="rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px] min-h-[250px]">
                            <div className='text-[36px] font-[900] text-[#2A4C75] flex items-center gap-[5px]'>
                                YOUR OWN PRIVATE <span className='text-[36px] font-[900] text-bg-base'>VACHT</span>
                            </div>
                            <div className='text-[18px]'>
                            Escape to paradise with a luxury trip to the Maldives. Stay in the best hotels, enjoy crystal-clear waters, pristine beaches, and indulge in world-class spa treatments.
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

export default SliderFooter;
