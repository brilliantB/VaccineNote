import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useHistory } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import AuthProvider from "./context/providers/AuthProvider";
import { createBrowserHistory } from "history";
import PostProvider from "./context/providers/PostProvider";
import PostsProvider from "./context/providers/PostsProvider";
import ProfileProvider from "./context/providers/ProfileProvider";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <ProfileProvider>
        <PostsProvider>
          <PostProvider>
            <AuthProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </AuthProvider>
          </PostProvider>
        </PostsProvider>
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
//provider 추가해주고, 안으로 갈수록 우선순위 증가

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
