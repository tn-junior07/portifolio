import { Theme } from "react-github-calendar";

/**
 * @typedef {Object} ThemeType
 * @property {number} themeId
 * @property {string} primaryColor
 * @property {string} secondaryColor
 * @property {string} tertiaryColor
 * @property {string} quaternaryColor
 * @property {string} headerBoxShadow
 * @property {string} mainColor
 * @property {string} textColor
 * @property {string} boxShadowItem
 * @property {string} selectItemArrow
 * @property {Theme} gitHubTheme
 */

/**
 * @type {ThemeType}
 */
export const darkTheme = {
    themeId: 1,
    primaryColor: "#0B0B0B",
    secondaryColor: "#0F0F0F",
    tertiaryColor: "#1F1F1F",
    quaternaryColor: "#7E7E7E",
    headerBoxShadow: "0px 4px 4px rgba(61, 61, 61, 0.25)",
    mainColor: "#00AD6F", //verde
    textColor: "#FFFFFF",
    boxShadowItem: "0px 4px 4px rgba(0, 173, 111, 0.58)",
    selectItemArrow: "#FFF",
    gitHubTheme: {
        level0: "#505050",
        level1: "#007E51",
        level2: "#009B63",
        level3: "#00B876",
        level4: "#00D98B"
    }
};

export default darkTheme;
