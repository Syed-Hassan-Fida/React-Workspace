import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import {
    TextField, Button, Container, Typography
} from '@mui/material';

const PostRequest = () => {
    const [formData, setFormData] = useState({
        userId: "",
        title: "",
        body: ""
    })
    const [data, setData] = useState({})
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const inputRef = useRef()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            const apiResp = response.data
            setData(apiResp)
            setSuccess("Data Saved successfully...")
        }
        catch (error) {
            console.error(error)
            setError("Api failed to save data...")
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Registration Form
                </Typography>
                <Typography style={{ background: "#00c30a", color: "white" , textAlign: "center"}}>
                    {
                        success ? <div>{success}</div> : null
                    }
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        fullWidth
                        label="User Id"
                        variant="outlined"
                        name="userId"
                        value={formData.userId}
                        onChange={handleInputChange}
                        margin="normal"
                        required
                        inputRef={inputRef}
                    />
                    <TextField
                        fullWidth
                        label="Title"
                        variant="outlined"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Body"
                        variant="outlined"
                        multiline
                        rows={4}
                        name="body"
                        value={formData.body}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
            </Container>
            <Container maxWidth="sm" style={{background: "antiquewhite", padding: "10px", margin: "10px", borderRadius: "15px"}}>

                {
                    data ?
                        <React.Fragment >
                            <h3>Title: {data.title}</h3>
                            <p>Body: {data.body}</p>
                        </React.Fragment>
                        : error ? <div>{error}</div> : null
                }
            </Container>
        </div>
    )
}

export default PostRequest