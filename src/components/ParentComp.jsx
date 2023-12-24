import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Usman"
      }
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({
                name: "Ali"
            })
        }, 2000)
    }
  render() {
    
    console.log("*******parent*******")
    return (
      <div>
        ParentComp
          <RegularComponent name={this.state.name}/>
          <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp