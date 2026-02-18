
/*import Login ,{Profile,Setting,Userkey}from "./UserComponent";
function App(){
    return (
        <div>
            <h1>Exporting  and Importing Component</h1>
            <Login></Login>
            <Profile></Profile>
            <Setting></Setting>
            <h1>{Userkey}</h1>

        </div>

    )
}



 



export default App;


function App(){
    const userName = "sweety";
    let X =10;
    let Y =20;
    function Fruit(){
        return "Mango";
    }
    function Vegetable(){
        return "Carrot";
    }
    function Add(X,Y){
        return X + Y;
    }

    function operation(a,b,op){
        if(op === "add"){
            return Add(a,b);
        }else if(op === "multiply"){
            return a * b;
        }
        else{
            return "Invalid operation";
        }
    }

    /*return (
        <div>
            <h1>{userName}</h1>
            <h1>{X + Y}</h1>
            <h1>{X * Y}</h1>
        </div>
    )*/

       /* return(
            <div>
                <h1>JSX with curly braces</h1>
                <h1>{userName}</h1>
                <h1>{X + Y}</h1>
                <h1>{X * Y}</h1>
                <h1>{Fruit()}</h1>
                <h1>{Vegetable()}</h1>
                <h1>{Add(X,Y)}</h1>
                <h1>{operation(X,Y,"add")}</h1>
                <h1>{operation(X,Y,"multiply")}</h1>
                <h1>{operation(X,Y,"divide")}</h1>
            </div>
        )
}
export default App;*/

import { useState } from "react";
import Counter from "./Counter";

function App() {
    const [Fruit, setFruit] = useState("Mango");

    const handleFruitChange = () => {
        setFruit("Banana");
    };

    
    

    return (
        <div>
            <h1>state in React</h1>
            <h1>{Fruit}</h1>
            <button onClick={handleFruitChange}>Change Fruit</button>
            <Counter></Counter>
        </div>
    );
}
export default App;





