import logo from './logo.svg';
import './App.css';
import React from "react";


const GroceryList = ({data}) => {
  console.log(data)
  return 
  <>
  {data.map((item) =><h1>{item.title}</h1> )}
  </>
};

const GroceryInput = () => {
  const [title,setTitle] = React.useState()
  return <>
  <input type="text" placeholder="Add grocery" value={title} onChange={(event) => setTitle(event.target.value)}/>
  <button onClick={()=>{ handleAdd(title); setTitle("");}}> Add to the list </button>
  </>
}

const Grocery = () => {  
  const [data,setData] = React.useState([]);
  const handleAdd = (title) => {
    const GroceryItem = {
      title: title
    };
  

  setData([...data,GroceryItem]);
  };


  return (
      <>
      <GroceryInput/>
      <GroceryList data = {data}/>
      </>
  );
};

export default function App() {
  return <Grocery />;
}
