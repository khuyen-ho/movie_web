import UserService from "./user";
import MovieService from './movie'
import AccountService from "./admin";
import CinemaSystemService from './cinema'
import BookingService from "./booking";

export const userService = new UserService()
export const movieService = new MovieService()
export const cinemaSystemService = new CinemaSystemService()
export const bookingService = new BookingService()
export const accountService = new AccountService()

