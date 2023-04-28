import React from 'react';
import uuid from 'react-uuid'
export default function Button({props}) {
    return (
        <li className='list-none pr-5' key={uuid()}>
        <button className='w-36 h-10 text-2xl text-white bg-black' >
            {props}
        </button>
        </li>
    );
}

