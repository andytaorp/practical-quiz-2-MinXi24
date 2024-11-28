import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits((prevHabits) => [...prevHabits, habitName]);
  };

  const onToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((prevHabits) => 
    prevHabits.map((habit) =>
     habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const onDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <AddHabitForm onAddHabit={handleAddHabit} />
      {/*TODO: add a list of habits*/}
      <HabitList
        habits={habits}
        onToggleHabit={onToggleHabit}
        onDeleteHabit={onDeleteHabit}
      />
    </div>
  );
}

export default App;