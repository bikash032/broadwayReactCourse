import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from "antd";
import {
    FaHome,
    FaImage,
    FaKey,
    FaPowerOff,
    FaShoppingBag,
    FaShoppingCart,
} from "react-icons/fa";
import {
    FaB,
    FaMessage,
    FaSitemap,
    FaUser,
    FaUserGroup,
} from "react-icons/fa6";
import { NavLink } from "react-router";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(
        <NavLink to={"/admin"} className="font-bold! text-xl!">
            Dashboard
        </NavLink>,
        "1",
        <FaHome className="font-bold! text-xl!" />
    ),
    getItem(
        <NavLink to={"/admin/banner"} className="font-bold! text-xl!">
            Banner
        </NavLink>,
        "2",
        <FaImage className="font-bold! text-xl!" />
    ),
    getItem(
        <NavLink to={"/admin/brand"} className="font-bold! text-xl!">
            Brand
        </NavLink>,
        "3",
        <FaB className=" text-2xl!" />
    ),
    getItem(
        <NavLink to={"/admin/category"} className="font-bold! text-xl!">
            Category
        </NavLink>,
        "4",
        <FaSitemap className="text-2xl!" />
    ),
    getItem(
        <NavLink to={"/admin/users"} className="font-bold! text-xl!">
            Users
        </NavLink>,
        "5",
        <FaUserGroup className="text-2xl!" />
    ),
    getItem(
        <NavLink to={"/admin/product"} className="font-bold! text-xl!">
            Product
        </NavLink>,
        "6",
        <FaShoppingBag className="text-2xl!" />
    ),
    getItem(
        <NavLink to={"/admin/cart-order"} className="font-bold! text-xl!">
            Cart and Order
        </NavLink>,
        "7",
        <FaShoppingCart className="text-2xl!" />
    ),
    getItem(
        <NavLink to={"/admin/message"} className="font-bold! text-xl!">
            Message
        </NavLink>,
        "7",
        <FaMessage className="text-2xl!" />
    ),
];
const userMenu: MenuItem[] = [
    getItem("Profile", "1", <FaUser className="text-2xl!" />),
    getItem("Change Password", "2", <FaKey className="text-2xl!" />),
    getItem("Logout", "3", <FaPowerOff className="text-2xl!" />),
];

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {} = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }} className="bg-orange-500!">
            <Sider
                className="bg-orange-500!"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className=" size-4 bg-orange-500!" />
                <div>
                    <img src="darazlog.png" alt="" />
                </div>
                <Menu
                    className="bg-orange-500! "
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header className="bg-orange-500! relative!" />
                <div className="bg-orange-500! text-white! text-2xl! flex justify-end! ">
                    <Dropdown
                        menu={{ items: userMenu }}
                        className="text-white! text-2xl! flex justify-end! pr-10!"
                    >
                        {/* <a onClick={(e) => e.preventDefault()}> */}
                        <Button className="bg-orange-500! text-white! font-bold! border! border-orange-500!  ">
                            Admin
                        </Button>

                        {/* </a> */}
                    </Dropdown>
                </div>

                <Content className="bg-blue-100! ">
                    {/* <Breadcrumb className="bg-orange-400!">
            <Breadcrumb.Item className="px-3">Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div> */}
                </Content>
                <Footer className=" flex justify-center  text- bg-blue-100!">
                    Daraz ©{new Date().getFullYear()} Created by @Bikash
                    Bishokarma
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
