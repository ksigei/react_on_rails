import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../redux/actions";

export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingreducer.greeting);

  return (
    <div>
      <h1>{greeting.message}</h1>
      <button onClick={() => dispatch(getGreeting())}>Get Greeting</button>
    </div>
  );
}
