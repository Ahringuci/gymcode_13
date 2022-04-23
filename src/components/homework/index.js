import React from "react";

const Homework = () => {
    const [user, setUser] = React.useState({ name: "", password: "" });

    const handleChange = (e) => {
        let _user = { ...user };
        _user[e.target.name] = e.target.value;
        setUser(_user);
    };

    const handleLogin = () => {
        alert(JSON.stringify(user));
    };
    return (
        <>
            <input
                name="name"
                type="text"
                placeholder="username"
                value={user.name}
                onChange={(e) => handleChange(e)}
            />
            <input
                name="password"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
            />
            <button onClick={handleLogin}>Login</button>
        </>
    );
};

export default Homework;
