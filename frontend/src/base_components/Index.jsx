import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:3000/api';

const Index = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	useEffect(() => {
		const fetchTasks = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(`${BASE_URL}/tasks/`);
				setTasks(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTasks();
	}, []);

	if (isLoading) {
		return <div>LOADING...</div>;
	}
	if (error) {
		return <div>there is a some error</div>;
	}
	return (
		<section>
			<h1>TASKS</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<p>{task.name}</p>
						<p>{task.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Index;
