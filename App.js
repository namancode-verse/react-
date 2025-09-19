

const root=ReactDOM.createRoot(document.getElementById("root"));

const heading =React.createElement("h1",
                {id:"heading",
                 xyz:"abc"   
                },
                "hello world from react");
console.log(heading); //returns object

//nested div
/*
<div id="parent">
    <div id="child">
        <h1 id="2nd child">
            i am last child
        </h1>
    </div>

</div> 
*/

const parent=React.createElement("div",
                            {id:"parent"},
                            React.createElement("div",{id:"child"},
                                React.createElement("h1",{id:"2nd child"},"i am last child")
                            ))

root.render(parent);

//siblings
const siblings=React.createElement("div",
                            {id:"parent"},
                            [React.createElement("h1",{id:"child"},"i am 1st child"),
                                React.createElement("h1",{id:"child"},"i am 2nd child")]
                            );
root.render(siblings);

//multiple childrens 

/*
<div id="child 1">
    <div id="child">
        <h1 id="2nd child">
            i am last child
        </h1>
    </div>

</div> 
<div id="child 2">
    <div id="child">
        <h1 id="2nd child">
            i am last child
        </h1>
    </div>

</div> 
*/
const manyChilds=React.createElement("div",
                            {id:"parent"},
                            //child 1
                            [
                                React.createElement("h1",{id:"child"},
                            [React.createElement("h1",{id:"child"},"i am 1st child"),
                                React.createElement("h1",{id:"child"},"i am 2nd child")
                            ]),
                            //child 2
                            React.createElement("h1",{id:"child"},
                            [React.createElement("h1",{id:"child"},"i am 1st child"),
                                React.createElement("h1",{id:"child"},"i am 2nd child")
                            ])
                            ]  
                        );

root.render(manyChilds);
                            
