// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-about-page-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/templates/about-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/templates/blog-post.js")),
  "component---src-templates-product-page-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/templates/product-page.js")),
  "component---src-templates-resource-page-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/templates/resource-page.js")),
  "component---src-templates-tags-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/templates/tags.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/404.js")),
  "component---src-pages-contact-examples-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/contact/examples.js")),
  "component---src-pages-contact-file-upload-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/contact/file-upload.js")),
  "component---src-pages-contact-index-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/contact/index.js")),
  "component---src-pages-contact-thanks-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/contact/thanks.js")),
  "component---src-pages-index-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/index.js")),
  "component---src-pages-tags-index-js": preferDefault(require("/home/john/Documents/Projects/gitlab/peronalsite/src/pages/tags/index.js"))
}

