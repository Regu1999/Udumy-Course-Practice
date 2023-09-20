export default function ChartBar(){
    return(
       <div className="h-full flex flex-col items-center">
        <div className="h-full w-full border border-solid border-[#313131] rounded-xl bg-[#c3b4f3] truncate flex flex-col justify-end">
            <div className="bg-[#4826b9] w-full transition-all duration-[3000ms] ease-out"></div>
        </div>
        <div className="font-bold text-sm text-center">
            Jan
        </div>
       </div>
    )
}
