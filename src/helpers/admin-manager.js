export const checkAccountExist = (id, accounts) => {
  if (accounts.length > 0) {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].taiKhoan === id) {
        return true;
      }
    }
    return false;
  }
  return false;
};
