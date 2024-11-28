/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit,onDeleteHabit,onToggleHabit}) {
  const habitStyle = habit.completed ? {textDecoration:"line-through"} : null;
  return (
    <li style ={habitStyle}>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)}
        />
      {habit.habitName}
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}