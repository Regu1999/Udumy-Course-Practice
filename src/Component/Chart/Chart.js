import ChartBar from "./ChartBar";

export default function Chart({dataPoints}) {
    let dataPointVal=dataPoints.map(dataPoint=>dataPoint.value)
    let maxValue=Math.max(...dataPointVal)
    
    return (
        <div className="p-4 rounded-xl bg-[#f8dfff] text-center flex justify-around h-40">
            {
                dataPoints.map(dataPoint=>{
                    return <ChartBar value={dataPoint.value} maxVal={maxValue} lable={dataPoint.lable} key={dataPoint.lable}/>
                })
            }
            
        </div>
    )
}
