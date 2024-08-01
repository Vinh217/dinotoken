import Marquee from "react-fast-marquee";

export default function Header() {
    return (
        <Marquee
            speed={20}
            autoFill={true}
            className="h-[50px] bg-[#3498db] overflow-hidden"
        >
            <div className="flex items-center gap-[15px]">
                <img src="/assets/favicon.ico" alt="hello" className="w-[23px] shrink-0"/>
                <div className="text-[15px] font-yourFont text-text-white font-[700] mr-3">REHYDRATE</div>
            </div>
        </Marquee>);
}
