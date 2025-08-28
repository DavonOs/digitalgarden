// 1. 修正wiki链接正则：匹配所有[[...]]格式（无论是否包含|）
const wikiLinkRegex = /\[\[(.*?)\]\]/g; 
const internalLinkRegex = /href="\/(.*?)"/g;

function caselessCompare(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

// 新增：移除内容中的代码块（```包裹的部分），避免识别代码里的链接
function removeCodeBlocks(content) {
  // 匹配```开头和```结尾的代码块（包括多行）
  return content.replace(/```[\s\S]*?```/g, '');
}

function extractLinks(content) {
  // 先移除代码块，再处理链接
  const cleanContent = removeCodeBlocks(content);
  
  return [
    // 处理wiki链接：[[显示文本|实际链接]] 或 [[实际链接]]
    ...(cleanContent.match(wikiLinkRegex) || []).map(link => {
      const linkContent = link.slice(2, -2); // 去掉前后的[[和]]
      const parts = linkContent.split("|");
      // 取|后面的内容作为链接（如果有），否则取全部
      const actualLink = parts.length > 1 ? parts[1] : parts[0];
      
      return actualLink
        .replace(/.(md|markdown)\s?$/i, "") // 去掉.md后缀
        .replace("\\", "")
        .trim()
        .split("#")[0]; // 去掉#后的锚点
    }),
    // 处理内部链接：href="/实际链接"
    ...(cleanContent.match(internalLinkRegex) || []).map(link => {
      return link
        .slice(6, -1) // 去掉href="/和"
        .split("|")[0]
        .replace(/.(md|markdown)\s?$/i, "")
        .replace("\\", "")
        .trim()
        .split("#")[0];
    }),
  ];
}

function getGraph(data) {
  let nodes = {};
  let links = [];
  let stemURLs = {};
  let homeAlias = "/";
  (data.collections.note || []).forEach((v, idx) => {
    let fpath = v.filePathStem.replace("/notes/", "");
    let parts = fpath.split("/");
    let group = "none";
    if (parts.length >= 3) {
      group = parts[parts.length - 2];
    }
    nodes[v.url] = {
      id: idx,
      title: v.data.title || v.fileSlug,
      url: v.url,
      group,
      home:
        v.data["dg-home"] ||
        (v.data.tags && v.data.tags.indexOf("gardenEntry") > -1) ||
        false,
      outBound: extractLinks(v.template.frontMatter.content),
      neighbors: new Set(),
      backLinks: new Set(),
      noteIcon: v.data.noteIcon || process.env.NOTE_ICON_DEFAULT,
      hide: v.data.hideInGraph || false,
    };
    stemURLs[fpath] = v.url;
    if (
      v.data["dg-home"] ||
      (v.data.tags && v.data.tags.indexOf("gardenEntry") > -1)
    ) {
      homeAlias = v.url;
    }
  });
  Object.values(nodes).forEach((node) => {
    let outBound = new Set();
    node.outBound.forEach((olink) => {
      let link = (stemURLs[olink] || olink).split("#")[0];
      outBound.add(link);
    });
    node.outBound = Array.from(outBound);
    node.outBound.forEach((link) => {
      let n = nodes[link];
      if (n) {
        n.neighbors.add(node.url);
        n.backLinks.add(node.url);
        node.neighbors.add(n.url);
        links.push({ source: node.id, target: n.id });
      }
    });
  });
  Object.keys(nodes).map((k) => {
    nodes[k].neighbors = Array.from(nodes[k].neighbors);
    nodes[k].backLinks = Array.from(nodes[k].backLinks);
    nodes[k].size = nodes[k].neighbors.length;
  });
  return {
    homeAlias,
    nodes,
    links,
  };
}
exports.wikiLinkRegex = wikiLinkRegex;
exports.internalLinkRegex = internalLinkRegex;
exports.extractLinks = extractLinks;
exports.getGraph = getGraph;
