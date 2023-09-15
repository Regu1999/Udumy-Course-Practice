import { useState } from "react"
export default function ExpenceForm({getNewExpences}) {
    // let expence={}
    const [newExpencesValue, setNewExpencesValue] = useState({
        title: '',
        amount: '',
        date: ''
    })
    function inputValueHandler(val, type) {
        if (type === 'title') {
            setNewExpencesValue(prevState => {
                return {
                    ...prevState,
                    title: val
                }
            })
        } else if (type === "amount") {
            setNewExpencesValue(prevState => {
                return {
                    ...prevState,
                    amount: val
                }
            })
        } else {
            let month=new Date(val).toLocaleString('en-US', {month:'long'})
            let day=new Date(val).toLocaleString('en-US', {day:'2-digit'})
            let fullYear=new Date(val).getFullYear()
            // console.log(val);
            setNewExpencesValue(prevState => {
                return {
                    ...prevState,
                    date: new Date(fullYear,month,day)
                }
            })
        }
        
    }
    function addExpences(event) {
        event.preventDefault()
        getNewExpences(newExpencesValue);
        setNewExpencesValue(prevState => {
            return {
                ...prevState,
                title: "",
                amount: "",
                date: ""
            }
        })
        
    }
    return (
        <>
            <form onSubmit={addExpences}>
                <div className="flex flex-wrap gap-4 mb-2 text-left">
                    <div>
                        <label className="block font-bold mb-2 ">Title</label>
                        <input className="p-2 rounded-md w-80 border-2 border-white max-w-full" type="text" onChange={event => inputValueHandler(event.target.value,"title")} value={newExpencesValue.title} />
                    </div>
                    <div>
                        <label className="block font-bold mb-2 ">Amount</label>
                        <input className="p-2 rounded-md w-80 border-2 border-white max-w-full" type="number" min="0.01" step="0.01" onChange={event => inputValueHandler(event.target.value,"amount")} value={newExpencesValue.amount} />
                    </div>
                    <div>
                        <label className="block font-bold mb-2 ">Date</label>
                        <input className="p-2 rounded-md w-80 border-2 border-white max-w-full" type="date" onChange={event => inputValueHandler(event.target.value,"date")} value={newExpencesValue.date} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="py-4 px-8 bg-[#40005d] text-white rounded-lg me-4" >Add Expence</button>
                </div>
            </form>
        </>
    )
}