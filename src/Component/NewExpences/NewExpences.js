import ExpenceForm from "./ExpenceForm"
export default function NewExpences({sendNewExpencesVal}) {
    function getNewExpencesVal(val){

        // console.log({...val,summ:"hi"});
        sendNewExpencesVal(val);
        
    }
    return (
        <>
            <div className="bg-[#a892ee] p-4 mx-auto max-w-3xl rounded-xl text-center shadow-md">
                <ExpenceForm getNewExpences={getNewExpencesVal}/>
            </div>
        </>
    )
}