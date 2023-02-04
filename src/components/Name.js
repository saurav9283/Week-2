import React ,{ Component } from "react";

class Name extends Component {
    state = {name: "Sanjeedha Shriya!"};

    setName(name) {
        this.setState({...this.state,name})
    }

    render(){
        return (
        <>
        <h1>The name is: {this.state.name}</h1>);
        <button onClick={this.setName("Arunasree")}>Click Me</button>
        </>
        )

    };
}
export default Name;