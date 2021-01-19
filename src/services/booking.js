import Axios from 'axios'

class BookingService{
    fetchBooking(idShowtime){
        // console.log(idShowtime);
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idShowtime}`
        })
    }
    bookTicket(data){
        // console.log(idShowtime);
        return Axios({
            method:"POST",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            data
        })
    }
    
}

export default BookingService