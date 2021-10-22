import React from 'react';
import Tak from '../tak.mp3';

function Body() {
    const tak = new Audio(Tak);
    const handleOnLeave = () => {
        document.title = "Aditya Yadav";
    }
    return (
        <div id="particles-js">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="big text">Aditya Yadav</h1>
                <hr className="hr" />
                <div className="text-center icon">
                    <a onMouseEnter={() => {document.title = "Github"; tak.play();}} onMouseLeave={handleOnLeave} href="https://github.com/dedomil" target="_blank" rel="noreferrer" ><i className="icon bi bi-github mx-3"></i></a>
                    <a onMouseEnter={() => {document.title = "Instagram"; tak.play();}} onMouseLeave={handleOnLeave} href="https://instagram.com/codewithaadi" target="_blank" rel="noreferrer" ><i className="icon bi bi-instagram mx-3"></i></a>
                    <a onMouseEnter={() => {document.title = "Youtube"; tak.play();}} onMouseLeave={handleOnLeave} href="https://www.youtube.com/channel/UCb2cVlV_Ma7IIErZdYNNRKw" target="_blank" rel="noreferrer" ><i className="icon bi bi-youtube mx-3"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Body
