import React from "react";
import AccountForm from "../AccountForm";
import AccountTable from "../../components/AccountTable";
import { useSelector } from "react-redux";

const AccountManagement = (props) => {
  return (
    <>
      <AccountForm />
      <AccountTable {...props}/>
    </>
  );
};

export default AccountManagement;
