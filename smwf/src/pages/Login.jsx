import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        try {
            const res = await axios.post("http://localhost:3001/login", 
                { username, password }, 
                { withCredentials: true }
            );
            setMessage(res.data.message);
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
            <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-2xl">Supermarket WIP</h1>

                <form onSubmit={handleLogin} className="flex flex-col gap-4 items-center mt-10">
                    <input className="p-2 border rounded-sm" 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input className="p-2 border rounded-sm" 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit" 
                        className="bg-blue-500 p-2 w-full text-white cursor-pointer rounded-sm hover:bg-blue-600">
                        Login
                    </button>

                    {error && <p className="text-red-500">{error}</p>}
                    {message && <p className="text-green-500">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;
