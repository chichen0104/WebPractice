const { useState, useEffect } = React;

function UserProfile() {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        birthday: "",
        gender: ""
    });

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("儲存使用者:", user);
        localStorage.setItem("user", JSON.stringify(user));
        alert("使用者資料已儲存！");
    };

    return (
        <div>
            <input type="text" name="name" placeholder="姓名" value={user.name} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="電話" value={user.phone} onChange={handleChange} />
            <input type="date" name="birthday" value={user.birthday} onChange={handleChange} />
            <select name="gender" value={user.gender} onChange={handleChange}>
                <option value="">選擇性別</option>
                <option value="Male">男</option>
                <option value="Female">女</option>
            </select>
            <button onClick={handleSave}>儲存</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(<UserProfile />);
