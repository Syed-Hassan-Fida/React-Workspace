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

    const inputRef = useRef()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = e => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
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
        </div>
    )
}

export default PostRequest