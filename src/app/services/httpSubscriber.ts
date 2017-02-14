import {HttpServices} from './HttpServices';
import {RequestOptionsArgs} from '@angular/http';
import {Injectable} from '@angular/core';
 
@Injectable()
export class HttpSubscriber {

    constructor(private _HttpServices: HttpServices) {
        console.log(_HttpServices);
    }

    getSubsciber(url: string, options: RequestOptionsArgs): any {

        this._HttpServices.getHttpService(url, options).subscribe(res => { return res });
      
    }

    postSubscriber(url: string, body: any, options: RequestOptionsArgs):any {
        let data: any[] = [];
        this._HttpServices.postHttpService(url, body, options).subscribe(res => data.push(res));
        return data;
    }

    putSubscriber(url: string, body: any, options: RequestOptionsArgs):any {
        let data: any[] = [];
        this._HttpServices.putHttpService(url, body, options).subscribe(res => data.push(res));
        return data;
    }

    deleteSubscriber(url: string, options: RequestOptionsArgs):any {
        let data: any[] = [];
        this._HttpServices.deleteHttpService(url, options).subscribe(res => data.push(res));
        return data;
    }
    
}