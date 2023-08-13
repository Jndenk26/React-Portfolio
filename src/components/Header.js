import React from 'react';

function Header ({setName}) {
    return (
        <div>
            <h1>Header</h1>
            <button onClick={()=>setName('Portfolio')} >Portfolio</button>
        </div>
    )
}

export default Header;