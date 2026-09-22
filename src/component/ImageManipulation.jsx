import React from 'react'
import cat from '../assets/cat.png'

function ImageManipulation() {
    const [height, setHeight] = React.useState(300);
    const [width, setWidth] = React.useState(300);
    const [red, setRed] = React.useState(0);
    const [green, setGreen] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    const [angle, setAngle] = React.useState(0);
    const [marginLeft, setMarginLeft] = React.useState(0);
    const [marginRight, setMarginRight] = React.useState(0);


    function enhanceHeight() {
        setHeight(height + 50);
    }

    function enhanceWidth() {
        setWidth(width + 50);
    }

    function reduceHeight() {
        setHeight(height - 50);
    }

    function reduceWidth() {
        setWidth(width - 50);
    }

    function changeBGcolor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }

    function rotateimage() {
        setAngle(angle + 45);
    }
    function marginleft() {
    setMarginLeft(marginLeft - 45);
}

    function marginright() {
    setMarginRight(marginRight + 45);
}

    return (
        <div>
            <h2 style={{ color: "white", backgroundColor: "red" }}>
                Image Manipulation using react
            </h2>
             

            <div style={{
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
                padding: "10px",
                margin: "10px auto",
                width: "300px",
                height: "300px",
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                marginLeft: `${marginLeft}px`,
                 marginRight: `${marginRight}px`
                
    

            }}>
                

                <img
                    src={cat}
                    alt="Profile"
                    width={width}
                    height={height}
                    style={{

                        borderRadius: "50%",
                        transform: `rotate(${angle}deg)`
                    }}
                />

            </div>
            

            <div>
                <button onClick={enhanceHeight}>EnhanceHeight</button>
                <button onClick={enhanceWidth}>EnhanceWidth</button>
                <br />

                <button onClick={reduceHeight}>ReduceHeight</button>
                <button onClick={reduceWidth}>ReduceWidth</button>
                <br />

                <button onClick={changeBGcolor}>changeBGcolor</button>
                <br />

                <button onClick={rotateimage}>rotateimage</button>
                <br></br>
                <button onClick={marginleft}>marginleft</button>
                <button onClick={marginright}>marginright</button>
            </div>

            <div>
                <h2>Height: {height}</h2>
                <h2>Width: {width}</h2>
                <h2>Angle: {angle}</h2>
            </div>
        </div>
    )
}

export default ImageManipulation