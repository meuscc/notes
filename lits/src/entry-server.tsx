import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from './App'
import { PageData } from './pages/PageData'

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <PageData.Provider value={990}>
        <App />
      </PageData.Provider>
    </StaticRouter>,
  )
}
