import React from 'react';

function Body() {
    const handleOnLeave = () => {
        document.title = "Aditya Yadav";
    }
    return (
        <div id="particles-js">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="big text text-center text-wrap">Aditya Yadav</h1>
                <hr className="hr" />
                <div className="text-center icon">
                    <a onMouseEnter={() => { document.title = "Github!"; }} onMouseLeave={handleOnLeave} href="https://github.com/dedomil" target="_blank" rel="noreferrer" ><i className="icon bi bi-github mx-3"></i></a>
                    <a onMouseEnter={() => { document.title = "Instagram!"; }} onMouseLeave={handleOnLeave} href="https://instagram.com/codewithaadi" target="_blank" rel="noreferrer" ><i className="icon bi bi-instagram mx-3"></i></a>
                    <a onMouseEnter={() => { document.title = "Twitter!"; }} onMouseLeave={handleOnLeave} href="https://twitter.com/CodeWithAadi" target="_blank" rel="noreferrer" ><i className="icon bi bi-twitter mx-3"></i></a>
                    <a onMouseEnter={() => { document.title = "Mail Me! :)"; }} onMouseLeave={handleOnLeave} href="mailto:aditya@aditya.is-a.dev" target="_blank" rel="noreferrer" ><i className="icon bi bi-envelope-fill mx-3"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Body
