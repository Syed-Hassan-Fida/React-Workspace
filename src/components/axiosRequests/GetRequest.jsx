import React, { Component } from 'react'
import axios from 'axios'

class GetRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMessage: ''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.error(error);
            this.setState({errorMessage: "Something went wrong with api..."})
        })
    }
    render() {
        const inlineStyles = {
            display: "flex",
            flexDirection: "column",
            alignItems: "start"
        }
        const {posts, errorMessage} = this.state
        return (
            <div style={inlineStyles}>
                <h1>GetRequest</h1>
                {
                    posts.length ? posts.map((value, key)=>{
                        return (
                            <React.Fragment key={key} >
                                <h3>Title: {value.title}</h3>
                                <p>Body: {value.body}</p>
                            </React.Fragment>
                        )
                    }) : errorMessage ? <div>{errorMessage}</div> : null
                }
            </div>
        )
    }
}

export default GetRequest