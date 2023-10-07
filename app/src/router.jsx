import { createBrowserRouter } from "react-router-dom"

const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.jsx')

const routes = Object.keys(ROUTES).map((route) => {
    const path = route
    .replace(/\/src\/pages|index|\.jsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

    const Element = ROUTES[route].default
    return { path, element: <Element /> }
})

export default createBrowserRouter(routes)