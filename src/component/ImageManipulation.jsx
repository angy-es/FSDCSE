import React from 'react'


function ImageManipulation() {
    const[height, setHeight] = React.useState(300);
    const[width, setWidth] = React.useState(300);
    const[red, setRed] = React.useState(10);
    const[green, setGreen] = React.useState(0);
    const[blue, setBlue] = React.useState(50);
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
  return (
    <div>
        <h2 style={{ color: "white", backgroundColor: "red" }}>Image Manipulation using react</h2>
        <div style={{
            
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            padding: "10px",
            margin: "10px auto ",
            width: "300px",
            height: "300px",
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}>
            <img src="https://img.freepik.com/premium-photo/cute-ginger-cat-sitting-looking-camera-isolated-white-background_270100-2630.jpg?w=2000" alt="Profile" width={width} height={height} style={{ borderRadius: "50%" , }} />

        </div>
        <div>
            <button onClick={enhanceHeight}>EnhanceHeight</button>
            <button onClick={enhanceWidth}>EnhanceWidth</button>
            <br></br>
            <button onClick={reduceHeight}>ReduceHeight</button>
            <button onClick={reduceWidth}>ReduceWidth</button>
        </div>
        <div>
            <h2>Height: {height}</h2>
            <h2>Width: {width}</h2>
        </div>
        
        
    </div>
  )
}
export default ImageManipulation