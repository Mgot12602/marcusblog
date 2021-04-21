import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Blockquote from "./src/components/Mdx/blockquote"
import PrismWrapper from "./src/components/Mdx/code"
import fancy from "./fancy"

const components = {
  h5: Blockquote,
  blockquote: Blockquote,
  h6: fancy,
  h4: () => <span> This is pamtumakas</span>,
  pre: PrismWrapper,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
