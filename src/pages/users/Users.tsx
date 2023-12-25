import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserTable from "../../components/adminUserTable/UserTable.tsx";

function Users() {
  
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
