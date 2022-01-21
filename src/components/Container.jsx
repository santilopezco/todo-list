import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
const Container = () => {
  const [list, setList] = useState([]); // (B-1)
  // (A-2)
  const handleAddItem = addItem => {
    setList([...list, addItem]); // (B-2)
  };
  return (
    <div className="div">      
      <FormTodo handleAddItem={handleAddItem} />      
      <TaskList list={list} setList={setList} />
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
    </div>
  );
};
export default Container;

