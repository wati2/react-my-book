import React from "react"
import logo from "./logo.svg"
import "./App.scss"

import Posts from "./components/posts"
import PostInput from "./components/postInput"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="mainContent">
        <PostInput />
        <Posts />
      </div>
    </div>
  )
}

export default App
