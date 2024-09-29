import Link from "next/link"
export default function Navbar(){
    return(
        <>
        <div className="bg-black text-white p-3 flex justify-around text-lg w-100 align-middle" >
          <h1 className="text-xl">Class-4</h1>
        <ul className="flex flex-row gap-12">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/aboutus">About us </Link></li>
          <li><Link href="/contactus">Contact us</Link></li>
          <li><Link href="/country">Country</Link></li>
        </ul>
      
        </div>
        
        </>
    )
}