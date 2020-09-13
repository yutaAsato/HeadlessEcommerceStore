import React from "react"
import { ContextProvider } from "gatsby-theme-shopify-manager"

export const App = ({ children }) => {
  const shopName = "noavailapparel.com"
  const accessToken = "c145643f84a63da1d9f45106fc068908"

  return (
    <ContextProvider shopName={shopName} accessToken={accessToken}>
      {children}
    </ContextProvider>
  )
}
