import { useState } from "react"
import Vapo from "./components/Vapo"
import VapoCard from "./components/VapoCard"

export default function VapoSection() {

    const [active, setActive] = useState(false)
    const handleActive = (e) => {
        console.log(e)

        if (e.target.name == "btnCloseCard") {
            setActive(false)
        }
        else {
            setActive(true)
        }

    }
    return (
        <>
            <section name="mainVapoSection" className="flex flex-col gap-20"
                onClick={e => handleActive(e)}
            >
                <h3 className="py-10 text-white font-black text-7xl bg-gradient-to-r drop-shadow-[0px_10px_3px_rgba(0,0,0,0.5)] from-red-700  via-cyan-900 to-purple-700">NEXPOD STICK VAPE</h3>
                <div role="button" className="flex mx-auto justify-center items-center group/vapos ">
                    <Vapo styles={"scale-100 z-0"} src={"./BodyColors/bodyRed.png"} />
                    <Vapo styles={"scale-110 z-10"} src={"./BodyColors/bodyPurple.png"} />
                    <Vapo styles={"scale-125 z-20"} src={"./BodyColors/bodyBlue.png"} />
                    <Vapo styles={"scale-110 z-10"} src={"./BodyColors/bodyCalipso.png"} />
                    <Vapo styles={"scale-100 z-0"} src={"./BodyColors/bodyBlack.png"} />
                </div>
                <h2 className="font-black text-7xl bg-gradient-to-r drop-shadow-[0px_10px_3px_rgba(0,0,0,0.5)] from-red-700  via-cyan-900 to-purple-700">CHOOSE YOUR COLOR</h2>
                {
                    active &&
                    <VapoCard handleActive={handleActive} />
                }
            </section>
        </>

    )
}