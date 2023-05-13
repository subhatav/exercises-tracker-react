import { useState } from "react";

import GoalsList from "./components/Goals/List/GoalsList";
import GoalInput from "./components/Goals/Input/GoalInput";

import "./App.css";

const App = () => {
  const [goals, setGoals] = useState([
    { id: "g1", text: "Do all exercises!" },
    { id: "g2", text: "Finish the course!" },
  ]);

  const addGoalHandler = (enteredText) => {
    setGoals((previousGoals) => {
      const updatedGoals = [...previousGoals];

      updatedGoals.unshift({ id: Math.random().toString(), text: enteredText });

      return updatedGoals;
    });
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((previousGoals) =>
      previousGoals.filter((goal) => goal.id !== goalId)
    );
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe, add one?</p>
  );

  if (goals.length > 0) {
    content = <GoalsList items={goals} onDeleteItem={deleteGoalHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
