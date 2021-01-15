import Axios from 'axios'

class CinemaService{
    fetchCinemaInfo(idCinemaSystem){
        //console.log(idCinemaSystem);
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idCinemaSystem}`
        })
    }
}

export default CinemaService