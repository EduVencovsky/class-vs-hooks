import React, { useState, useEffect } from "react";
import { lorem } from "../../util";

class Class extends React.Component {
  state = {
    scroll: window.scrollY
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleAdd = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <p>{this.state.scroll}</p>
        <p style={{ color: "red" }}>Try Scrolling the window</p>
      </div>
    )
  }
}

function Function() {
  const [scroll, setScroll] = useState(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
        setScroll(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)    
    return () => {
        window.removeEventListener("scroll", handleScroll)
    }      
  }, [])

  return (
    <div>
      <p>{scroll}</p>
      <p style={{ color: "red" }}>Try Scrolling the window</p>
    </div>
  )
}

export default function() {
  return (
    <div>
      <Class />
      <Function />
      <div>{lorem}</div>
    </div>
  );
}
