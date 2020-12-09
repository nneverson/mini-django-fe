import React, { useState } from 'react';
import axios from 'axios';
import Posts from '../Posts/Posts';

const Create = ({posts, setPosts}) => {
	const [form, setForm] = useState({ body: '', author: '' });
	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault() 
        axios({method: 'POST', url: 'http://localhost:8000/posts/', data: form})
        .then(res => {
            setPosts([...posts, res.data ])
        });
    }
	return (
		<div>
			<form id='newpost' onSubmit={handleSubmit}>
				<label htmlFor='body'>New Post</label>
				<textarea
					id='body'
					form_id='newpost'
					maxLength={300}
					required
					value={form.body}
					onChange={handleChange}
				/>
				<label htmlFor='author'>Your name</label>
				<input
					id='author'
					required
					value={form.author}
					onChange={handleChange}
				/>
				<button type='submit'>submit </button>
			</form>
		</div>
	);
};

export default Create;
