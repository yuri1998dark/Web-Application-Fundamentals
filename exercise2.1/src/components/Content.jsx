import { Part } from "./Part";

export const Content = ({ course }) => {
  const { parts } = course;

  
  const total = parts.reduce((accumulator, {exercises}) => {
   return accumulator + exercises
},0)




  return (
    <div>
      <ul>
        {parts.map((parts) => (
          <Part key={parts.id} exercises={parts.exercises} name={parts.name} />
        ))}
      </ul>
      <h1> total of {total} exercises</h1>
    </div>
  );
};
