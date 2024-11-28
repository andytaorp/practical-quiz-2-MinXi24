import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const handleInputChange = (e) => {
    setHabitName(e.target.value);
  }
  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (!habitName.trim()) return; 
  
    const newHabit ={
      habitName,
      completed: false,
    };
    onAddHabit(newHabit);
    setHabitName("");
  };

 
  return (
    //TODO: add a form to add a new habit
    <form className="add-form" onSubmit={handleSubmit}>
    <input 
    type ="text"
    placeholder="New Habit"
    name="habitName"
    id="habitName"
    value={habitName}
    onChange={handleInputChange}
    />
    <button type="submit">Add Habit</button>
    </form>
  );
}