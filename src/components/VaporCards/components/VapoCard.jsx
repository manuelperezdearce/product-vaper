import VapoColors from "./VapoColors";
import { useStore } from "../../../store/store-zustand";
import { FaCartPlus } from "react-icons/fa";

export default function VapoCard() {

    const toogleActive = useStore((state) => state.toogleActive)


    return (

        <div className="w-[310px] md:w-[700px] bg-slate-100 bg-opacity-40 p-5 rounded-3xl flex flex-wrap items-center justify-center group/card z-40 relative" >

            <button name="btnCloseCard" role="button" className="z-20 text-white text-sm bg-purple-700 rounded-full aspect-square w-8 h-8 p-1 group absolute top-2 right-2" onClick={toogleActive} > X</button>

            <div className="w-full h-[200px] md:w-1/2  flex items-center justify-center relative">
                <div className="w-[30px] md:w-[50px] duration-200 group-hover/card:-translate-x-10 group-hover/card:translate-y-12 group-hover/card:rotate-45 relative">
                    <img className={`w-full absolute delay-200 duration-300 group-hover/card:-translate-y-[40%]`} src="/top.png" alt="" />
                    <img className="w-full absolute" src="/body.png" alt="" />
                    <img className="w-full" src="/bodyfull.png" alt="" />
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



    )
}