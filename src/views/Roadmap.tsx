import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import BotTop from '../anim/BotTop';

const Roadmap = () => {

    const containerRef = useRef<HTMLDivElement>(null)

    const data = [
        {
            title: "st",
            description: [
                "Whitepaper V1",
                "Website V1",
                "VRAI token development",
                "VRAI metaverse development"
            ]
        },
        {
            title: "nd",
            description: [
                "IDO campaign",
                "IDO (Pinksale)",
                "VRAI token launch (Uniswap V2)",
                "Launch campaign",
                "Partnerships",
                "VRAI metaverse launch V1",
                "Metaverse campaign",
                "Whitepaper V2",
                "Website V2"
            ]
        },
        {
            title: "rd",
            description: [
                "VRAI metaverse V2 (Adventure gamemode)",
                "Metaverse campaign",
                "Whitepaper V3",
                "Website V3"
            ]
        }
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })

    const scaleY = useTransform(scrollYProgress, [0.2, 1], [0, 1])
    const scaleYSmooth = useSpring(scaleY)

    return (
        <section className="w-full min-h-screen bg-bg relative py-10 px-5 pb-28" id='roadmap'>


            <div className="max-w-[1500px] w-full h-auto mx-auto">
                <div className="relative">
                    <BotTop>
                        <h1 className="text-center text-4xl font-nexa mt-24">ROADMAP</h1>
                    </BotTop>
                    <BotTop>
                        <h1 className="text-[#030222] stroked purp-shadow text-center text-7xl font-nexa mt-2 relative w-fit mx-auto">
                            VR AI
                        </h1>
                    </BotTop>
                </div>

                <div className="flex flex-col gap-y-28 md:gap-y-[25rem] w-fit mx-auto relative mt-20" ref={containerRef}>

                    <motion.div style={{ scaleY: scaleYSmooth }} className=" origin-top middle-line w-3 h-[90%] left-0 right-0 mx-auto bg-lavender absolute mt-10 rounded-full drop-shadow-road md:block hidden"></motion.div>

                    {data.map((items, i) => {
                        return (
                            <div className={`max-w-[55rem] w-full h-auto flex items-center gap-x-[14rem] lg:gap-x-[20rem] mx-auto ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={i}>
                                <motion.div 
                                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }} 
                                whileInView={{ x: 0, opacity: 1 }} 
                                transition={{ duration: 1, ease: [0.16, 0.77, 0.47, .97] }} 
                                viewport={{margin: `${window.innerHeight}px 0px  0px 0px`}}
                                className={`${i % 2 === 0 ? 'text-center md:text-right' : 'text-center md:text-left'} max-w-[70rem] w-full`}>
                                    <h1 className="font-nexa text-3xl text-lavender md:hidden block">{i + 1}{items.title}</h1>
                                    <h1 className="font-nexa text-2xl">Quarter 2023</h1>
                                    <ul className="font-regular">
                                        {items.description.map((items, index) => {
                                            return (
                                                <p className="" key={index}>{items}</p>
                                            )
                                        })}
                                    </ul>
                                </motion.div>
                                <motion.div className="max-w-[55rem] w-full md:block hidden"
                                 initial={{ x: i % 2 === 0 ? 100 : -100, opacity: 0 }} 
                                 whileInView={{ x: 0, opacity: 1 }} 
                                 transition={{ duration: 1, ease: [0.16, 0.77, 0.47, .97] }} 
                                 viewport={{margin: `${window.innerHeight}px 0px  0px 0px`}}
                                >
                                    <h1 className="text-8xl font-nexa text-lavender text-left">{i + 1}{items.title}</h1>
                                </motion.div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </section >
    );
}

export default Roadmap;