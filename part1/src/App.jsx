import { useState } from "react";
import { ComplexState } from "./components/ComplexState";
import { Arrays } from "./components/Arrays";




const Hello = ({ age, name }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };
  return (
    <div>
      <p>
        Hello {name},you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
// Generando los componentes en otros mas pequenos

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

export const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("Hello from component");
  const friends = ["Peter", "Maya"];
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Peter";
  const age = 10;
  console.log(now, a + b);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  return (
    <div>
      <p>Hello world,its is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <div>Greetings</div>
      <Hello name="George" age={26 + 10} />
      <Hello name={name} age={age} />
      <p>
        {" "}
        {friends[0]} {friends[1]}{" "}
      </p>
      <div>{counter}</div>

      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="reset" />
      <ComplexState/>
      <Arrays/>
    </div>
  );
};

export default App;
