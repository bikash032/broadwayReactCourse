import { Breadcrumb, Button, Table } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { FaHome, FaPen, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router";

const BannerList = () => {
    const data = [
        {
            id: "a9cccf96-7b0b-49ad-bb4f-f1d5a4963689",
            title: "Banner1",
            url: "https://google.com",
            status: "active",
            image: {
                secure_url:
                    "https://res.cloudinary.com/dv0ichgse/image/upload/v1742913640/mern-36/banner/bp8gr4aihdakxyvbxl4e.jpg",
                optimized_url:
                    "https://res.cloudinary.com/dv0ichgse/image/upload/f_auto,q_auto/v1/mern-36/banner/bp8gr4aihdakxyvbxl4e?_a=BAMCkGa40",
            },
            createdAt: "2025-03-25T14:34:35.009Z",
            updatedAt: "2025-03-25T14:34:35.009Z",
        },
        {
            id: "3de6a90f-e229-408c-bae3-c9b57877b367",
            title: "Banner Updated New",
            url: "https://google.com",
            status: "active",
            image: {
                secure_url:
                    "https://res.cloudinary.com/dv0ichgse/image/upload/v1742913549/mern-36/banner/sojcuslw2ijyojlaofff.jpg",
                optimized_url:
                    "https://res.cloudinary.com/dv0ichgse/image/upload/f_auto,q_auto/v1/mern-36/banner/sojcuslw2ijyojlaofff?_a=BAMCkGa40",
            },
            createdAt: "2025-03-25T14:34:35.009Z",
            updatedAt: "2025-03-25T14:34:35.009Z",
        },
    ];
    const ColumnList = [
        {
            title: <span>Title</span>,
            dataIndex: "title",
            render: (val: string) => (
                <>
                    <a href={val}>{val}</a>
                </>
            ),
        },
        {
            title: "Link",
            dataIndex: "url",
            render: (val: string) => (
                <>
                    <a className="underline!" href={val}>
                        {val}
                    </a>
                </>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (val: string) =>
                val === "active" ? (
                    <Button variant="filled" color="magenta">
                        Active
                    </Button>
                ) : (
                    <Button variant="filled" color="red">
                        In-Active
                    </Button>
                ),
        },
        {
            title: "Image",
            // dataIndex:"image",
            render: (_: any, row: any) => (
                <img
                    src={row.image.optimized_url}
                    alt=""
                    className="w-28 border rounded-md "
                />
            ),
        },
        {
            title: "Action",
            render: (_: any, row: any) => (
                <>
                    <div className="flex">
                        <NavLink
                            to={"/admin/banner" + row.id}
                            className={
                                "me-3! w-8! h-10! flex items-center justify-center text-white!  bg-orange-500! rounded-full"
                            }
                        >
                            <FaPen />
                        </NavLink>
                        <NavLink
                            to={"/admin/banner" + row.id}
                            className={
                                "me-3! w-8! h-10! bg-red-500! flex items-center justify-center text-white! rounded-full"
                            }
                        >
                            <FaTrash />
                        </NavLink>
                    </div>
                </>
            ),
        },
    ];
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
                        dataSource={data}
                        columns={ColumnList}
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
