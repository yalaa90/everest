import { Component } from '@angular/core';
import {HomeService} from './home.service';

@Component({

    selector: 'home',
    templateUrl: 'home.component.html',
  styleUrls:['main.css','prettyPhoto.css']

})
export class HomeComponent  {

    constructor(private _homeService:HomeService) {


    }




}
