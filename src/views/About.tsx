import BotTop from "../anim/BotTop";

const About = () => {
    return (
        <section className="w-full h-auto p-10 pb-20 px-5 bg-black relative overflow-x-hidden">
            <img src="/stars.webp" alt="Stars" className="w-full h-full object-cover absolute top-0 left-0" />


            <div className="max-w-[1500px] w-full h-auto mx-auto relative">
                <BotTop>
                    <h1 className="font-nexa text-4xl text-center">
                        ABOUT <span className="text-lavender drop-shadow-road">VRAI</span>
                    </h1>
                </BotTop>

                <BotTop delay={0.05}>
                    <p className="text-white/90 mt-2 text-justify md:text-base text-sm">
                        <span className="font-bold">VRAI</span> is a cryptocurrency project that aims to revolutionize the world of gaming through the development of a futuristic metaverse infrastructure. By leveraging blockchain technology, VRAI seeks to create an immersive gaming experience where players can engage with each other within a virtual world that is completely governed by smart contracts and decentralized applications. This would eliminate the need for centralized authorities to regulate in-game economies and ownership of virtual assets. In addition to providing a secure and transparent gaming environment, VRAI also intends to create a decentralized platform for developers to build and monetize their own games. Overall, the VRAI project is focused on bringing the benefits of blockchain technology into the world of gaming and is poised to disrupt the industry in a big way.
                    </p>
                </BotTop>

                <BotTop delay={0.05}>
                    <>
                        <div className="absolute -bottom-10 -left-10">
                            <img src="/aboutline.webp" alt="Line" className=" h-full w-[23rem]  2xl:block hidden" />
                        </div>

                        <div className="absolute -bottom-10 -right-10 scale-x-[-1]">
                            <img src="/aboutline.webp" alt="Line" className=" h-full w-[23rem]  2xl:block hidden" />
                        </div>
                    </>

                </BotTop>
            </div>
        </section>
    );
}

export default About;