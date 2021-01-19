import React from "react";
import AccountForm from "../AccountForm";
import AccountTable from "../../components/AccountTable";
import { useSelector } from "react-redux";

const AccountManagement = () => {
  return (
    <>
      <AccountForm />
      <AccountTable />
    </>
  );
};

export default AccountManagement;
