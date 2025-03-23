import React, { useState } from "react";
import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from "antd";

const AdminDashboard: React.FC = () => {
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
      >
        Bill is a cat.
      </div>
    </>
  );
};

export default AdminDashboard;
