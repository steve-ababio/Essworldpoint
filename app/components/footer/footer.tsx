import Link from "next/link";

export default function Footer(){
    return(
        <footer className="bg-[#181818] mt-14">
            <div className="text-center py-12">
                <Link href="/about" className="text-white block pb-4">OUR SERVICES</Link>
                <Link href="/about" className="text-white block pb-10">ABOUT US</Link>
                <h2 className="text-white px-5 md:px-0 text-balance">Copyright&copy; {new Date().getFullYear()} ESSWORLDPOINT - All rights reserved.</h2>
            </div>
        </footer>
    )
}