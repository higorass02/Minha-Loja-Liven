// import React from 'react'
import Routes from './src/routes'
//
// const App = () => {
//     return(
//         <Routes/>
//     )
// }
// export default App
//


import React from 'react'
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import reducer from "./src/store/reduces/reducer"

const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const App = () => {
    return(
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}
export default App