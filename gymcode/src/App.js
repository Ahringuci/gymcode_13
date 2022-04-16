import "./App.css";
import Alert from "./components/alert";

function App() {
    return (
        <div>
            <h2>[Bài tập] Xây dựng Alert component</h2>
            <Alert
                alertTxt={
                    " Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."
                }
            />
        </div>
    );
}

export default App;
