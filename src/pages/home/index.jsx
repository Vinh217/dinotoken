import SliderFooter from './components/sliderfooter';
import Sliders from './components/sliders';

export default function Home() {
    return (
        <div>
            <div className="relative">
                <img
                    src="/assets/bannertop.svg"
                    alt="banner"
                    className="w-full"
                />
                <div className="triangle-left relative w-[350px] h-[50px] bg-bg-base before:absolute before:top-[20px] before:border-b-[15px] before:border-r-[15px] before:border-t-[15px] before:border-b-transparent before:border-r-[#42ad68] before:border-t-transparent before:left-[9px] before:rotate-[135deg] text-[24px] font-[900] text-center text-[#2A4C75] flex items-center justify-center
                ">
                    PRESALE $DINO
                </div>
            </div>

            <div className="px-[16px]" id='feature'>
                <img
                    src="/assets/section1.png"
                    alt=""
                    className="hidden w-full md:block"
                />
                <img
                    src="/assets/section1_ip.svg"
                    alt=""
                    className="block w-full md:hidden"
                />
            </div>
            {/* section 1 */}
            <div className="px-[16px] py-[30px] md:px-[130px]">
                <div className="flex w-full flex-col justify-center gap-[24px] md:flex-row">
                    <div className="max-w-[590px] rounded-[14px] border-[3px] border-[#58b7e7] p-[20px]">
                        <div>
                            <img
                                src="/assets/dino_content.gif"
                                alt=""
                                className="rounded-[14px] border"
                            />
                        </div>
                        <div className="pt-[20px]">
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                Charity FIRST
                            </div>
                            <div className="pt-[10px] text-[16px]">
                                Global charity and research initiatives that
                                will drive attention of millions of people.
                                $DINO aims to have a net-positive impact on real
                                world with the help of charity.
                            </div>
                        </div>
                    </div>
                    <div className="flex max-w-[778px] flex-col items-center gap-[20px] md:flex-row md:flex-wrap">
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <img src="/assets/benefit-1.svg" alt="" />
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                No Perpetuals
                            </div>
                            <div className="text-[16px]">
                                To prevent market manipulation, we avoid
                                perpetual contracts at the beginning stage of
                                the project, reducing volatility.
                            </div>
                        </div>
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <img src="/assets/heavy.svg" alt="" />
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                Heavy Presale Limits:
                            </div>
                            <div className="text-[16px]">
                                Limited to 200 Solana (SOL) per wallet. Each
                                wallet can invest up to 200 SOL.
                            </div>
                        </div>
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <img src="/assets/heavy_1.svg" alt="" />
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                Pre-agreed top listings:
                            </div>
                            <div className="text-[16px]">
                                We have several listings pre-agreed with top
                                tier exchanges with amazing liquidity and
                                features.
                            </div>
                        </div>
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <img src="/assets/heavy_2.svg" alt="" />
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                Vested partners & KOLs
                            </div>
                            <div className="text-[16px]">
                                All of our top partners & KOLs are limited with
                                publicly visible tokens vesting. This ensures a
                                long-term involvement.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="py-[30px]" id="utility">
                <div className="mb-[40px] flex flex-col items-center justify-center px-[16px] md:px-[130px]">
                    <div className="text-center text-[40px] font-[900] text-[#2A4C75] md:text-[64px]">
                        BECOME A
                        <span className="text-[40px] font-[900] text-bg-base md:text-[64px]">
                            $DINO
                        </span>
                        HOLDER
                        <br />– WIN HUGE PRIZES
                    </div>
                    <div className="text-[20px] font-bold text-bg-base">
                        And so much more coming soon
                    </div>
                </div>
                <Sliders />
            </div>

            {/* section 3 */}
            <div id="roadmap">
                <img
                    src="/assets/manydino_web.svg"
                    alt=""
                    className="hidden w-full md:block"
                />
                <img
                    src="/assets/manydino_ip.png"
                    alt=""
                    className="block w-full md:hidden"
                />
            </div>

            {/* section 4  */}
            <div className="px-[16px] py-[30px] md:px-[130px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center text-[64px] font-[900] text-bg-base">
                        <span className="text-[64px] text-[#2A4C75]">
                            SUPPLY DYNAMICS:
                        </span>
                        <br />
                        IS AN IMPACT TOKEN
                    </div>
                    <div className="max-w-[600px] text-center text-[20px] text-[#2A4C75]">
                        And so much more coming soon
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-[16px] py-[30px] md:flex-row">
                    <div className="max-w-[670px] rounded-[14px] border border-[#40beff] p-[40px] min-h-[1110px]">
                        <div className="flex flex-col items-center justify-center gap-[16px]">
                            <div className="flex">
                                <img src="/assets/ice.png" alt="" />
                            </div>
                            <div className="text-center text-[40px] font-[900] uppercase text-[#2A4C75]">
                                Freezing (Staking)
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                Just as dino turns into ice when it gets cold,
                                $DINO tokens can be staked (iced) to earn
                                rewards. Stakers are rewarded with additional
                                $DINO tokens over time, simulating the process
                                of accumulating ice
                            </div>
                        </div>
                        <div className="mt-[16px] rounded-[14px] border bg-[#9264c021] p-[20px]">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-center text-[24px] font-[900] uppercase text-[#2A4C75] md:text-start">
                                    Mechanism
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/cal.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users stake $DINO tokens for a specified
                                        period.
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/clock.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users stake $DINO tokens for a specified
                                        period.
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/pig.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users stake $DINO tokens for a specified
                                        period.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[16px] rounded-[14px] border bg-[#649ac021] p-[20px]">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-[24px] font-[900] uppercase text-[#2A4C75]">
                                    Simple Math
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/cal_1.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        4.5% total allocated for a year between
                                        3 pools: daily, weekly, and monthly
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/up_arrow.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        At 20% of the presale tokens evenly
                                        staked to these pools, users will get
                                        50% APR
                                    </div>
                                </div>
                                <div className="rounded-full border border-dotted border-[#40beff] bg-white p-[10px] font-[900]">
                                    <span className="text-[14px] font-[900] text-[#2A4C75] md:text-[18px]">
                                        APR ={' '}
                                    </span>{' '}
                                    <span className="text-[14px] uppercase text-[#B55AD5] md:text-[18px]">
                                        % total staking rewards /
                                    </span>{' '}
                                    <span className="text-[14px] uppercase text-bg-base md:text-[18px]">
                                        % of total supply
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[670px] rounded-[14px] border border-[#40beff] p-[40px] min-h-[1110px]">
                        <div className="flex flex-col items-center justify-center gap-[16px]">
                            <div className="flex">
                                <img src="/assets/ice2.png" alt="" />
                            </div>
                            <div className="text-center text-[40px] font-[900] uppercase text-[#2A4C75]">
                                Vaporizing (Burning)
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                When dino is heated, it turns into vapor and
                                disappears. Similarly, $DINO tokens can be
                                burned (vaporized) to reduce the total supply,
                                increasing scarcity and potentially the value of
                                the remaining tokens.
                            </div>
                        </div>
                        <div className="mt-[16px] rounded-[14px] border bg-[#64c06d21] p-[20px]">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-center text-[24px] font-[900] uppercase text-[#2A4C75] md:text-start">
                                    Mechanism
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/contact.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users can send $DINO tokens to burn
                                        contract
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <img
                                            src="/assets/cal_2.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Every week, 25% of these tokens burned,
                                        25% sent to charity, and 50% are rained
                                        (raffled) among all participants giving
                                        them back from 0.1x to 10x of tokens
                                        they burned (with 2 times higher odds
                                        for getting less than 1x)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <video
                                autoPlay={'autoplay'}
                                preload="auto"
                                loop
                                muted
                                className="mt-[80px] w-full rounded-[14px]"
                            >
                                <source
                                    src="/assets/dino_run.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div className="px-[16px] md:px-[130px]">
                <div className="item-center flex w-full flex-col justify-center bg-bgdino3 bg-100% bg-center bg-no-repeat py-[100px]">
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-[600px] text-center text-[64px] font-[900] text-[#2A4C75]">
                            <span className="text-[64px] text-bg-base">
                                $DINO
                            </span>
                            IS AN IMPACT TOKEN
                        </div>
                        <div className="max-w-[600px] text-center text-[20px] text-[#2A4C75]">
                            $DINO is something essential for everyone, so we
                            created the first meme tokenomics focused on funding
                            global charity and research organisations to use the
                            power of meme community to collectively change the
                            world for better
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="/assets/threedino.svg" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[20px] md:flex-row">
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[64px] font-bold text-bg-base">
                                01
                            </div>
                            <div className="text-center text-[40px] font-[900] text-[#2A4C75]">
                                30% PRESALE + BONUS
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                30% of DINO tokens are allocated for the presale
                                with attactive bonuses for early investors.
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[64px] font-bold text-bg-base">
                                02
                            </div>
                            <div className="text-center text-[40px] font-[900] text-[#2A4C75]">
                                10% TEAM
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                10% of DINO tokens are designated for the
                                development are management team to recognize
                                their contributors and ensure long-team
                                motivation.
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[64px] font-bold text-bg-base">
                                03
                            </div>
                            <div className="text-center text-[40px] font-[900] text-[#2A4C75]">
                                40% LIQUIDITY, CEX, MM
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                40% of DINO tokens are decidated to providing
                                liquidity, listing on centralized exchanges
                                (CEX), and market-making activities (MM) to
                                ensure token stability and ease of trading.
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[64px] font-bold text-bg-base">
                                04
                            </div>
                            <div className="text-center text-[40px] font-[900] text-[#2A4C75]">
                                20% MARKETING
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                20% of DINO tokens are allocated for marketing
                                and promotional activites to enhance brand
                                recognition and grow the dinosaur enthusiast
                                community.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 6 */}
            <div className="py-[30px]" id="faq">
                <div className="mb-[40px] flex flex-col items-center justify-center px-[16px] md:px-[130px]">
                    <div className="text-center text-[64px] font-bold text-[#2A4C75]">
                        CAMPAIGNS & PROGRAMS
                    </div>
                    <div className="text-[20px] font-bold text-bg-base">
                        Participate in contents and games for a chance to win
                        amazing dinosaur-themed prizes as books, toys, and
                        museum tickets.
                    </div>
                </div>
                <SliderFooter />
            </div>
            <img src="/assets/imgfooter.png" alt="" className='w-full mt-[50px]'/>
        </div>
    );
}
