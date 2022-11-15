import { environment } from "src/environments/environment"

const baseUrl = environment.api_url

export const getAllActorApi = `${baseUrl}/actor`

export const getAllFilmApi = `${baseUrl}/film`

export const createFilmApi = `${baseUrl}/film`

//auth

export const register = `${baseUrl}/auth/register`

export const login = `${baseUrl}/auth/login`