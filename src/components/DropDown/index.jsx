import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function DropDown(props) {
  const styles = useStyles();
  return (
    <FormControl className={useStyles().formControl}>
      <Select
        defaultValue={0}
        classes={{
          select: styles.select,
          icon: styles.icon,
        }}
      >
        <MenuItem value={0}>Thành Phố</MenuItem>
        <MenuItem value={1}>Hồ Chí Minh</MenuItem>
        <MenuItem value={2}>Đà Nẵng</MenuItem>
        <MenuItem value={3}>Hải Phòng</MenuItem>
        <MenuItem value={4}>Biên Hoà</MenuItem>
        <MenuItem value={5}>Nha Trang</MenuItem>
        <MenuItem value={6}>Bình Dương</MenuItem>
        <MenuItem value={7}>Phan Thiết</MenuItem>
        <MenuItem value={8}>Hạ Long</MenuItem>
        <MenuItem value={9}>Cần Thơ</MenuItem>
        <MenuItem value={10}>Vũng Tàu</MenuItem>
        <MenuItem value={11}>Quy Nhơn</MenuItem>
        <MenuItem value={12}>Huế</MenuItem>
        <MenuItem value={13}>Long Xuyên</MenuItem>
        <MenuItem value={14}>Thái Nguyên</MenuItem>
        <MenuItem value={15}>Buôn Ma Thuột</MenuItem>
        <MenuItem value={16}>Bắc Giang</MenuItem>
        <MenuItem value={17}>Bến Tre</MenuItem>
        <MenuItem value={18}>Việt Trì</MenuItem>
        <MenuItem value={19}>Ninh Bình</MenuItem>
        <MenuItem value={20}>Thái Bình</MenuItem>
        <MenuItem value={21}>Vinh</MenuItem>
        <MenuItem value={22}>Bảo Lộc</MenuItem>
        <MenuItem value={23}>Đà Lạt</MenuItem>
        <MenuItem value={24}>Trà Vinh</MenuItem>
        <MenuItem value={25}>Yên Bái</MenuItem>
        <MenuItem value={26}>Kiên Giang</MenuItem>
        <MenuItem value={27}>Vĩnh Long</MenuItem>
        <MenuItem value={28}>Cà Mau</MenuItem>
        <MenuItem value={29}>Hậu Giang</MenuItem>
        <MenuItem value={30}>Tây Ninh</MenuItem>
        <MenuItem value={31}>Tuyên Quang</MenuItem>
        <MenuItem value={32}>Thanh Hóa</MenuItem>
        <MenuItem value={33}>Nam Định</MenuItem>
        <MenuItem value={34}>Hải Dương</MenuItem>
        <MenuItem value={35}>Gia Lai</MenuItem>
        <MenuItem value={36}>Hà Tĩnh</MenuItem>
        <MenuItem value={37}>Phú Yên</MenuItem>
        <MenuItem value={38}>Bạc Liêu</MenuItem>
        <MenuItem value={39}>Long An</MenuItem>
        <MenuItem value={40}>Đồng Hới</MenuItem>
        <MenuItem value={41}>Hà Nam</MenuItem>
        <MenuItem value={42}>Bắc Ninh</MenuItem>
        <MenuItem value={43}>Quảng Trị</MenuItem>
        <MenuItem value={44}>Kon Tum</MenuItem>
        <MenuItem value={45}>Sóc Trăng</MenuItem>
        <MenuItem value={46}>Sơn La</MenuItem>
        <MenuItem value={47}>Lạng Sơn</MenuItem>
        <MenuItem value={48}>Quảng Ngãi</MenuItem>
        <MenuItem value={49}>Mỹ Tho</MenuItem>
        <MenuItem value={50}>Đồng Tháp</MenuItem>
        <MenuItem value={51}>Hưng Yên</MenuItem>
      </Select>
    </FormControl>
  );
}
