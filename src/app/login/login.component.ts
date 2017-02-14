import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {FormScreen} from '../screens/FormScreen.component';

 
@Component({
	moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',

   
})
export class LoginComponent extends FormScreen{

    constructor(private _loginService:LoginService) {
        super(_loginService);
    }

    
}
