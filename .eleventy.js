const slugify = require("@sindresorhus/slugify");// 引入slugify库，用于将字符串转换为URL友好的格式
const markdownIt = require("markdown-it");// 引入markdown-it库，用于将Markdown文本转换为HTML
const fs = require("fs");// 引入Node.js的文件系统模块，用于文件读写操作
const matter = require("gray-matter");// 引入gray-matter库，用于解析文件中的YAML或JSON格式的元数据
const faviconsPlugin = require("eleventy-plugin-gen-favicons");// 引入eleventy插件，用于生成网站图标
const tocPlugin = require("eleventy-plugin-nesting-toc");// 引入eleventy插件，用于生成嵌套的目录列表
const { parse } = require("node-html-parser");// 引入node-html-parser库，用于解析HTML文档
const htmlMinifier = require("html-minifier-terser");// 引入html-minifier-terser库，用于压缩HTML代码
const pluginRss = require("@11ty/eleventy-plugin-rss");// 引入eleventy插件，用于生成RSS订阅源

const { headerToId, namedHeadingsFilter } = require("./src/helpers/utils");// 引入本地模块，包含辅助函数
const {
  userMarkdownSetup,
  userEleventySetup,
} = require("./src/helpers/userSetup");
// 引入本地模块，包含自定义Markdown和Eleventy设置

const Image = require("@11ty/eleventy-img");// 引入eleventy插件，用于处理图像
function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) {
  let options = {
    widths: widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/optimized",
    urlPath: "/img/optimized",
  };
  
  // 定义一个函数，用于转换图像，并返回图像的元数据
  // generate images, while this is async we don’t wait
  Image(src, options);
  let metadata = Image.statsSync(src, options);
  return metadata;
}
// 定义一个函数，用于生成锚点链接的HTML代码
function getAnchorLink(filePath, linkTitle) {
  const {attributes, innerHTML} = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.keys(attributes).map(key => `${key}="${attributes[key]}"`).join(" ")}>${innerHTML}</a>`;
}

// 定义一个函数，用于获取锚点链接的属性和内容，并返回一个对象
function getAnchorAttributes(filePath, linkTitle) {
  let fileName = filePath.replaceAll("&amp;", "&");
  let header = "";
  let headerLinkPath = "";
  if (filePath.includes("#")) {
    [fileName, header] = filePath.split("#");
    headerLinkPath = `#${headerToId(header)}`;
  }

  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  const title = linkTitle ? linkTitle : fileName;
  let permalink = `/notes/${slugify(filePath)}`;
  let deadLink = false;
  try {
    const startPath = "./src/site/notes/";
    const fullPath = fileName.endsWith(".md")
      ? `${startPath}${fileName}`
      : `${startPath}${fileName}.md`;
    const file = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(file);
    if (frontMatter.data.permalink) {
      permalink = frontMatter.data.permalink;
    }
    if (
      frontMatter.data.tags &&
      frontMatter.data.tags.indexOf("gardenEntry") != -1
    ) {
      permalink = "/";
    }
    if (frontMatter.data.noteIcon) {
      noteIcon = frontMatter.data.noteIcon;
    }
  } catch {
    deadLink = true;
  }

  if (deadLink) {
    return {
      attributes: {
        "class": "internal-link is-unresolved",
        "href": "/404",
        "target": "",
      },
      innerHTML: title,
    }
  }
  return {
    attributes: {
      "class": "internal-link",
      "target": "",
      "data-note-icon": noteIcon,
      "href": `${permalink}${headerLinkPath}`,
    },
    innerHTML: title,
  }
}
// 定义一个正则表达式，用于匹配标签，但不包括嵌套在HTML标签内的标签。
const tagRegex = /(^|\s|\>)(#[^\s!@#$%^&*()=+\.,\[{\]};:'"?><]+)(?!([^<]*>))/g;
// 导出一个函数，该函数接收Eleventy配置对象作为参数。
module.exports = function (eleventyConfig) {
  // 设置Eleventy的Liquid模板引擎选项，启用动态部分。
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });
  
  // 使用markdown-it的use方法添加自定义插件或规则。
  let markdownLib = markdownIt({
    breaks: true,
    html: true,
    linkify: true,
  })
    .use(require("markdown-it-anchor"), {
      slugify: headerToId,
    })
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-footnote"))
    .use(function (md) {
      // 自定义hashtag_open规则，用于渲染标签。
      md.renderer.rules.hashtag_open = function (tokens, idx) {
        return '<a class="tag" onclick="toggleTagSearch(this)">';
      };
    })
    .use(require("markdown-it-mathjax3"), {
      tex: {
        inlineMath: [["$", "$"]],
      },
      options: {
        skipHtmlTags: { "[-]": ["pre"] },
      },
    })
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-task-checkbox"), {
      disabled: true,
      divWrap: false,
      divClass: "checkbox",
      idPrefix: "cbx_",
      ulClass: "task-list",
      liClass: "task-list-item",
    })
    .use(require("markdown-it-plantuml"), {
      openMarker: "```plantuml",
      closeMarker: "```",
    })
    .use(namedHeadingsFilter)
    // 使用自定义规则处理代码块。
    .use(function (md) {
      //https://github.com/DCsunset/markdown-it-mermaid-plugin
      const origFenceRule =
        md.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        if (token.info === "mermaid") {
          const code = token.content.trim();
          return `<pre class="mermaid">${code}</pre>`;
        }
        if (token.info === "transclusion") {
          const code = token.content.trim();
          return `<div class="transclusion">${md.render(code)}</div>`;
        }
        if (token.info.startsWith("ad-")) {
          const code = token.content.trim();
          const parts = code.split("\n")
          let titleLine;
          let collapse;
          let collapsible = false
          let collapsed = true
          let icon;
          let color;
          let nbLinesToSkip = 0
          for (let i = 0; i < 4; i++) {
            if (parts[i] && parts[i].trim()) {
              let line = parts[i] && parts[i].trim().toLowerCase()
              if (line.startsWith("title:")) {
                titleLine = line.substring(6);
                nbLinesToSkip++;
              } else if (line.startsWith("icon:")) {
                icon = line.substring(5);
                nbLinesToSkip++;
              } else if (line.startsWith("collapse:")) {
                collapsible = true
                collapse = line.substring(9);
                if (collapse && collapse.trim().toLowerCase() == 'open') {
                  collapsed = false
                }
                nbLinesToSkip++;
              } else if (line.startsWith("color:")) {
                color = line.substring(6);
                nbLinesToSkip++;
              }
            }
          }
          const foldDiv = collapsible ? `<div class="callout-fold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down">
              <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          </div>` : "";
          const titleDiv = titleLine
            ? `<div class="callout-title"><div class="callout-title-inner">${titleLine}</div>${foldDiv}</div>`
            : "";
          let collapseClasses = titleLine && collapsible ? 'is-collapsible' : ''
          if (collapsible && collapsed) {
            collapseClasses += " is-collapsed"
          }

          let res = `<div data-callout-metadata class="callout ${collapseClasses}" data-callout="${token.info.substring(3)
            }">${titleDiv}\n<div class="callout-content">${md.render(
              parts.slice(nbLinesToSkip).join("\n")
            )}</div></div>`;
          return res
        }

        // Other languages
        return origFenceRule(tokens, idx, options, env, slf);
      };
      // 处理图像标签，添加宽度属性和类名。
      const defaultImageRule =
        md.renderer.rules.image ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const imageName = tokens[idx].content;
        //"image.png|metadata?|width"
        const [fileName, ...widthAndMetaData] = imageName.split("|");
        const lastValue = widthAndMetaData[widthAndMetaData.length - 1];
        const lastValueIsNumber = !isNaN(lastValue);
        const width = lastValueIsNumber ? lastValue : null;

        let metaData = "";
        if (widthAndMetaData.length > 1) {
          metaData = widthAndMetaData.slice(0, widthAndMetaData.length - 1).join(" ");
        }

        if (!lastValueIsNumber) {
          metaData += ` ${lastValue}`;
        }

        if (width) {
          const widthIndex = tokens[idx].attrIndex("width");
          const widthAttr = `${width}px`;
          if (widthIndex < 0) {
            tokens[idx].attrPush(["width", widthAttr]);
          } else {
            tokens[idx].attrs[widthIndex][1] = widthAttr;
          }
        }

        return defaultImageRule(tokens, idx, options, env, self);
      };
      // 处理链接标签，添加target属性和类名。
      const defaultLinkRule =
        md.renderer.rules.link_open ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const aIndex = tokens[idx].attrIndex("target");
        const classIndex = tokens[idx].attrIndex("class");

        if (aIndex < 0) {
          tokens[idx].attrPush(["target", "_blank"]);
        } else {
          tokens[idx].attrs[aIndex][1] = "_blank";
        }

        if (classIndex < 0) {
          tokens[idx].attrPush(["class", "external-link"]);
        } else {
          tokens[idx].attrs[classIndex][1] = "external-link";
        }

        return defaultLinkRule(tokens, idx, options, env, self);
      };
    })
    // 使用用户自定义的Markdown设置。
    .use(userMarkdownSetup);
  // 将配置好的markdownLib对象赋值给eleventyConfig的markdown配置。
  eleventyConfig.setLibrary("md", markdownLib);
  // 添加自定义过滤器 "isoDate"
  eleventyConfig.addFilter("isoDate", function (date) {
    return date && date.toISOString();
  });
  // 添加自定义过滤器 "link"
  eleventyConfig.addFilter("link", function (str) {
    return (
      str &&
      str.replace(/\[\[(.*?\|.*?)\]\]/g, function (match, p1) {
        // 检查是否为嵌入的excalidraw绘图或mathjax脚本
        if (p1.indexOf("],[") > -1 || p1.indexOf('"$"') > -1) {
          return match;
        }
        const [fileLink, linkTitle] = p1.split("|");

        return getAnchorLink(fileLink, linkTitle);
      })
    );
  });
  // 添加自定义过滤器 "taggify"
  eleventyConfig.addFilter("taggify", function (str) {
    return (
      str &&
      str.replace(tagRegex, function (match, precede, tag) {
        // 将标签转换为带有点击事件的HTML链接
        return `${precede}<a class="tag" onclick="toggleTagSearch(this)" data-content="${tag}">${tag}</a>`;
      })
    );
  });
  // 添加自定义过滤器 "searchableTags"
  eleventyConfig.addFilter("searchableTags", function (str) {
    let tags;
    let match = str && str.match(tagRegex);
    if (match) {
      tags = match
        .map((m) => {
          return `"${m.split("#")[1]}"`;
        })
        .join(", ");
    }
    if (tags) {
      return `${tags},`;
    } else {
      return "";
    }
  });
  // 添加自定义过滤器 "hideDataview"
  eleventyConfig.addFilter("hideDataview", function (str) {
    return (
      str &&
      str.replace(/\(\S+\:\:(.*)\)/g, function (_, value) {
        return value.trim();
      })
    );
  });
  // 添加自定义转换器 "dataview-js-links"
  eleventyConfig.addTransform("dataview-js-links", function (str) {
    const parsed = parse(str);
    for (const dataViewJsLink of parsed.querySelectorAll("a[data-href].internal-link")) {
      const notePath = dataViewJsLink.getAttribute("data-href");
      const title = dataViewJsLink.innerHTML;
      const {attributes, innerHTML} = getAnchorAttributes(notePath, title);
      for (const key in attributes) {
        dataViewJsLink.setAttribute(key, attributes[key]);
      }
      dataViewJsLink.innerHTML = innerHTML;
    }

    return str && parsed.innerHTML;
  });
  // 添加自定义转换器 "callout-block"
  eleventyConfig.addTransform("callout-block", function (str) {
    const parsed = parse(str);

    const transformCalloutBlocks = (
      blockquotes = parsed.querySelectorAll("blockquote")
    ) => {
      for (const blockquote of blockquotes) {
        transformCalloutBlocks(blockquote.querySelectorAll("blockquote"));

        let content = blockquote.innerHTML;

        let titleDiv = "";
        let calloutType = "";
        let calloutMetaData = "";
        let isCollapsable;
        let isCollapsed;
        const calloutMeta = /\[!([\w-]*)\|?(\s?.*)\](\+|\-){0,1}(\s?.*)/;
        if (!content.match(calloutMeta)) {
          continue;
        }

        content = content.replace(
          calloutMeta,
          function (metaInfoMatch, callout, metaData, collapse, title) {
            isCollapsable = Boolean(collapse);
            isCollapsed = collapse === "-";
            const titleText = title.replace(/(<\/{0,1}\w+>)/, "")
              ? title
              : `${callout.charAt(0).toUpperCase()}${callout
                .substring(1)
                .toLowerCase()}`;
            const fold = isCollapsable
              ? `<div class="callout-fold"><i icon-name="chevron-down"></i></div>`
              : ``;

            calloutType = callout;
            calloutMetaData = metaData;
            titleDiv = `<div class="callout-title"><div class="callout-title-inner">${titleText}</div>${fold}</div>`;
            return "";
          }
        );

        /* Hacky fix for callouts with only a title:
        This will ensure callout-content isn't produced if
        the callout only has a title, like this:
        ```md
        > [!info] i only have a title
        ```
        Not sure why content has a random <p> tag in it,
        */
        // 如果引用块的内容只有<p>标签，并且是空的，则清空内容。
        if (content === "\n<p>\n") {
          content = "";
        }
        // 如果有内容，创建一个包含内容的<div>标签，用于显示引用块的内容。
        let contentDiv = content ? `\n<div class="callout-content">${content}</div>` : "";
        // 如果内容为空，则contentDiv也为空字符串，否则包含一个带有类名"callout-content"的<div>标签。
        // 将引用块转换为<div>元素，并添加类名"callout"。
        blockquote.tagName = "div";
        blockquote.classList.add("callout");
        // 根据是否可折叠，添加类名"is-collapsible"。
        blockquote.classList.add(isCollapsable ? "is-collapsible" : "");
        blockquote.classList.add(isCollapsed ? "is-collapsed" : "");
        // 设置引用块的数据属性，用于存储引用类型。
        blockquote.setAttribute("data-callout", calloutType.toLowerCase());
        // 如果有元数据，设置引用块的数据元数据属性。
        calloutMetaData && blockquote.setAttribute("data-callout-metadata", calloutMetaData);
        // 将标题和内容添加到引用块中。
        blockquote.innerHTML = `${titleDiv}${contentDiv}`;
      }
    };
    // 对引用块进行转换。
    transformCalloutBlocks();
    // 返回转换后的字符串和解析后的HTML内容。
    return str && parsed.innerHTML;
  });
  // 填充图片源集的函数。
  function fillPictureSourceSets(src, cls, alt, meta, width, imageTag) {
    imageTag.tagName = "picture";// 将图像标签转换为<picture>标签。
    // 创建HTML字符串，用于设置不同屏幕尺寸下的图片源。
    let html = `<source
      media="(max-width:480px)"
      srcset="${meta.webp[0].url}"
      type="image/webp"
      />
      <source
      media="(max-width:480px)"
      srcset="${meta.jpeg[0].url}"
      />
      `
    // 如果存在第二张webp格式的图片，添加到源集中。
    if (meta.webp && meta.webp[1] && meta.webp[1].url) {
      html += `<source
        media="(max-width:1920px)"
        srcset="${meta.webp[1].url}"
        type="image/webp"
        />`
    }
     // 如果存在第二张jpeg格式的图片，添加到源集中。
    if (meta.jpeg && meta.jpeg[1] && meta.jpeg[1].url) {
      html += `<source
        media="(max-width:1920px)"
        srcset="${meta.jpeg[1].url}"
        />`
    }
    // 添加<img>标签，用于显示图片。
    html += `<img
      class="${cls.toString()}"
      src="${src}"
      alt="${alt}"
      width="${width}"
      />`;
    imageTag.innerHTML = html;// 将生成的HTML设置回图像标签的innerHTML。
  }

  // 添加一个名为 "picture" 的转换器，用于处理图片标签
  eleventyConfig.addTransform("picture", function (str) {
    // 检查环境变量USE_FULL_RESOLUTION_IMAGES是否设置为"true"，如果是，则直接返回原始字符串
    if(process.env.USE_FULL_RESOLUTION_IMAGES === "true"){
      return str;
    }
    // 使用parse函数解析HTML字符串
    const parsed = parse(str);
    // 遍历所有class为"cm-s-obsidian img"的img标签
    for (const imageTag of parsed.querySelectorAll(".cm-s-obsidian img")) {
      const src = imageTag.getAttribute("src");// 获取img标签的src属性
      // 检查src是否存在，以"/"开头且不以".svg"结尾
      if (src && src.startsWith("/") && !src.endsWith(".svg")) {
        // 获取img标签的class和alt属性
        const cls = imageTag.classList.value;
        const alt = imageTag.getAttribute("alt");
        // 获取img标签的width属性，如果不存在则默认为空字符串
        const width = imageTag.getAttribute("width") || '';

        try {
          // 调用transformImage函数处理图片，并传入相应的参数
          const meta = transformImage(
            "./src/site" + decodeURI(imageTag.getAttribute("src")),
            cls.toString(),
            alt,
            ["(max-width: 480px)", "(max-width: 1024px)"]
          );

          if (meta) {
            fillPictureSourceSets(src, cls, alt, meta, width, imageTag);
          }
        } catch {
          // Make it fault tolarent.
        }
      }
    }
    return str && parsed.innerHTML;
  });
  // 添加一个名为 "table" 的转换器，用于处理表格标签
  eleventyConfig.addTransform("table", function (str) {
    const parsed = parse(str);// 使用parse函数解析HTML字符串
    for (const t of parsed.querySelectorAll(".cm-s-obsidian > table")) {
      let inner = t.innerHTML;
      t.tagName = "div";
      t.classList.add("table-wrapper");
      t.innerHTML = `<table>${inner}</table>`;
    }

    for (const t of parsed.querySelectorAll(
      ".cm-s-obsidian > .block-language-dataview > table"
    )) {
      t.classList.add("dataview");
      t.classList.add("table-view-table");
      t.querySelector("thead")?.classList.add("table-view-thead");
      t.querySelector("tbody")?.classList.add("table-view-tbody");
      t.querySelectorAll("thead > tr")?.forEach((tr) => {
        tr.classList.add("table-view-tr-header");
      });
      t.querySelectorAll("thead > tr > th")?.forEach((th) => {
        th.classList.add("table-view-th");
      });
    }
    return str && parsed.innerHTML;
  });
  // 添加一个名为 "htmlMinifier" 的转换器，用于压缩HTML文件
  eleventyConfig.addTransform("htmlMinifier", (content, outputPath) => {
    if (
      (process.env.NODE_ENV === "production" || process.env.ELEVENTY_ENV === "prod") &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      return htmlMinifier.minify(content, {
        useShortDoctype: true,// 使用简短文档类型
        removeComments: true,// 移除注释
        collapseWhitespace: true,// 压缩空白字符
        conservativeCollapse: true,// 保守式压缩
        preserveLineBreaks: true,// 保留换行符
        minifyCSS: true,// 压缩CSS
        minifyJS: true,// 压缩JavaScript
        keepClosingSlash: true,// 保持关闭斜杠
      });
    }
    return content;// 如果不满足压缩条件，则直接返回原始内容
  });

  eleventyConfig.addPassthroughCopy("src/site/img");// 将"src/site/img"目录下的文件作为静态文件传递
  eleventyConfig.addPassthroughCopy("src/site/scripts");// 将"src/site/scripts"目录下的文件作为静态文件传递
  eleventyConfig.addPassthroughCopy("src/site/styles/_theme.*.css");// 将"src/site/styles/_theme.*.css"目录下的文件作为静态文件传递
  eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "dist" });// 添加faviconsPlugin插件，并设置输出目录为"dist"
  // 添加tocPlugin插件，并设置ul为true，表示生成目录列表，同时指定支持的标签为h1至h6
  eleventyConfig.addPlugin(tocPlugin, {
    ul: true,
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
  });

// 添加一个名为 "dateToZulu" 的过滤器，用于将日期转换为ISO格式的字符串
  eleventyConfig.addFilter("dateToZulu", function (date) {
    try {
      return new Date(date).toISOString("dd-MM-yyyyTHH:mm:ssZ");
    } catch {
      return "";
    }
  });
  // 添加一个名为 "jsonify" 的过滤器，用于将变量转换为JSON字符串
  eleventyConfig.addFilter("jsonify", function (variable) {
    return JSON.stringify(variable) || '""';
  });
// 添加一个名为 "validJson" 的过滤器，用于确保变量可以安全地转换为JSON
  eleventyConfig.addFilter("validJson", function (variable) {
    if (Array.isArray(variable)) {
      return variable.map((x) => x.replaceAll("\\", "\\\\")).join(",");
    } else if (typeof variable === "string") {
      return variable.replaceAll("\\", "\\\\");
    }
    return variable;
  });
// 添加一个名为 pluginRss 的插件，并配置其posthtmlRenderOptions
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "slash",
      singleTags: ["link"],
    },
  });
// 调用 userEleventySetup 函数，该函数是用户自定义的设置函数，用于进一步配置eleventyConfig
  userEleventySetup(eleventyConfig);

  return {
    dir: {// 配置目录
      input: "src/site",
      output: "dist",
      data: `_data`,
    },
    templateFormats: ["njk", "md", "11ty.js"],// 配置模板格式
    htmlTemplateEngine: "njk",// 配置HTML模板引擎
    markdownTemplateEngine: false,// 配置Markdown模板引擎，这里设置为false，表示不使用Markdown模板引擎
    passthroughFileCopy: true,// 配置passthroughFileCopy，设置为true表示允许静态文件传递
  };
};
