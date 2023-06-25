import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {

    const ca = '0x000000000000000000000000000000000000dEaD'

    return (
        <section className="w-full h-screen px-5 bg-bg relative overflow-hidden">
            <img src="/herobg.png" alt="background" className="absolute top-0 left-0 w-full h-full object-cover" />
            <img src="/bot.webp" alt="Robot" className="absolute bottom-0 right-0 lg:w-auto w-[30rem] lg:h-[95vh] md:block hidden" />


            <div className="absolute max-w-[1500px] w-full mx-auto left-0 right-0 bottom-0 md:block hidden">
                <motion.img animate={{ rotate: 360 }} transition={{ duration: 50, ease: 'linear', repeat: Infinity }} src="/sphere.webp" alt="Sphere" className="absolute bottom-0 -left-5 2xl:-left-11" />
            </div>

            <div className="overflow-hidden h-auto w-full">
                <div className="max-w-[1500px] w-full h-auto mx-auto relative z-10 mt-[10rem]">




                    <div className="md:text-7xl text-5xl text-center md:text-left mx-auto md:mx-0 font-[700] font-nexa relative w-fit">
                        <img src="/bitwin.webp" alt="Star" className="absolute -right-20 top-2 md:block hidden" />
                        <h1 className="">EXPERIENCE THE</h1>
                        <h1 className=" text-[#030222] stroked purp-shadow">VR AI</h1>
                    </div>

                    <div className="mt-5 max-w-[35rem] font-regular text-white/80 text-center md:text-left mx-auto md:mx-0">
                        <p className="sm:text-base text-[12px]">{ca}</p>
                        <p className=""><span className="font-bold">VRAI</span> is a cryptocurrency project that aims to revolutionize the world of gaming through the development of a futuristic metaverse infrastructure.</p>
                    </div>

                    <div className="mt-6 flex items-center gap-x-2 w-fit md:mx-0 mx-auto">
                        <Button text="Buy Token" />

                        <button className="w-fit px-5 py-[10px] text-sm rounded-sm hover:bg-white/10 transition-all ease-in-out duration-300">
                            Chart
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;