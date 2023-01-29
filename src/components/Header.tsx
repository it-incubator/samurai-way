import React from 'react';

type HeaderPropsType = {
    value: boolean
}

const Header = (props: HeaderPropsType) => {
    console.log("Header rendered")
    return <div className='header'>
        <a href="#s"> Home </a>
        <a href="#s"> News </a>
        <a href="#s"> Feed </a>
        <a href="#s"> Messages </a>
    </div>
}

export default Header;