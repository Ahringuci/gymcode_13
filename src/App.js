import React from "react";
import Title from "./components/title";
import Homework from "./components/homework";

const App = () => {
    return (
        <div className="App">
            <Title title="Kiểm tra phím được nhập vào" />
            <Homework />
        </div>
    );
};

export default App;
