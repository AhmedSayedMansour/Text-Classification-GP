import React from 'react'

function Nav() {
    return (
        <div style={navStyles}>
            <h1 style={logoStylesPart1}><span style={logoStylesPart2}>DOCUMENT</span> CLASSIFICATION</h1>
        </div>
    )
}
const navStyles = {
    backgroundColor: '#1a1c20',
    display:'grid',
    alignSelf: 'start',
    justifyContent: 'center',
}
const logoStylesPart1 = {
    color: '#f4f4f4',
    fontFamily: 'lemonReg',
    marginBottom: '2.5%',
    marginTop: '2.5%',
    
}
const logoStylesPart2 = {
    color: '#f0a500',
    fontFamily: 'lemonRegItalic',
    
}

export default Nav;