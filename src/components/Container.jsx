import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
const Container = () => {
  const [list, setList] = useState([]); 
  
  const handleAddItem = addItem => {
    setList([...list, addItem]); 
  };
  return (
   /*  <div className="div1">  
      <FormTodo handleAddItem={handleAddItem} />      
      <TaskList list={list} setList={setList} />
    </div>, */

    <div className="div">
      <div>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>
    </div>
  );
};
export default Container;

