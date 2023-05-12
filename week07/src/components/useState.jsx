import React, { useState } from 'react';

export default function UseState() {
    let count = 0;
    console.log('🫡렌더링 되었습니다.')
    const [useCount, setUseCount] = useState(0);
    
    const increaseNumber = () => {
        count++;
        console.log(count)
    }
    
    const increaseState = () => {
        setUseCount((prev) => prev +=1)
        console.log(useCount)
    }
    return (
        <div>
            <br/>
            <div >
                count : {count}
            </div>
            <button onClick={increaseNumber}>increaseNumber</button>
            <br/>
            <br/>
            <div>
                countState : {useCount}
            </div>
            <button onClick={increaseState}>increaseState</button>
        </div>
    );
}

