export default function VapoColors() {
    return (
        <div className="text-[20px]">
            <h3 className="text-left mb-5">
                choose your color :
            </h3>
            <div className="flex gap-2">
                <div className="w-8 h-8 bg-white     rounded-full" />
                <div className="w-8 h-8 bg-red-700   rounded-full" />
                <div className="w-8 h-8 bg-blue-600  rounded-full" />
                <div className="w-8 h-8 bg-black     rounded-full" />
                <div className="w-8 h-8 bg-green-500 rounded-full" />
            </div>

        </div>
    )
}