import Axios from 'axios'

class MovieService{
    fetchMovieDetail(movieTitle){
        return Axios({
            method:"GET",
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${movieTitle}`
        })
    }
}

export default MovieService