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
}
