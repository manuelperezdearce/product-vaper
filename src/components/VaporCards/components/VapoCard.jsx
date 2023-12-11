import VapoColors from "./VapoColors";
import { FaCartPlus } from "react-icons/fa";

export default function VapoCard({ handleActive }) {
    return (
        <div className="z-30 top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center absolute bg-[rgba(0,0,0,0.5)] backdrop-blur-[9px]">
            <div className="w-[310px] md:w-[700px] bg-slate-100 bg-opacity-40 p-5 rounded-3xl flex flex-wrap items-center justify-center group/card z-40 relative" >

                <button name="btnCloseCard" role="button" className="z-20 text-white text-sm bg-purple-700 rounded-full aspect-square w-8 h-8 p-1 group absolute top-2 right-2" onClick={handleActive} > X</button>

                <div className="w-full md:w-1/2 min-h-[400px]  flex items-center justify-center relative">
                    <div className="duration-200 group-hover/card:-translate-x-10 group-hover/card:translate-y-12 group-hover/card:rotate-45 relative">
                        <img className={`w-[50px] absolute delay-200 duration-300 group-hover/card:-translate-y-[40%]`} src="/top.png" alt="" />
                        <img className="w-[50px] absolute" src="/body.png" alt="" />
                        <img className="w-[50px]" src="/bodyfull.png" alt="" />
                    </div>
                    <span className="text-white opacity-0 group-hover/card:opacity-80 group-hover/card:left-[50%] absolute w-[150px] delay-300 duration-200 left-[70%] top-[50%] text-sm">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <img className=" -translate-y-6 -translate-x-6 scale-[-1]" src="/frame.svg" alt="" />
                    </span>
                </div>
                <div className="text-left text-sm w-full md:w-1/2 min-h-[400px]  flex flex-col p-5 gap-4 justify-between">
                    <h3 className="font-black text-2xl">NEXPOD STICK VAPE</h3>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo blanditiis similique iste necessitatibus? Eveniet voluptas dicta deleniti, deserunt animi nulla voluptatibus tenetur consectetur officiis aperiam esse eos nesciunt quos!</p>
                    <VapoColors />
                    <button className="text-2xl flex gap-4 items-center mx-auto bg-purple-700 hover:bg-purple-600 duration-100 shadow-sm py-4 px-6 rounded-full text-white">
                        <FaCartPlus className="" />
                        Add to cart
                    </button>
                </div>
            </div >

        </div >

    )
}



{/* <div className={` duration-700  relative flex justify-center
        ${active && "mx-auto rotate-45 "}`}>
                <img className={`w-[50px] absolute duration-300  ${active ? "-translate-y-[40%]" : "group-hover:-translate-y-[5%]"}`} src="/top.png" alt="" />
                <img className="w-[50px] absolute" src="/body.png" alt="" />
                <img className="w-[50px]" src="/bodyfull.png" alt="" />
            </div>
            <p className={`duration-300 opacity-0  ${active && "opacity-80 -right-1"}
            text-left -right-80 6 top-32 absolute w-[100px] text-sm`}>Lorem ipsum dolor sit amet.
                <span className="w-[200px] absolute -bottom-5 right-0 ">
                    <img className="w-full scale-[-1]" src="/frame.svg" alt="" />
                </span>
            </p>
            <p className={`duration-300 opacity-0 -left-80 ${active && "left-32 opacity-80"} text-left absolute w-[100px] text-sm`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <span className="w-[200px] absolute -top-5 left-0 ">
                    <img className="w-full" src="/frame.svg" alt="" />
                </span>
            </p> */}