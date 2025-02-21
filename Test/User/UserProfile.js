const UserProfile = {
    user: {
        name: "",
        phone: "",
        birthday: "",
        gender: ""
    },

    init() {
        // 讀取 localStorage，初始化數據
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            this.user = JSON.parse(savedUser);
            this.render();
        }

        // 綁定按鈕事件
        document.getElementById("save-btn").addEventListener("click", () => this.saveUser());
    },

    render() {
        // 更新表單的值
        document.getElementById("name").value = this.user.name;
        document.getElementById("phone").value = this.user.phone;
        document.getElementById("birthday").value = this.user.birthday;
        document.getElementById("gender").value = this.user.gender;
    },

    saveUser() {
        this.user = {
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            birthday: document.getElementById("birthday").value,
            gender: document.getElementById("gender").value
        };

        console.log("儲存使用者:", this.user);
        localStorage.setItem("user", JSON.stringify(this.user));
        alert("使用者資料已儲存！");
    }
};

// 當頁面載入時，初始化 UserProfile
window.onload = () => UserProfile.init();
