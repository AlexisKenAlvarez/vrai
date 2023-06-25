import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'

const Adventure = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1])
    const smoothScale = useSpring(scale)

    const rotate = useTransform(scrollYProgress, [0, 1], [40, -40])
    const smoothRotate = useSpring(rotate)

    return (
        <motion.section className="w-full min-h-screen py-10 bg-bg px-5" ref={containerRef} style={{ scale: smoothScale }}>

            <div className="max-w-[1500px] w-full h-auto mx-auto flex items-center gap-x-2 mt-10 lg:flex-row flex-col-reverse z-10 relative">
                <div className="w-full h-full">
                    <h1 className="text-4xl font-nexa">VRAI <span className="text-lavender drop-shadow-road">ADVENTURE</span></h1>

                    <div className="flex flex-col mt-3 gap-y-8 max-w-[40rem]">
                        <p className="">
                            <span className="font-bold">The VRAI</span> Adventure gamemode is a thrilling experience that immerses players in an exciting virtual world, where they are tasked with completing diverse quests and challenges to advance in the game. This gamemode offers players the chance to embark on a wide variety of adventures, such as exploring ancient ruins, investigating mysterious disappearances, or even fighting
                            dangerous monsters.
                        </p>

                        <p className="">
                            <span className="font-bold">As players progress</span> through their missions, they will encounter increasingly difficult obstacles and enemies, which will require them to use their wits and skills to overcome. From solving puzzles to engaging in combat, the gamemode keeps players of all ages engaged and entertained.
                        </p>

                        <p className="">
                            <span className="font-bold">To enhance the experience</span> , the Adventure gamemode allows for multiplayer participation, allowing players to team up with others to complete quests more efficiently and effectively. This not only adds an element of social interaction to the game but also encourages teamwork and collaboration among players.
                        </p>

                        <div className="">
                            <span className="font-bold">Overall</span> , the Adventure gamemode in VRAI is an exciting and immersive experience that challenges players to push their limits and explore a vast virtual world full of adventure and excitement.
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <motion.img style={{rotate: smoothRotate}} src="/adv.webp" alt="Adventure" className="object-cover mx-auto lg:mx-0 lg:w-full  lg:h-full" />
                </div>

            </div>
        </motion.section>
    );
}

export default Adventure;