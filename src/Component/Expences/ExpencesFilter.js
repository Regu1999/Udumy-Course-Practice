export default function ExpenceFilter(props) {
    let filterYears = []
    function changeYearValue(e) {
        props.onFilterValue(e.target.value);
    }
    props.expenses.map(expence => {
        if (!filterYears.includes(new Date(expence.date).getFullYear())) {
            filterYears.push(new Date(expence.date).getFullYear())
        }
    })
    return (
        <>
            <div className='text-white py-0 px-4'>
                <div className='flex w-full items-center justify-between my-4 mx-0'>
                    <label className="font-bold mb-2">Filter by year</label>
                    <select className="py-2 px-12 font-bold rounded-md text-black" onChange={changeYearValue} value={props.defaultYear}>
                        {
                            filterYears.map(filterYear => {
                                return <option key={filterYear} value={filterYear}>{filterYear}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </>
    )
}
