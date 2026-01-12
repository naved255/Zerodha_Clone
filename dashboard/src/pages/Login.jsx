import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "./GeneralContext";


const Login = ({ auth, setAuth }) => {

    const navigate = useNavigate();

    const { seterror } = useContext(GeneralContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post(
                "https://zerodha-backend-tvro.onrender.com/login",
                form,
                { withCredentials: true }
            );

            console.log("outer", res);
            if (res.data.success) {
                console.log("inner")
                setAuth(true);
                navigate("/");
            } else {
                setError(res.data.message);
            }



        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
            seterror(error.message || "Something went wrong");
        }

        setForm({
            email: "",
            password: ""
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Login
                </h2>

                {error && (
                    <p className="text-red-500 text-sm text-center mb-4">
                        {error}
                    </p>
                )}

                <input
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <input
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>

                <Link className="text-blue-500 text-xs py-1.5" to={"https://zerodha-clone-six-sooty.vercel.app/"}>Create account</Link>
            </form>
        </div>
    );
};

export default Login;
