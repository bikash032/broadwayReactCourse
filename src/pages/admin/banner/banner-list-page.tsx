import { Breadcrumb, Table } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { FaHome, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router";

const BannerList = () => {
    return (
        <>
            <Breadcrumb className="bg-orange-400! text-white! font-bold!">
                <NavLink
                    to={"/admin"}
                    className="font-bold! text-white! flex!  "
                >
                    <FaHome className="flex! mt-1! mr-1" /> Dashboard /
                </NavLink>
                Admin
                <Breadcrumb.Item className="font-bold! text-white! ml-1!"></Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                }}
                className="bg-blue-100! m-3! shadow-2xl! shadow-black! rounded-2xl!"
            >
                <div className="flex justify-between">
                    <h1 className="text-white! bg-amber-500! rounded-md! px-3! font-semibold  text-2xl">
                        Banner List
                    </h1>
                    <NavLink
                        to="/admin/banner/create"
                        className="  bg-orange-400! text-white! font-bold flex rounded-md! p-2 hover:cursor-pointer  "
                    >
                        <AiOutlinePlus className="mt-1" />
                        Banner Add
                    </NavLink>
                </div>
                <div className="flex mt-5">
                    <Table
                        className="w-full"
                        columns={[
                            {
                                title: "Title",
                            },
                            {
                                title: "Link",
                            },
                            {
                                title: "Status",
                            },
                            {
                                title: "Image",
                            },
                            {
                                title: "Action",
                            },
                        ]}
                    />

                    {/* <table className="w-full mt-5">
                        <thead className="w-full border mt-5 bg-amber-500 text-white ">
                            <tr>
                                <th className=" p-4 border-2 border-orange-400  text-lg ">
                                    Title
                                </th>
                                <th className=" p-4 border-2 border-orange-400  text-lg ">
                                    Link
                                </th>
                                <th className=" p-4 border-2 border-orange-400  text-lg ">
                                    Status
                                </th>
                                <th className=" p-4 border-2 border-orange-400  text-lg ">
                                    Image
                                </th>
                                <th className=" p-4 border-2 border-orange-400  text-lg ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="size-full">
                            <tr>
                                <td className=" border-amber-500 border">
                                    Banner
                                </td>
                                <td className=" border-amber-500 border">
                                    Http://google.com
                                </td>
                                <td className=" border-amber-500 border">
                                    Active
                                </td>
                                <td className=" border-amber-500 border">
                                    <img
                                        src="px-2 border-amber-500 border"
                                        alt="image"
                                    />
                                </td>
                                <td className=" border-amber-500 border flex">
                                    <NavLink
                                        to="/admin/banenr/123123"
                                        className="flex!"
                                    >
                                        Edit
                                    </NavLink>
                                    <NavLink
                                        to="/admin/banenr/123123"
                                        className="flex mx-2"
                                    >
                                        <FaTrash className="" />
                                        Delete
                                    </NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </>
    );
};
export default BannerList;
