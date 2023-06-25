import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'

const Gameplay = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])
    const rotation2 = useTransform(scrollYProgress, [0, 1], [45, 420])


    const rotationLeft = useSpring(rotation)
    const rotationRight = useSpring(rotation2)



    return (
        <section className="w-full min-h-screen h-auto px-5 bg-bg relative pb-24 overflow-hidden" ref={containerRef}>
            <img src="/gameplaybg.webp" alt="Gameplay Background" className="absolute w-full h-full object-cover" />
            <div className="max-w-[1500px] w-full mx-auto h-auto">

                <div className="relative">
                    <h1 className="text-center text-4xl font-nexa mt-24">GAMEPLAY</h1>
                    <div className=" text-[#030222] stroked purp-shadow text-center text-7xl font-nexa mt-2 relative w-fit mx-auto">
                        <motion.img src="/vr.webp" alt="VR" className="sm:block hidden absolute w-20 md:w-32 -bottom-4 -left-[10rem] lg:-left-[20rem]" style={{ rotate: rotationLeft }} />

                        <motion.img src="/vr.webp" alt="VR" className="sm:block hidden absolute w-20 md:w-32 -bottom-4 -right-[10rem] lg:-right-[20rem] rotate-45" style={{ rotate: rotationRight }} />


                        <p className="">
                            VR AI
                        </p>
                    </div>

                </div>

                <div className="relative mt-20 flex items-start justify-center gap-x-4 lg:text-base text-sm md:flex-row flex-col gap-y-8 md:text-left text-center">

                    <div className="md:w-[26rem] h-auto md:min-h-[35rem] lg:min-h-[40rem] bg-lavender/10 backdrop-blur-sm border-2 border-lavender relative p-10">
                        <div className="h-[3px] absolute top-5 right-0 w-full bg-lavender translate-x-full drop-shadow-shapes md:block hidden">
                            <div className="w-4 h-4 rotate-45 absolute right-0 translate-x-full bg-lavender top-0 bottom-0 my-auto"></div>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            <p className="">

                                <span className="font-bold">Project VRAI</span> metaverse gameplay is an immersive gaming experience that allows players to interact with each other in a virtual world. In this game, players are able to create and customize their own avatars, which they can use to navigate the virtual landscape. As they explore the environment, they can interact with other players and custom AI characters, who offer them various tasks to complete.
                            </p>

                            <p className="">
                                <span className="font-bold">This interactive</span> and dynamic gameplay gives players a sense of agency, as they are able to shape their own experiences within the game. The ability to customize their avatar also allows players to express themselves creatively, making the game more engaging and immersive.
                            </p>
                        </div>

                    </div>

                    <div className="md:w-[26rem] h-auto md:min-h-[35rem] lg:min-h-[40rem] bg-lavender/10 backdrop-blur-sm border-2 border-lavender md:mt-12 relative p-10">
                        <div className="h-[3px] absolute bottom-5 left-0 w-full bg-lavender -translate-x-full drop-shadow-shapes md:block hidden">
                            <div className="w-4 h-4 rounded-full absolute left-0 -translate-x-full bg-lavender top-0 bottom-0 my-auto"></div>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            <p className="">
                                <span className="font-bold">The custom AI</span> feature of the game is a unique aspect that sets it apart from other massively multiplayer online games &#40;MMOs&#41;. These AI characters are specifically designed to offer players personalized tasks based on their interests and preferences. For example, if a player enjoys solving puzzles, the AI might offer them a complex puzzle to solve. Alternatively, if a player prefers combat-based challenges, the AI might set up a battle scenario for them to engage in.
                            </p>

                            <p className="">
                                <span className="font-bold">Moreover, the game&#39;s</span> metaverse concept means that players can access it from anywhere in the world, as long as they have an internet connection. This feature enables social interaction among players, regardless of their geographical location. As they complete tasks and progress through the game, players earn rewards and accolades, which help to motivate them to continue playing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center md:text-left w-full max-w-[53rem] md:h-[10rem] bg-lavender/10 backdrop-blur-sm border-2 border-lavender mt-8 relative p-10 mx-auto md:text-base text-sm">
                    <p className=""><span className="font-bold">In summary, Project VRAI&#39;s</span> metaverse gameplay offers a unique and engaging experience that leverages custom AI character tasks and personalized avatars as a way to create an immersive and interactive world that players can enjoy with others from around the globe.</p>
                </div>
            </div>
        </section>
    );
}

export default Gameplay;