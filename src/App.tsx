import axios, { AxiosError, CanceledError } from "axios";
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
            .catch((error) => {
                setError(error.message);
                setUsers(originalUser);
            });
    };

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <ul className="list-group">
                {users.map((user) => (
                    <li
                        className="list-group-item d-flex justify-content-between"
                        key={user.id}
                    >
                        {user.name}
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => deleteUser(user.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
