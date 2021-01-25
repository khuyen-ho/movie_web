import UserService from "./user";
import MovieService from "./movie";
import CinemaSystemService from "./cinema";
import BookingService from "./booking";
import AdminService from "./admin";
import ShowTimeService from "./showTime";

export const userService = new UserService();
export const movieService = new MovieService();
export const cinemaSystemService = new CinemaSystemService();
export const bookingService = new BookingService();
export const adminService = new AdminService();
export const showTimeService = new ShowTimeService();
