export default function ExpenceFilter(props) {
    function changeYearValue(e) {
        props.onFilterValue(e.target.value);
    }
    return (
        <>
            <div className='text-white py-0 px-4'>
                <div className='flex w-full items-center justify-between my-4 mx-0'>
                    <label className="font-bold mb-2">Filter by year</label>
                    <select className="py-2 px-12 font-bold rounded-md text-black" onChange={changeYearValue} value={props.defaultYear}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </select>
                </div>
            </div>
        </>
    )
}
