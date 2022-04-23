import React from "react";

const Homework = () => {
    const [data, setData] = React.useState({
        list: [],
        item: "",
    });

    const handleChange = (e) => {
        let _data = { ...data };
        _data.item = e.target.value;
        setData(_data);
    };

    const handleAddItem = () => {
        if (data.item) {
            let _list = [...data.list];
            _list.push(data.item);
            console.log(_list);
            setData({ list: _list, item: "" });
        }
    };
    return (
        <>
            {console.log("first")}
            <input
                type="text"
                value={data.item}
                onChange={(e) => handleChange(e)}
            />

            <button onClick={handleAddItem}>Add</button>

            {data.list.length > 0
                ? data.list.map((item, index) => <p key={index}>{item}</p>)
                : "no work todo"}
        </>
    );
};

export default Homework;
