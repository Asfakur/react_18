import { useState } from "react";

function App() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: ''
    });
    const [isLoading, setLoading] = useState(false);
    return (
        <div>
            {person.firstName + ' ' + person.lastName}
        </div>
    );
}

export default App;
