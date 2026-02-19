import "./src/styles/global.css"

import React from "react"

import "katex/dist/katex.min.css"
import "prismjs/plugins/command-line/prism-command-line.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/themes/prism-tomorrow.css"

import CustomConfigProdiver from "./src/context/antd/CustomConfigProdiver"
import reportWebVitals from "./src/reportWebVitals"

export const wrapRootElement = ({ element }) => {
  return <CustomConfigProdiver element={element} />
}

export const onClientEntry = () => {
  reportWebVitals()
}
