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
      <p>Lunes</p>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>
      <div>
      <p>Martes</p>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>
      <div>
      <p>Miercoles</p>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>
      <div>
      <p>Jueves</p>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>
      <div>
      <p>Viernes</p>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>
      <div>
      <p>Sabado</p>
      <FormTodo handleAddItem={handleAddItem} />    
      <TaskList list={list} setList={setList} />
      </div>      
    </div>
  );
};
export default Container;

