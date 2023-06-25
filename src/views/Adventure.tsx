

const Adventure = () => {

    return (
        <section className="w-full min-h-screen py-10 bg-bg px-5">

            <div className="max-w-[1500px] w-full h-auto mx-auto flex items-center gap-x-2 mt-10 lg:flex-row flex-col-reverse z-10 relative">
                <div className="w-full h-full">
                    <h1 className="text-4xl font-nexa">VRAI <span className="text-lavender">ADVENTURE</span></h1>

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
                    <img src="/adv.webp" alt="Adventure" className="object-cover mx-auto lg:mx-0 lg:w-full  lg:h-full" />
                </div>

            </div>
        </section>
    );
}

export default Adventure;