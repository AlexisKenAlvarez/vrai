

const Button = ({ text }: { text: string }) => {
    return (
        <button className=" w-fit px-5 py-[10px] text-sm rounded-sm relative overflow-hidden group">
            <div className="bg-gradient-to-r from-lavender to-pnk absolute top-0 left-0 w-[200%] h-full hover:-translate-x-1/2 transition-all ease-in-out duration-300"></div>
            <p className=" relative z-10 pointer-events-none">
                {text}
            </p>
        </button>
    );
}

export default Button;