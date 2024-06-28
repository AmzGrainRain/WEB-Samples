import els from "../js/Elements.js";

class ThemeManager {
    constructor() {
        this.rootEl = document.querySelector("#theme");
        this.theme = localStorage.getItem("theme") || "light";

        if (this.theme === "light") {
            this.enableLightMode();
        } else {
            this.enableDarkMode();
        }
    }

    /**
     * 当前是否为浅色模式
     * @returns {boolean}
     */
    isLightMode = () => this.theme === "light";

    /**
     * 当前是否为深色模式
     * @returns {boolean}
     */
    isDarkMode = () => this.theme === "dark";

    /**
     * 切换到深色模式
     */
    enableDarkMode() {
        this.rootEl.href = "./css/theme/dark.css";
        this.theme = "dark";
        els.ThemeSwitchButton.children[0].style.display = "none";
        els.ThemeSwitchButton.children[1].style.display = "block";
        localStorage.setItem("theme", "dark");
    }

    /**
     * 切换到浅色模式
     */
    enableLightMode() {
        this.rootEl.href = "./css/theme/light.css";
        this.theme = "light";
        els.ThemeSwitchButton.children[0].style.display = "block";
        els.ThemeSwitchButton.children[1].style.display = "none";
        localStorage.setItem("theme", "light");
    }

    /**
     * 在深色与浅色之间切换
     */
    switchTheme() {
        if (this.isLightMode()) {
            this.enableDarkMode();
        } else {
            this.enableLightMode();
        }
    }
}

export { ThemeManager };
