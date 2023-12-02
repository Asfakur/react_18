import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
    const {users, error, isLoading, setUsers, setError } = useUsers();

    const deleteUser = (id: number) => {
        const originalUser = [...users];
        setUsers(users.filter((user) => user.id !== id));

        userService.delete(id).catch((err) => {
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

        userService
            .create(newUser)
            .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
            .catch((err) => {
                setError(err.message);
                setUsers(originalUser);
            });
    };

    const update = (user: User) => {
        const originalUser = [...users];
        const updatedUser = {
            ...user,
            name: user.name + "!",
        };

        setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
        userService.update(updatedUser).catch((err) => {
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
                                onClick={() => update(user)}
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
