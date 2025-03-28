import { Breadcrumb } from "antd";

const AdminDashboard = () => {
    return (
        <>
            <Breadcrumb className="bg-orange-400!">
                <Breadcrumb.Item className="px-3">Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                }}
                className="bg-orange-300! m-3! shadow-2xl! shadow-black! rounded-2xl!"
            >
                Bill is a cat.
            </div>
        </>
    );
};

export default AdminDashboard;
