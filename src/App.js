import React from "react";
import Title from "./components/title";
import Homework from "./components/homework";

const App = () => {
    return (
        <div className="App">
            <Title title="Ứng dụng quản lý học sinh (CRUD sử dụng Table)" />
            <Homework />
        </div>
    );
};

export default App;
