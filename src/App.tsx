import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        axios
            .get<User[]>("https://jsonplaceholder.typicode.com/users", {
                signal: controller.signal,
            })
            .then((res) => {
                setLoading(false);
                setUsers(res.data);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    const deleteUser = (id: number) => {
        const originalUser = [...users];
        setUsers(users.filter((user) => user.id !== id));
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .catch((err) => {
                setError(err.message);
                setUsers(originalUser);
            });
    };

    const updateUser = (user: User) => {
        const originalUser = [...users];
        const updatedUser = {
            ...user,
            name: user.name + "!",
        };

        setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
        axios
            .put(
                `https://jsonplaceholder.typicode.com/users/${user.id}`,
                updatedUser
            )
            .catch((err) => {
                setError(err.message);
                setUsers(originalUser);
            });
    };

    const addUser = () => {
        const newUser = {
            id: 0,
            name: "John",
        };
        const originalUser = [...users];
        setUsers([newUser, ...users]);
        axios
            .post("https://jsonplaceholder.typicode.com/users/", newUser)
            .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
            .catch((err) => {
                setError(err.message);
                setUsers(originalUser);
            });
    };

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={addUser}>
                Add User
            </button>

            <ul className="list-group">
                {users.map((user) => (
                    <li
                        className="list-group-item d-flex justify-content-between"
                        key={user.id}
                    >
                        {user.name}
                        <div>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="btn btn-info mx-1"
                                onClick={() => updateUser(user)}
                            >
                                Update
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
