import React from "react";

const Homework = () => {
    const [data, setData] = React.useState({
        studentList: [],
        form: { name: "", phone: "", email: "" },
        isValid: false,
        indexSelected: -1,
    });

    const handleChange = (e) => {
        const _state = { ...data };
        let _form = _state.form;
        _form[e.target.name] = e.target.value;

        const { name, phone, email } = _form;
        const value = name && phone && email ? true : false;
        _state.isValid = value;
        setData(_state);
    };

    const handleSelect = (studentSelected, index) => {
        const _state = { ...data };
        _state.form = JSON.parse(JSON.stringify(studentSelected));
        _state.indexSelected = index;
        setData(_state);
    };

    const handleSubmit = () => {
        if (data.isValid) {
            let _list = [...data.studentList];
            if (data.indexSelected > -1) {
                _list.splice(data.indexSelected, 1, data.form);
            } else {
                _list.push(data.form);
            }
            const newForm = {
                name: "",
                phone: "",
                email: "",
            };
            setData({
                studentList: _list,
                form: newForm,
                isValid: false,
                indexSelected: -1,
            });
        }
    };

    const handleDelete = (index) => {
        const _state = { ...data };
        const newList = _state.studentList;
        newList.splice(index, 1);
        setData(_state);
    };

    return (
        <>
            <label>Name: </label>
            <input
                type="text"
                name="name"
                value={data.form.name}
                onChange={(e) => handleChange(e)}
            />

            <label>Phone: </label>
            <input
                type="number"
                name="phone"
                value={data.form.phone}
                onChange={(e) => handleChange(e)}
            />

            <label>Email: </label>
            <input
                type="email"
                name="email"
                value={data.form.email}
                onChange={(e) => handleChange(e)}
            />

            <button disabled={!data.isValid} onClick={handleSubmit}>
                Submit
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.studentList &&
                        data.studentList.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleSelect(student, index)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default Homework;
