import React from 'react';

const HeaderCounter = () => {
    // trong function ko co method render
    console.log('HeaderCounter render');
    return (
        <h1> App counter </h1>
    )
}
// memo : giup kiem soat viec render lai component
export default React.memo(HeaderCounter);