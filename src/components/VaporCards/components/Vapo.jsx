export default function Vapo({ styles, src }) {
    return (
        <div className={`${styles} duration-700 group-hover/vapos:mx-3 relative flex justify-center group/vapo `}>
            <img className={`w-[50px] absolute duration-300  group-hover/vapo:-translate-y-[5%]`} src="/top.png" alt="" />
            <img className="w-[50px] absolute" src={src} alt="" />
            <img className="w-[50px]" src="/bodyfull.png" alt="" />

        </div>
    )
}