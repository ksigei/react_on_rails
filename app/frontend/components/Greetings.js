import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getGreeting} from ".././redux/actions";

export default function Greeting() {
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greetingreducer.greeting);

    useEffect(() => {
        dispatch(getGreeting());
    }, [dispatch]);

    return (
        <div>
            <h1>{greeting.message}</h1>
        </div>
    );
}
