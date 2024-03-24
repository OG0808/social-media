import { Card, CardDescription, CardTitle } from "../ui/card"
import {Data} from "../../utils/Data"


interface Cards{
    icon:string,
    title: string,
    value: number,
    percentage: number,
}

const Overview = () => {


  return (
   <section className=" flex flex-col items-start gap-5  ">
    <div className="px-[73px] mt-5 ">
    <h2 className="text-[#63687e] dark:text-white text-2xl font-bold ">Overview - Today</h2>
    </div>
    <article className="flex flex-wrap gap-8 justify-center ">

 {
     
     Data.map((data:Cards)=>((
         <Card  className="dark:bg-[#252b43] bg-[#f0f3fa] hover:bg-[#e1e3f0] 
         transition cursor-pointer rounded-md
         w-[300px] h-28 justify-center p-7 flex flex-col gap-4">
 
        <div className="flex justify-between flex-1">
            <CardTitle className=" dark:text-white text-lg text-[#63687e]">{data.title}</CardTitle>
          <img src={data.icon} alt="" className="object-cover h-6"/>
        </div>

        <CardDescription className="flex justify-between">
            <p className="text-xl  dark:text-white font-bold text-black">{data.value}</p>
            {
                data.percentage > 20 ?   <span className="text-[10px]
                flex items-center font-semibold text-green-500"><i className='bx  bxs-up-arrow '></i> 
                {data.percentage}%</span> :   <span className="text-[10px]
            flex items-center font-semibold text-red-500"><i className='bx  bxs-down-arrow '></i> 
            {data.percentage}%</span>
            }
          
        </CardDescription>
    </Card>
)))

}
</article>
   </section>
  )
}

export default Overview