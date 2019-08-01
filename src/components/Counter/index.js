import React, {useState} from 'react'

class Class extends React.Component {
    state = {
        count: 0
    }
    handleAdd = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

function Function() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default function () {
    return(
        <div>
            <Class />
            <Function />
        </div>
    )
}
