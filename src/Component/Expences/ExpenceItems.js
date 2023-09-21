import { useState } from "react"
import ExpenceItem from "./ExpenceItem"
import Card from "./Card"
import ExpenceFilter from "./ExpencesFilter"
import ExpencesChart from "./ExpencesChart"
export default function ExpenceItems({ expenses }) {
    let yearsArray=expenses.map(expense=> new Date(expense.date).getFullYear())
    const [filterYear, setFilterYear] = useState(yearsArray[0]);
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
                    <ExpencesChart expenceValue={newFillterVal} />
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