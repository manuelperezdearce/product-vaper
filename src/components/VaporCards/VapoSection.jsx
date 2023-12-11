import Vapo from "./components/Vapo"
import VapoCard from "./components/VapoCard"
import { useStore } from "../../store/store-zustand"

export default function VapoSection() {

    const active = useStore((state) => state.active)
    const toogleActive = useStore((state) => state.toogleActive)

    return (
        <>
            <section name="mainVapoSection" className="flex flex-col gap-20"

            >

                <h3 className="py-10 text-white font-black text-7xl bg-gradient-to-r drop-shadow-[0px_10px_3px_rgba(0,0,0,0.5)] from-red-700  via-cyan-900 to-purple-700">NEXPOD STICK <br /> <span className="text-fuchsia-600">VAPE</span></h3>
                <div role="button" className="min-h-[320px] flex mx-auto justify-center items-center group/vapos "
                    onClick={toogleActive}
                >
                    <Vapo styles={"scale-100 z-0"} src={"./BodyColors/bodyRed.png"} />
                    <Vapo styles={"scale-110 z-10"} src={"./BodyColors/bodyPurple.png"} />
                    <Vapo styles={"scale-125 z-20"} src={"./BodyColors/bodyBlue.png"} />
                    <Vapo styles={"scale-110 z-10"} src={"./BodyColors/bodyCalipso.png"} />
                    <Vapo styles={"scale-100 z-0"} src={"./BodyColors/bodyBlack.png"} />
                </div>
                <h2 className="font-black text-7xl bg-gradient-to-r drop-shadow-[0px_10px_3px_rgba(0,0,0,0.5)] from-red-700  via-cyan-900 to-purple-700">CHOOSE YOUR COLOR</h2>

                <div className={`${!active && "hidden"} z-30 w-full min-h-full  md:py-10 flex flex-col justify-center items-center fixed  bg-[rgba(0,0,0,0.5)] backdrop-blur-[9px]`}>
                    {
                        active &&
                        <VapoCard />
                    }
                </div>

            </section>
        </>

    )
}