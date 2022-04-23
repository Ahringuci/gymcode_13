import React from "react";

const Homework = () => {
    const [keyPressed, setKeyPressed] = React.useState("");
    const handlePressed = (e) => {
        setKeyPressed(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                value={keyPressed}
                onChange={(e) => handlePressed(e)}
            />
            <p>key pressed is : {keyPressed}</p>
        </div>
    );
};

export default Homework;
