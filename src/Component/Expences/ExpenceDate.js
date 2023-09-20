export default function ExpenceDate(props) {
    const month = new Date(props.date).toLocaleString('en-US', { month: 'long' })
    const day = new Date(props.date).toLocaleString('en-US', { day: '2-digit' })
    const year = new Date(props.date).getFullYear();
    return (
        <div className="rounded border-2 border-white p-2 w-24  text-center bg-dateColor text-white">
            <div className="font-bold">
                {month}
            </div>
            <div>
                {day}
            </div>
            <div className="font-bold">
                {year}
            </div>
        </div>
    )
}