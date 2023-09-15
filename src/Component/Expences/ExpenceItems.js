import { useState } from "react"
import ExpenceItem from "./ExpenceItem"
import Card from "./Card"
import ExpenceFilter from "./ExpencesFilter"
export default function ExpenceItems({ expenses }) {
    // console.log(expenses.length);
    const [filterYear, setFilterYear] = useState("2020")
    function getFilterValue(filterVal) {
        setFilterYear(filterVal)
        console.log(filterVal);
    }
    return (
        <>
            <div className=" flex justify-center">
                <Card>
                    <ExpenceFilter onFilterValue={getFilterValue} defaultYear={filterYear} />
                    {expenses.map((expens)=>{
                        return(<ExpenceItem key={expens.id} date={expens.date} title={expens.title} amount={expens.amount} />)
                    })}
                    {/* <ExpenceItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
                    <ExpenceItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
                    <ExpenceItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} /> */}
                </Card>
            </div>
        </>
    )
}