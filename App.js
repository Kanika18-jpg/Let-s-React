 import React from 'react';
 import ReactDOM from 'react-dom/client';
 // const heading = React.createElement("h1",{},"Jai Shree Mahakaal,Jai Mata Harsidhi g");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);
        // console.log(heading);       //heading is an object. React.createElement returns an object
        
        //nested elements
        
        const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1",{},"Jai Shree Mahakaal,Jai Mata Harsidhi g"),React.createElement("h2",{},"Pooore shiv parivaar ko mera haath jodkr pranaam")]));
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        // when you want to have sibblings, then add them in an array
