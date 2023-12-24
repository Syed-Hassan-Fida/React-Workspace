import React, { useRef, useEffect, useState } from 'react'
import {
    TextField, Button, Select, MenuItem,
    FormControl, InputLabel, Container, Typography 
} from '@mui/material';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        role: "",
        description: ""
    })

    const inputRef = useRef()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        alert(`${formData.name}`)
        e.prevent.default()
    }

    useEffect(()=>{
        inputRef.current.focus()
        console.log("ok",inputRef)
    },[])
    

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    Registration Form
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        margin="normal"
                        required
                        inputRef={inputRef}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        margin="normal"
                        required
                    />
                    <FormControl fullWidth variant="outlined" margin="normal" required>
                        <InputLabel>Role</InputLabel>
                        <Select
                            label="Role"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Register
                    </Button>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default Form