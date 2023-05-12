import React, { useMemo, useState } from 'react';

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [submitNumber, setSubmitNumber] = useState(0);
    let new_number = 0;

    const result = useMemo(
        () => {
            const res = computeExpensiveValue(submitNumber);
            console.log('렌더링됨!')
            return res
        },
        [submitNumber]
      );

    const printNumber = () => {
        console.log(new_number)
    }
    
    return (
        <div>
            <input type='text' onBlur={(e)=>{setNumber(parseInt(e.target.value)); e.target.value=''}} />
            UseMemo
            <button onClick={()=>{
                printNumber()
                setSubmitNumber(number)
                }}>button</button>
            {result}
        </div>
    );
}

const computeExpensiveValue = (number) => {
    for(let i = 0 ; i < 2000 ; i++){
        console.log('😀');
    }
    return number
}