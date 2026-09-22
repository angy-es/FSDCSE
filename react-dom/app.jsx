const container = document.getElementById("container");

const root = ReactDOM.createRoot(container);

//const h2 = React.createElement(
    //'h2',
    //{style:{color:'red'}},
   // "welcome to react.js"
//);
//const h1=React.createElement('h1',{},"working on react.js");

//const img=React.createElement('img',{src:'logo1.png',style:{height:'100',width:'100'}});
//const h3=<h3>"hello"</h3>
//const div=React.createElement('div',{},img,h1,h2,h3);
//<h2>"Esha Sarswat"</h2>
   // <p>"Computer Science and Engineering"</p>
    //<hr/>
   // <h2>"Education"</h2>
   // <p>"ABES Engineering College"</p>
const h1=<h1>"welcome to react"</h1>
const img=<img src=" logo1.png" height={'200'} width={'200'}></img>
const div=<div>{h1}{img}</div>;
const h3=<h3>"RESUME BUILDER</h3>
const div1=
<>

<div style={{border:'2px solid red',height:'100',width:'50'}}>
    {h3}
    
   
    
    

    
     <table
      border="1"
      cellPadding="10"
      style={{
        borderCollapse: 'collapse',
        width: '600px',
        margin: 'auto'
      }}
    >
        <tbody>

        <tr>
          <td rowSpan="4">
            <img
              src="logo1.png"
              height="150"
              width="150"
              alt="Profile"
            />
          </td>
          <td><b>Name</b></td>
          <td>Esha Sarswat</td>
        </tr>

        <tr>
          <td><b>Email</b></td>
          <td>esha@example.com</td>
        </tr>
        </tbody>
    </table>

    </div>
</>
root.render(div);



root.render(div1);