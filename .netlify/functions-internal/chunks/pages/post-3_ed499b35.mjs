import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_4262e2f8.mjs';
import 'clsx';

const html = "<h1 id=\"hello\">hello</h1>";

				const frontmatter = {"title":"test 3","description":"desc","author":"Zac","pubDate":"20231124"};
				const file = "C:/Users/User/OneDrive/桌面/MsiTest-master/astro/src/pages/blog/post-3.md";
				const url = "/blog/post-3";
				function rawContent() {
					return "# hello";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello","text":"hello"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
