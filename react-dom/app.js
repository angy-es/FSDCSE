const container = document.getElementById("container");

const root = ReactDOM.createRoot(container);

const h2 = React.createElement(
    'h2',
    {style:{color:'red'}},
    "welcome to react.js"
);
const h1=React.createElement('h1',{},"working on react.js");

const img=React.createElement('img',{src:'logo1.png',style:{height:'100',width:'100'}});
const div=React.createElement('div',{},img,h1,h2);


root.render(div);