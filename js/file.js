function PropDrilling() {
    const [count] = useState(0);
    return <Child count={count} />
}

function Child({ count }) {
    return <GrandChild count={count} />
}

function GrandChild({ count }) {
    return <div>{count}</div>
}