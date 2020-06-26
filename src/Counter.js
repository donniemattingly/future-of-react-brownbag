import * as React from 'react';

export function Counter(props) {
    let count = 0;

    function incrementCount() {
        count = count + 1;
        console.log(count);
    }

    return (
        <div>
            <h1> My Counter </h1>
            <p> {count} </p>
            <button onClick={() => incrementCount()}>
                Count!
            </button>
        </div>
    )
}

export class CounterWithState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0, isCounting: false};
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
    }

    startCounting() {
        const timerId = setInterval(() => this.incrementCount(), 1000);
        this.setState({
            ...this.state,
            isCounting: true,
            timerId: timerId
        })
    }

    stopCounting() {
        clearInterval(this.state.timerId);
        this.setState({
            ...this.state,
            isCounting: false,
            timerId: null
        })
    }

    componentDidMount() {
        document.title = `Count is: ${this.state.count}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            document.title = `Count is: ${this.state.count}`;
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    render() {
        return (
            <div>
                <h1> My Counter </h1>
                <p> {this.state.count} </p>
                {this.state.isCounting ?
                    <button onClick={() => this.stopCounting()}>
                        Stop Counting!
                    </button>
                    : <button onClick={() => this.startCounting()}>
                        Start Counting!
                    </button>
                }
            </div>
        )
    }
}