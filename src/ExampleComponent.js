import * as React from 'react';

export function ExampleComponent(props){
    return (
        <div>
            <h1> A Heading </h1>
            <p> {props.text} </p>
        </div>
    )
}