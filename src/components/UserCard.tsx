import { useEffect, useState } from 'react';

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
};

const UserCard = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then((res) => {
				if (!res.ok) {
					throw new Error('Failed to fetch user');
				}
				return res.json();
			})

			//here we are using data to be of type User which we defined
			.then((data: User) => {
				setUser(data);
				setError(null);
			})
			// err: Error means here in catch block it will check the err should be of javascript Error type
			.catch((err: Error) => {
				setError(err.message);
				setUser(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...........</div>;
	}
	if (error) {
		return <div>{error}</div>;
	}
	return (
		<div>
			<h3>User Info</h3>
			<p>Name: {user?.name}</p>
			<p>Email: {user?.email}</p>
		</div>
	);
};

export default UserCard;
