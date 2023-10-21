
import {usuario} from '../interface/usuario.interface';

export interface respLogin {
    data:usuario;
    message: string;
    status: boolean;
    
}


export interface ResToken{
    status: boolean;
    message: string;
    ascces_token:string
}