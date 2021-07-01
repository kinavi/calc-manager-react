import {stringify} from "querystring";
import {DOMAIN, PORT} from "../../constants";

export const ENDPOINTS = {
    login: (mail: string, password: string) => `${DOMAIN}:${PORT}/api/auth?${stringify({ mail, password })}`,
    register: `${DOMAIN}:${PORT}/api/auth`
}
