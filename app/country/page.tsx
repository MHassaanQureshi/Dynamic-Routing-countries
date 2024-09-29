import Link from "next/link"
export default function Country(){
    return(
        <>
        <div className="flex justify-center">
        <div className="flex flex-row items-center justify-evenly bg-black text-white p-2 m-1 rounded w-80">
       <Link href="/country/pakistan">Pakistan</Link>
       <Link href="/country/india">india</Link>
       <Link href="/country/china">china</Link>
       </div>
        </div>
       
        
        </>
    )
}