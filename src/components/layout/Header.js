import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Header - Todo List</h1>
            <Link style={linkStyle} to = '/'>Home</Link> |
            <Link style={linkStyle} to = '/About'>About</Link>
        </header>

        )
}
const linkStyle = {
    background: '#333',
    color:'#fff',
    textAlign:'center'
}

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign:'center'
}
export default Header;