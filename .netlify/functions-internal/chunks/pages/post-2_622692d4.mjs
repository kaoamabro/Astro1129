import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_4262e2f8.mjs';
import 'clsx';

const html = "<h1 id=\"post-2\">post 2</h1>\n<p>hello</p>";

				const frontmatter = {"title":"test 2"};
				const file = "C:/Users/User/OneDrive/桌面/MsiTest-master/astro/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "\r\n# post 2\r\nhello";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"post-2","text":"post 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
