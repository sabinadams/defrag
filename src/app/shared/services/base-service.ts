import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IEnv, IUser } from '../models';
@Injectable()
export class BaseService {
    public env: IEnv = environment;
    constructor() {}

    public getUser(): IUser {
        return JSON.parse(localStorage.getItem('user'));
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }
    
    _generateToken() {
        let d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, c => {
            const r = ( d + Math.random() * 16 ) % 16 | 0;
            d = Math.floor( d / 16 );
            return( c === 'x' ? r : ( r & 0x7 | 0x8 ) ).toString( 16 );
        });
    }

}
