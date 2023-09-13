import React from 'react';
import { useSelector } from "react-redux";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  
  return (
    <div>AccountPage</div>
  )
}

export default AccountPage