
import { useInView } from 'react-intersection-observer'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'
import BotTop from '../anim/BotTop'


const Guess = () => {

    const settings = { triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` }

    const [questionRef, questionView] = useInView(settings)

    const container = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.1,
                type: 'spring',
                duration: 1,

            }
        }
    }

    const item1 = {
        hidden: {
            scale: 0,
            rotate: '-20deg'
        },
        show: {
            scale: 1
        }
    }

    const item2 = {
        hidden: {
            scale: 0
        },
        show: {
            scale: 1
        }
    }

    const item3 = {
        hidden: {
            scale: 0,
            rotate: '20deg'
        },
        show: {
            scale: 1
        }
    }

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })


    const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1])
    const smoothScale = useSpring(scale)

    return (
        <motion.section className="w-full min-h-screen h-auto py-10 bg-bg px-5" style={{ scale: smoothScale }} ref={containerRef}>

            <div className="max-w-[1500px] w-full h-auto mx-auto flex items-center gap-x-2 mt-10 lg:flex-row flex-col">
                <div className="w-full" ref={questionRef}>
                    <motion.div variants={container} initial="hidden" animate={questionView ? "show" : ""} className="font-anton w-fit mx-auto flex items-end gap-x-2">
                        <motion.h2 variants={item1} className="text-6xl -rotate-[20deg] origin-bottom">?</motion.h2>
                        <motion.h2 variants={item2} className="text-8xl origin-bottom">?</motion.h2>
                        <motion.h2 variants={item3} className="text-6xl rotate-[20deg] origin-bottom">?</motion.h2>
                    </motion.div>

                    <BotTop>
                        <img src="/guess.webp" alt="Guess" className="object-cover mx-auto lg:mx-0 lg:w-full  lg:h-full" />
                    </BotTop>
                </div>
                <div className="w-full h-full">
                    <h1 className="text-4xl font-nexa">GUESS THE <span className="text-lavender drop-shadow-road">AI</span></h1>

                    <div className="flex flex-col mt-3 gap-y-8 max-w-[40rem]">
                        <p className="">
                            <span className="font-bold">The VRAI</span> &#40;Virtual Reality Artificial Intelligence&#41; project has introduced a new gamemode called &#34;Guess the AI!&#34; that challenges players to determine whether the user they are interacting with is a human or an AI.
                        </p>

                        <p className="">
                            <span className="font-bold">This game</span> is designed to highlight the impressive capabilities of VRAI, which uses sophisticated AI algorithms and machine learning to simulate nearly human-like conversations. The VRAI technology allows for seamless communication between an AI and a human, creating an immersive experience where it can be difficult to determine who or what you are talking to.
                        </p>

                        <p className="">
                            <span className="font-bold">In the &#34;Guess the AI!&#34;</span> game mode, players are presented with a series of conversations with various users. They must use their intuition and critical thinking skills to decide whether each user is a human or an AI. Points are awarded for correct answers, and players can see how they stack up against others on the global leaderboard.
                        </p>

                        <div className="">
                            <span className="font-bold">This gamemode</span> not only showcases the advanced abilities of VRAI but also provides a thought-provoking experience for players, encouraging them to consider what makes humans unique from artificial intelligence. Overall, &#34;Guess the AI!&#34; is an example of the innovative and immersive games that VRAI is bringing to the emerging metaverse space.
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Guess;