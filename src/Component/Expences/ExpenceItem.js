import ExpenceDate from "./ExpenceDate";
export default function ExpenceItem(props) {
    return (
        <>
            <div className="flex justify-center ">
                <div className="flex items-center bg-mainColor p-3 w-full max-w-screen-md rounded-lg shadow-lg my-3">
                    <ExpenceDate date={props.date} />
                    <div className="text-white text-start flex-1 ps-5 text-xl font-bold">
                        {props.title}
                    </div>
                    <div className="text-white font-bold bg-purple-800 p-3 text-md border-2 border-white rounded-xl">${props.amount}</div>
                </div>
            </div>
        </>
    )
}