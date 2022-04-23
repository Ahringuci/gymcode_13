import React from "react";

const Homework = () => {
    const [hello, setHello] = React.useState("");

    const handleChange = (e) => {
        setHello(e.target.value);
    };
    return (
        <>
            <input
                type="text"
                value={hello}
                onChange={(e) => handleChange(e)}
            />
            <p>Hello: {hello}</p>
        </>
    );
};

export default Homework;
