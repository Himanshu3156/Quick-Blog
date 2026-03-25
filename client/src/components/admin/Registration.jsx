import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { axios, setToken } = useAppContext();
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/user/register", {
                name,
                email,
                password,
            });
            if (data.success) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                toast.success(data.message);
                navigate("/admin");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form
                onSubmit={onSubmitHandler}
                className="flex flex-col gap-4 bg-white p-8 sm:p-10 border border-gray-200 shadow-2xl rounded-2xl w-full max-w-md"
            >
                <div className="text-center mb-2">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        <span className="text-primary">Create</span> Account
                    </h2>
                    <p className="text-gray-500 mt-2 font-light">Join us to start blogging</p>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                        className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        type="email"
                        placeholder="example@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Password</label>
                    <input
                        className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        type="password"
                        placeholder="********"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full py-3.5 mt-4 font-bold bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/95 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                    type="submit"
                >
                    Register
                </button>
                <p className="text-center text-sm text-gray-600 mt-2">
                    Already have an account?{" "}
                    <span
                        className="text-primary font-semibold cursor-pointer hover:underline"
                        onClick={() => navigate("/admin")}
                    >
                        Login here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Registration;
