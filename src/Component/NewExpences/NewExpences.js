import ExpenceForm from "./ExpenceForm"
import { useState } from "react";
export default function NewExpences({ sendNewExpencesVal }) {
    const [expenceStatus, setExpenceStatus] = useState(false)
    function getNewExpencesVal(val) {
        sendNewExpencesVal(val);
    }
    function closeForm() {
        return setExpenceStatus(false)
    }
    return (
        <>
            <div className="bg-[#a892ee] p-4 mx-auto max-w-3xl rounded-xl text-center shadow-md">
                {!expenceStatus && <button type="button" className="py-4 px-8 bg-[#40005d]  text-white rounded-lg me-4" onClick={() => setExpenceStatus(true)}>Add New Expence</button>}
                {expenceStatus && <ExpenceForm getNewExpences={getNewExpencesVal} closeForm={closeForm} />}
            </div>
        </>
    )
}