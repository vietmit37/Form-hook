import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const RegisterUsers = [
  "fullName",
  "gender",
  "bio",
  "status",
  "password",
  "email",
];

const ListUser = ({ dataList }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {RegisterUsers.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList?.map((user) => (
          <tr key={user.email}>
            {RegisterUsers.map((field) => (
              <td key={field}>{user[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListUser;
