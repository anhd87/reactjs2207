// hooks trong function component
// 1 - useState (tat ca cac hooks co tien to use dung dang truoc)
import React, { useState } from 'react';
import HeaderCounter from './components/Header';

const AppCounter = () => {
    // khai bao state va phuong thuc cap nhat state
    const [count, setCount] = useState(0); // 0: gia tri mac dinh cua state
    // count: state khai bao
    // setCount: ham de thay doi gia tri cua state
    // count va setCount dc xu ly boi useState

    const[color, setColor] = useState('blue'); //dinh nghia them state

    // viet ham de thay doi state
    const changeCounter = () => {
        setCount(count+1); // thay doi gia tri count len 2 don vi
        setColor('red'); // thay doi gia tri state color
    }

    return (
        <>
            <HeaderCounter/>
            <h3 style={{ color: color }}> {count} </h3>
            <button
                onClick={()=>changeCounter()}
            >+</button>
        </>
    )
}
export default React.memo(AppCounter);