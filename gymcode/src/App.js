import "./App.css";

function App() {
    const students = [
        {
            company: "Alfreds Futterkiste",
            contact: "Maria Anders",
            country: "Germany",
        },
        {
            company: "Centro comercial Moctezuma",
            contact: "Francisco Chang",
            country: "Mexico",
        },
        {
            company: "Ernst Handel",
            contact: "Roland Mendel",
            country: "Austria",
        },
        {
            company: "Island Trading",
            contact: "Helen Bennett",
            country: "UK",
        },
        {
            company: "Laughing Bacchus Winecellars",
            contact: "Yoshi Tannamuri",
            country: "Canada",
        },
        {
            company: "Magazzini Alimentari Riuniti",
            contact: "Giovanni Rovelli",
            country: "Italy",
        },
    ];
    return (
        <div>
            <h2>
                [Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)
            </h2>
            <div className="container">
                <div className="card">
                    <div className="card--header" />
                    <img
                        className="avatar"
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="avatar"
                    />
                    <div className="card--body">
                        <div>
                            <p className="text-header">Ruma Khan</p>
                            <p className="text-sub">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                            </p>
                            <button className="btn third">FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
