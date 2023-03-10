import React from 'react'
import "./App.css"
export default function App() {
  const name="Hello World"
  const obj={message: "WellCome to Expertizo"}
  const data = ['We', 'are', 'United']
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
   const complex = [{company: 'XYZ', jobs: ['JavaScript', 'React']}, {company: 'ABC', jobs: ['Angular' ,'Ionic']}]
  return (
      <div className='App'>
          <h1>Task 1</h1>
          <p>{name}</p>
<h1>Task 2</h1>
         <p> {obj.message}</p>
   <h1>Task 3</h1>
{data.map((value)=>{
  return<p>{value}</p>
})}
<h1>Task 4</h1>
{list.map((item,index)=>{
  return(
    <div> {item.name}</div>
    )
})}
<h1>Task 5</h1>
  <table>
    <tr>
    <th>company</th>
    <th>jobs</th>
    <td></td>
    </tr>
    {complex.map((item)=>{
      return<tr>
        <td>{item.company}</td>
        <td>{item.jobs[0]},{item.jobs[1]}</td>
        
      </tr>
    })}
  </table>
</div> 
      
    
  )
}