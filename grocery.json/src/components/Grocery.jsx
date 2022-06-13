import React from "react";

const GroceryInput = () => {
    return 
    <>
    <input type="text" placeholder "Enter Items" onChange={()=>{}}/>
    <button onClick={() => {}) Add Items to list </button>
    
    </>
}

const GroceryList = ({data}) => {
    return 
    <>
    grocery list
    </>
}


const Grocery = () => {  
    const[data,setData] = React.useState([])

    return (
        <>
        <GroceryInput/>
        <GroceryList data = {data}/>
        </>
    );
};

export default function Grocery() {
    return <Grocery/>;
}