import { html } from "xiome/x/toolbox/hamster-html/html.js";
import pageHtml from "../partials/page.html.js";
const urls = {
    github: "https://github.com/benevolent-games/shad",
    website: "https://benevolent.games/"
};
export default (context) => pageHtml({
    ...context,
    mainContent: html `
		<header>
			<h1>
				<strong>🐟 shad</strong>
				<span><span>—</span> shader development laboratory by <a target="_blank" href="${urls.website}">benevolent</a></span>
				<span><span>—</span> <a target="_blank" href="${urls.github}">github</a></span>
			</h1>
		</header>
		<div class=zone></div>
	`,
});
//# sourceMappingURL=index.html.js.map