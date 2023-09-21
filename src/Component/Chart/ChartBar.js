export default function ChartBar({ lable, value ,maxVal, }) {
    let percentageChart="0%"
    if (maxVal>0) {
        percentageChart=Math.round((value/maxVal)*100) + "%"
    }
    return (
        <div className="h-full flex flex-col items-center">
            <div className="h-full w-5 border border-solid border-[#313131] rounded-xl bg-[#c3b4f3] truncate flex flex-col justify-end">
                <div className="bg-[#4826b9] w-full transition-all duration-[3000ms] ease-out" style={{height:percentageChart}}></div>
            </div>
            <div className="font-bold text-xs text-center">{lable}</div>
        </div>

    )
}
