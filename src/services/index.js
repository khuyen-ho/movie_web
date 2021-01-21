import UserService from "./user";
import MovieService from './movie'
import AccountService from "./admin";

export const userService = new UserService()
export const movieService = new MovieService()
export const accountService = new AccountService()
