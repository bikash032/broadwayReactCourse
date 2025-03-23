import { NavLink } from "react-router";
import SectionTitle from "../../../component/section/title/section-title.components";
import { greetingMessage } from "../../../utilities/helpers";
// import FormItemInput from "antd/es/form/FormItemInput";

const RegisterPage = () => {
    return (
        <>
            <div className="bg-teal-100 w-full h-full mb-[-10px]" style={{ backgroundImage: 'url("/daraz.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex flex-col md:flex-row w-full h-full">
                    <div className=" text-white w-full md:w-1/4 relative">
                            <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt=""  className="mt-5"/>
                        <SectionTitle
                            subTitle={`${greetingMessage()}`}
                            PageTitle="welcome!!!"
                            classes=""
                        />
                    <img src="https://gw.alicdn.com/imgextra/i2/O1CN01CbATtG1myaDFcaPFt_!!6000000005023-2-tps-1173-790.png" alt="" className="mt-40" />
                    </div>
                    <div className="flex flex-col border-orange-500 bg-blue-100 rounded-4xl border-100 w-full md:w-3/4">
                        <div className="text-2xl mb-4 font-bold w-full text-white bg-orange-500 text-center py-5">
                            Register!!!
                        </div>
                      
                        <form
                            action=""
                            className="flex flex-col space-y-4 mt-5 m-5 border-orange-600 rounded-b-full"
                        >
                            <div className="flex flex-row gap-3 justify-center">
                                <div className="text-teal-700">
                                    <label>Username:</label>
                                </div>
                                <div className="px-2.5 w-full">
                                    <input
                                        placeholder="Full Name....."
                                        className="border rounded px-3 bg-teal-100 py-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 justify-center">
                                <div className="text-teal-700">
                                    <label>Username:</label>
                                </div>
                                <div className="px-2.5 w-full">
                                    <input
                                        placeholder="Full Name....."
                                        className="border rounded px-3 bg-teal-100 py-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 justify-center">
                                <div className="text-teal-700">
                                    <label>Username:</label>
                                </div>
                                <div className="px-2.5 w-full">
                                    <input
                                        placeholder="Full Name....."
                                        className="border rounded px-3 bg-teal-100 py-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 justify-center">
                                <div className="text-teal-700">
                                    <label>Username:</label>
                                </div>
                                <div className="px-2.5 w-full">
                                    <input
                                        placeholder="Full Name....."
                                        className="border rounded px-3 bg-teal-100 py-1 w-full"
                                    />
                                </div>
                            </div>
                            <select className="p-2 border rounded w-full">
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div className="flex flex-row gap-3 justify-center">
                                <div className="text-teal-700">
                                    <label>Username:</label>
                                </div>
                                <div className="px-2.5 w-full">
                                    <input
                                        placeholder="Full Name....."
                                        className="border rounded px-3 bg-teal-100 py-1 w-full"
                                    />
                                </div>
                            </div>
                            <input
                                type="file"
                                className="p-2 border rounded w-full"
                            />
                            <div className="flex flex-row gap-3 justify-center">
                                <div className="text-teal-700">
                                    <label>Username:</label>
                                </div>
                                <div className="px-2.5 w-full">
                                    <input
                                        placeholder="Full Name....."
                                        className="border rounded px-3 bg-teal-100 py-1 w-full"
                                    />
                                </div>
                            </div>
                            <select className="p-2 border rounded w-full">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 text-white rounded w-100 place-items-end"
                            >
                                Register
                            </button>
                            <div className="flex space-x-5 justify-center">
                                <div className="text-sm text-black flex space-x-1 mt-3">
                                    <p>Don't Have Account?</p>
                                    <NavLink
                                        to="/"
                                        className="text-sm italic underline hover:cursor-pointer"
                                    >
                                        Login here!!
                                    </NavLink>
                                </div>
                                <hr className="mt-5 text-teal-900" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RegisterPage;
