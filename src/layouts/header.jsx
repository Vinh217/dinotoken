import Marquee from "react-fast-marquee";

export default function Header() {
    return (
        <Marquee
            speed={20}
            autoFill={true}
            className="h-[25px] bg-bg-base overflow-hidden"
        >
            <div className="flex items-center gap-[15px]">
                <img src="/assets/ice2.png" alt="hello" className="w-[23px] shrink-0"/>
                <div className="text-[10px] font-yourFont text-text-white font-[700] mr-3">DINO TOKEN</div>
            </div>
        </Marquee>);
}
