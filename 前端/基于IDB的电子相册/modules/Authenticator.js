import { UserManager } from "./UserManager.js"

/**
 * 验证是否登录
 * @returns null: 代表没有登录 | string: 已登录账号的用户名
 */
const isLogin = () => {
    const res = sessionStorage.getItem("login");
    if (!res) return null;
    return res;
};

/**
 * 用户登录
 * @param {UserManager} userManager 用户管理器实例
 * @param {string} user 用户名
 * @param {string} password 密码
 * @returns
 */
const login = async (userManager, user, password) => {
    try {
        const userInfo = await userManager.getUser(user);
        if (userInfo.password !== password) {
            sessionStorage.removeItem("login", null);
            return;
        }
        sessionStorage.setItem("login", user);
    } catch (err) {
        console.log(err);
    }
};

/**
 * 账号登出
 */
const logout = () => {
    sessionStorage.removeItem("login");
}

export { isLogin, login, logout };
