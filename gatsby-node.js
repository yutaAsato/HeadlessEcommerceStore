const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allShopifyProduct(
        sort: { fields: [title] }
        filter: { productType: { ne: "tees" } }
      ) {
        nodes {
          id
          handle
          productType
        }
      }
    }
  `)

  //product page ===================================================

  result.data.allShopifyProduct.nodes.forEach(node => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        productId: node.id,
        productType: node.productType,
      },
    })
  })

  //catgeory page =====================================================

  //find categories
  const categoriesFound = []

  result.data.allShopifyProduct.nodes.forEach(cat => {
    if (categoriesFound.indexOf(cat.productType) === -1) {
      categoriesFound.push(cat.productType)
    }
  })

  //filter any falsy results
  const filteredCategoriesFound = categoriesFound.filter(Boolean)
  console.log(filteredCategoriesFound)

  filteredCategoriesFound.forEach(cat => {
    createPage({
      path: `/${cat}`,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        productType: cat,
      },
    })
  })
}
