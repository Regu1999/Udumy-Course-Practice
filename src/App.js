import { useState, useEffect } from 'react';
import ExpenceItems from './Component/Expences/ExpenceItems'
import NewExpences from './Component/NewExpences/NewExpences';
import KeyConcept from './Component/reactKeyConcept/KeyConcept';

// const EXPENCES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];
function App() {
  const [expences, setExpences] = useState(JSON.parse(localStorage.getItem("EXPENCES")) || [])
  function addNewExpencesVal(val) {
    let newExpences = {
      ...val,
      id: val.date,
    }
    setExpences((prevState) => {
      return [
        ...prevState,
        newExpences
      ]
    })
  }
  useEffect(() => {
    localStorage.setItem("EXPENCES", JSON.stringify(expences))
  }, [expences])
  // console.log(expences);
  return (
    <>
      <div className='bg-violet-950 p-3'>
        <NewExpences sendNewExpencesVal={addNewExpencesVal} />
        <ExpenceItems expenses={expences} />
      </div>
      <KeyConcept />
    </>
  );
}

export default App;
