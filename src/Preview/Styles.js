import jss from "jss";
import jssPluginTemplate from "jss-plugin-template";

const styleHeader = `
    width: 350px;
    margin-bottom: 10px;
    font-size: 30px;
    text-decoration: none;
    font-weight: bold;
    color: black;
    white-space: break-spaces;
    line-height: 53px;
    text-decoration: none;
`;

const styleDescription = `
    width: 350px;
    margin-bottom: 10px;
    font-size: 20px;
    text-decoration: none;
    color: black;
    white-space: break-spaces;
    line-height: 23px;
    max-height: 65px;
    text-decoration: none;
`;

const styleChecks = `
    max-height: none;
    position: absolute;
    visibility: hidden;
    white-space: break-spaces;
`;

const styles = {
  wrapper: `
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-size: cover;
        background-color: white;
      `,
  text: `
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        color: white;
      `,

  header: [
    styleHeader,
    `max-height: 60px;`,
    `white-space: nowrap;`,
    `overflow: hidden;`,
    `text-overflow: ellipsis;`,
  ].join(""),

  description: [styleDescription, `max-height: 65px;`].join(""),

  descriptionToCheck: [styleDescription, styleChecks].join(""),

  headerToCheck: [styleHeader, styleChecks].join(""),

  linkWrapper: `
        text-decoration: none;
        width: 100%;
        display: flex;
      `,
};

jss.use(jssPluginTemplate());
const stylesheet = jss.createStyleSheet(styles);
const { classes } = stylesheet.attach();
const inlineCss = stylesheet.toString();
export { classes, inlineCss };
