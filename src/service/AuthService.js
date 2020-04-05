import api from "../api/api";
import {Redirect} from "react-router-dom";
import React from "react";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'username';
export const TOKEN_SESSION_ATTRIBUTE_NAME = 'userToken';
export const USER_ROLE = 'userRole';
export const USER_ID = 'userId';

class AuthService {

    executeJwtAuthenticationService(username, password) {
        let data = {
            username,
            password
        };
        let json = JSON.stringify(data);
        return api.get("/User/" + username);
    }

    registerSuccessfulLoginForJwt(userName, data) {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userName);
        localStorage.setItem(USER_ROLE, data.roleId);
        localStorage.setItem(USER_ID, data.id);
        this.setupAxiosInterceptors(this.createJWTToken(data.token))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(TOKEN_SESSION_ATTRIBUTE_NAME);
        return <Redirect to="/home"/>;
    }

    isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return user !== null;
    }

    getUserRole() {
        return localStorage.getItem(USER_ROLE);
    }

    getUserId() {
        return localStorage.getItem(USER_ID);
    }

    setupAxiosInterceptors(token) {
        localStorage.setItem(TOKEN_SESSION_ATTRIBUTE_NAME, token);
        api.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token;
                }
                return config;
            }
        );
    }
}

export default new AuthService();