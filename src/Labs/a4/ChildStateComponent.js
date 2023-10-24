function ChildStateComponent({counter, setCounter}) {
    return (
        <div>
            <h2>Counter {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}

export default ChildStateComponent;