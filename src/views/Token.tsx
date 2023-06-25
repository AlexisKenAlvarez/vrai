import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'
import LeftRight from '../anim/LeftRight'
import RightLeft from '../anim/RightLeft'
import BotTop from '../anim/BotTop'

const Token = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1])
    const smoothScale = useSpring(scale)

    return (
        <motion.section className="w-full min-h-screen py-10 px-5 relative bg-bg overflow-hidden font-regular" ref={containerRef} style={{ scale: smoothScale }} id='token'>
            <img src="/tokenbg.webp" alt="Token BG" className="w-full h-full object-cover absolute" />

            <div className="max-w-[1500px] mx-auto w-full h-auto overflow-hidden">
                <h1 className="text-9xl text-white/10 absolute left-0 right-0 text-center font-nexa select-none">TOKEN</h1>
                <BotTop>

                    <h1 className="text-4xl font-nexa text-center mt-11">TOKEN</h1>
                </BotTop>

                <BotTop>
                    <h1 className="text-[#030222] stroked purp-shadow text-center text-7xl font-nexa mt-10 relative w-fit mx-auto">
                        VR AI
                    </h1>

                </BotTop>


                <div className="flex flex-col mt-10 gap-y-4 w-fit mx-auto xl:px-10 relative sm:text-base text-sm">


                    <LeftRight>
                        <div className="bg-lavender/10 backdrop-blur-sm border-2 border-lavender relative max-w-[70rem] h-auto mx-auto p-7">
                            <p className="">
                                <span className="font-bold">VRAI token</span> is a cryptocurrency designed to function as the sole driver of the VRAI metaverse economy. The VRAI project aims to create a fully immersive virtual world that allows users to interact with each other and with digital assets in a three-dimensional space, using augmented reality &#40;AR&#41; and virtual reality &#40;VR&#41; technologies.
                            </p>
                        </div>
                    </LeftRight>

                    <RightLeft>
                        <div className="bg-lavender/10 backdrop-blur-sm border-2 border-lavender relative max-w-[70rem] h-auto mx-auto p-7">
                            <p className="">
                                <span className="font-bold">As the only</span> As the only accepted currency within the VRAI metaverse, the value of the VRAI token is expected to be determined by the demand for, and supply of, digital assets and services within the virtual world. This means that the price of the VRAI token will likely fluctuate over time, depending on the overall popularity and usage of the VRAI metaverse.
                            </p>
                        </div>
                    </RightLeft>
                    <LeftRight>
                        <div className="bg-lavender/10 backdrop-blur-sm border-2 border-lavender relative max-w-[70rem] h-auto mx-auto p-7">
                            <p className="">
                                <span className="font-bold">The VRAI token</span> was created to facilitate transactions within this virtual world, allowing users to buy and sell digital assets, pay for virtual goods and services, and participate in various activities within the VRAI ecosystem.
                            </p>
                        </div>
                    </LeftRight>

                    <RightLeft>
                        <div className="bg-lavender/10 backdrop-blur-sm border-2 border-lavender relative max-w-[70rem] h-auto mx-auto p-7">
                            <p className="">
                                <span className="font-bold">While the VRAI project</span> is still in its early stages, it has already gained significant attention from investors and blockchain enthusiasts alike. The development team behind the project has outlined an ambitious roadmap that includes the creation of an entire digital universe, featuring a variety of immersive environments and interactive experiences.
                            </p>
                        </div>
                    </RightLeft>

                </div>


            </div >
        </motion.section >
    );
}

export default Token;