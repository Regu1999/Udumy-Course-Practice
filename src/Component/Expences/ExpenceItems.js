import { useState } from "react"
import ExpenceItem from "./ExpenceItem"
import Card from "./Card"
import ExpenceFilter from "./ExpencesFilter"
export default function ExpenceItems({ expenses }) {
    
    const [filterYear, setFilterYear] = useState("2020")
    function getFilterValue(filterVal) {
        setFilterYear(filterVal)
    }

    const newFillterVal=expenses.filter(expens => {
        return new Date(expens.date).getFullYear() == filterYear
    })

    return (
        <>
            <div className=" flex justify-center">
                <Card>
                    <ExpenceFilter onFilterValue={getFilterValue} defaultYear={filterYear} expenses={expenses}/>
                    {newFillterVal.length==0 ?<h1 className="text-white font-bold text-center uppercase">no expences found</h1> : newFillterVal.map((expens) => {
                        return (
                            <ExpenceItem key={expens.id} date={expens.date} title={expens.title} amount={expens.amount} />
                        )
                    }) 
                    }
                </Card>
            </div>
        </>
    )
}