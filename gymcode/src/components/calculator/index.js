import React from "react";

const Calculator = (props) => {
    const [inputState, setInputState] = React.useState({ num1: 0, num2: 0 });
    const [results, setResults] = React.useState(0);

    const handleInput = (e) => {
        let _name = e.target.name,
            _val = e.target.value;
        let _state = { ...inputState };
        _state[_name] = +_val;

        setInputState(_state);
    };

    const handleButton = (e) => {
        let _result = 0;
        switch (e) {
            case "add": {
                _result = inputState.num1 + inputState.num2;
                break;
            }
            case "minus": {
                _result = inputState.num1 - inputState.num2;
                break;
            }
            case "mul": {
                _result = inputState.num1 * inputState.num2;
                break;
            }
            case "divi": {
                _result = inputState.num1 / inputState.num2;
                break;
            }
        }
        setResults(_result);
    };
    return (
        <div>
            <input
                type="number"
                value={inputState.num1}
                name="num1"
                onChange={(e) => handleInput(e)}
            />
            <div></div>
            <input
                type="number"
                value={inputState.num2}
                name="num2"
                onChange={(e) => handleInput(e)}
            />
            <div>{results && results}</div>
            <button onClick={(e) => handleButton("add")}>+</button>
            <button onClick={(e) => handleButton("minus")}>-</button>
            <button onClick={(e) => handleButton("mul")}>*</button>
            <button onClick={(e) => handleButton("divi")}>:</button>
        </div>
    );
};

export default Calculator;
