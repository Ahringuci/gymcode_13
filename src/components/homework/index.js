import React from "react";

const Homework = () => {
    const [userData, setUserData] = React.useState({
        form: { email: "", password: "", remember: false },
        isValid: false,
        isLogin: false,
    });

    const handleChange = (e) => {
        const { form } = userData;
        form[e.target.name] = e.target.value;

        const val = form.email && form.password ? true : false;

        setUserData({ form, isValid: val });
    };

    const handleSubmit = () => {
        const { isValid } = userData;
        setUserData({ isLogin: isValid });
    };

    const handleLogout = () => {
        setUserData({
            form: { email: "", password: "", remember: false },
            isValid: false,
            isLogin: false,
        });
    };

    return (
        <>
            {userData.isLogin ? (
                <div>
                    <h2>Welcome</h2>
                    <button onClick={handleLogout}> Logout</button>
                </div>
            ) : (
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        value={userData.form.email}
                        onChange={(e) => handleChange(e)}
                    />

                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        value={userData.form.password}
                        onChange={(e) => handleChange(e)}
                    />

                    <button disabled={!userData.isValid} onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            )}
        </>
    );
};

export default Homework;
