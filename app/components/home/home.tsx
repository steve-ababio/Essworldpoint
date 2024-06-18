import Navbar from "../navbar/navbar";


export default function Home(){
    return (
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-image">
            <Navbar />
            <div className="h-[calc(100%-80px)] flex-col-center gap-y-8 text-white">
                <div className="flex-col-center">
                    <h2 className="text-[4rem] text-center w-fit max-w-[60rem] whitespace-pre-wrap uppercase font-bold">Transform Your Crew Management</h2>
                    <h3 className="text-[1.3rem] font-medium">Expert guidance for your business's CM needs</h3>
                </div>
                <button
                    className="
                        bg-white py-3 px-10 rounded-[5px] text-slate-900
                        font-bold duration-300 hover:opacity-70 text-[16px]"
                >
                    Learn more
                </button>
            </div>
            
        </div>
    )
}