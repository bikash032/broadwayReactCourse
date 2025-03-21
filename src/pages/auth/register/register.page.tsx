import { NavLink } from "react-router";
import SectionTitle from "../../../component/section/title/section-title.components";
import { greetingMessage } from "../../../utilities/helpers";
// import FormItemInput from "antd/es/form/FormItemInput";

const RegisterPage = () => {
    return (
        <>
            <div>
                <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-end m-20">
                    <div className="bg-teal-900 text-white rounded-2xl m-20 p-20">
                        <SectionTitle
                            subTitle={`${greetingMessage()}`}
                            PageTitle="welcome!!!"
                            classes=""
                        />
                    </div>
                    <div className=" flex-col p-6  border-10 items-end">
                        <div className="text-2xl mb-4 text-teal-900 font-bold">Register!!!</div>
                        <hr className="color"/>
                        <form action="" className="flex flex-col space-y-4" >
                            <input
                                placeholder="Full Name"
                                className="p-2 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2 border rounded"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="p-2 border rounded"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="p-2 border rounded"
                            />
                            <select className="p-2 border rounded">
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="p-2 border rounded"
                            />
                            <input type="file" className="p-2 border rounded" />
                            <input
                                type="text"
                                placeholder="Address"
                                className="p-2 border rounded"
                            />
                            <select className="p-2 border rounded">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 text-white rounded"
                            >
                                Register
                            </button>
                            <div className="flex space-x-5 justify-center">
                                <div className="text-sm text-black  flex space-x-1 mt-3">
                                    <p>Don't Have Account?</p>
                                    <NavLink
                                        to="/"
                                        className="text-sm italic underline hover:cursor-pointer"
                                    >
                                        Login here!!
                                    </NavLink>
                                </div>
                                <hr className="mt-5 text-teal-900 " />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RegisterPage;
