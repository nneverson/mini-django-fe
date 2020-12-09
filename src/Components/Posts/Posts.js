import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = ({posts, setPosts}) => {
	useEffect(function () {
		axios
			.get('http://localhost:8000/posts/')
			.then((res) => {
				setPosts(res.data);
			})
			.catch(console.error);
	}, []);
	if (!posts) {
		return <h2>Loading ...</h2>;
	}
	return (
		<div>
			{posts.map((post) => {
				return (
					<div>
						<h3> {post.body}</h3>
						<p>{post.author}</p>
					</div>
				);
			}).reverse()}
		</div>
	);
};

export default Posts;
