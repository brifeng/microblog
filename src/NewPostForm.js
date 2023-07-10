import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPostForm = () => {
    const INITIAL_VALUES = {
        title: "",
        description: "",
        body: ""
    }
    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_VALUES);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(f => ({
            ...f,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text"
                        value={formData.title}
                        onChange={handleChange}
                        name='title' />
                </label>
                <label>
                    Description:
                    <input type="text"
                        value={formData.description}
                        onChange={handleChange}
                        name="description" />
                </label>
                <label>
                    Body:
                    <input type="text"
                        value={formData.body}
                        onChange={handleChange}
                        name='body' />
                </label>
                <button>Save</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default NewPostForm;