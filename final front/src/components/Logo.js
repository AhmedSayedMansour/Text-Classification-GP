import React from 'react'

function Logo() {
    return (
        <div>
            <h1 style={logoStylesPart1}><span style={logoStylesPart2}>TEXT</span> CLASSIFICATION</h1>
        </div>
    )
}
const logoStylesPart1 = {
    color: '#f0a500',
    fontFamily: 'lemonReg',
    marginBottom: '2.5%',
    marginTop: '2.5%',
    fontSize: '3.75rem'
    
    
}
const logoStylesPart2 = {
    color: '#1a1c20',
    fontFamily: 'lemonRegItalic',
    
}

export default Logo;