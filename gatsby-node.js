const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allStrapiProject {
        nodes {
          slug
        }
      }
      tips: allFile(
        filter: { sourceInstanceName: { eq: "tips" }, ext: { eq: ".mdx" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
        tipCategories: distinct(field: childMdx___frontmatter___category)
      }
      posts: allFile(
        filter: { sourceInstanceName: { eq: "posts" }, ext: { eq: ".mdx" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
        postCategories: distinct(field: childMdx___frontmatter___category)
      }
    }
  `)

  result.data.projects.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve(`src/templates/project-template.js`),
      context: {
        slug: project.slug,
      },
    })
  })
  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.childMdx.frontmatter.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug: post.childMdx.frontmatter.slug,
      },
    })
  })
  result.data.posts.postCategories.forEach(category => {
    createPage({
      path: `/post-categories/${category}`,
      component: path.resolve(`src/templates/post-category-template.js`),
      context: {
        category: category,
      },
    })
  })
  result.data.tips.tipCategories.forEach(category => {
    createPage({
      path: `/tip-categories/${category}`,
      component: path.resolve(`src/templates/tip-category-template.js`),
      context: {
        category: category,
      },
    })
  })
  result.data.tips.nodes.forEach(tip => {
    createPage({
      path: `/tips/${tip.childMdx.frontmatter.slug}`,
      component: path.resolve(`src/templates/tip-template.js`),
      context: {
        slug: tip.childMdx.frontmatter.slug,
      },
    })
  })
}
