import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts/Posts'
import Create from './Components/Create/Create'
import {useState} from 'react'


function App() {
	const [posts, setPosts] = useState(null);
  return (
		<div className='App'>
			<h1>GA Bulletin Board</h1>

			<Posts posts={posts} setPosts={setPosts} />

			<Create posts={posts} setPosts={setPosts} />
		</div>
	);
}

export default App;
