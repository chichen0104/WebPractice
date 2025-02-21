const app = Vue.createApp({
    data() {
        return {
            user: {
                name: "",
                phone: "",
                birthday: "",
                gender: ""
            }
        };
    },
    mounted() {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            this.user = JSON.parse(savedUser);
        }
    },
    methods: {
        handleSave() {
            console.log("儲存使用者:", this.user);
            localStorage.setItem("user", JSON.stringify(this.user));
            alert("使用者資料已儲存！");
        }
    },
    template: `
        <div>
            <input type="text" v-model="user.name" placeholder="姓名" />
            <input type="tel" v-model="user.phone" placeholder="電話" />
            <input type="date" v-model="user.birthday" />
            <select v-model="user.gender">
                <option value="">選擇性別</option>
                <option value="Male">男</option>
                <option value="Female">女</option>
            </select>
            <button @click="handleSave">儲存</button>
        </div>
    `
});

app.mount("#app");
