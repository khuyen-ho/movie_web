import UserService from "./user";
import MovieService from './movie'
import CinemaSystemService from './cinema'
import BookingService from "./booking";

export const userService = new UserService()
export const movieService = new MovieService()
export const cinemaSystemService = new CinemaSystemService()
export const bookingService = new BookingService()