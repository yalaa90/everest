import { Component } from '@angular/core';
import {ReceiveService} from './receive.service';
import {FormScreenReactive} from "../../../screens/FormScreen.Reactive.component";
import {FormBuilder} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'receive',
    templateUrl: 'receive.component.html'

})
export class ReceiveComponent extends FormScreenReactive{

    constructor(private _receiveService: ReceiveService, private fb:FormBuilder) {
        super(_receiveService);
      this.formR = fb.group({
        code: [''],
        name: [''],
        mobile: [''],
        patient:[''],
        immediately:[''],
        meetingDate:[''],
        total:[''],
        paid:[''],
        rest:[''],
        period:[''],
        note:['']
      });
      this.columns = [
        { field: 'meetingDate', header: 'تاريخ' },
        { field: 'name', header: 'اسم' },
        { field: 'immediately', header: 'كشف مستعجل' },
        { field: 'period', header: 'الفترة' }
        //{ field: 'disease', header: 'disease' },
        //{ field: 'diseaseType', header: 'diseaseType' },
        //{ field: 'medicineType', header: 'medicineType' },
        //{ field: 'medicineTypeItems', header: 'medicineTypeItems' }
      ];

      this.dataSource = [{ meetingDate: '20/12/2016', name: 'احمد محمد احمد' ,immediately:'نعم',period:'صباحية'},{ meetingDate: '20/12/2016', name: 'على محمود' ,immediately:'لا',period:'مسائية'}]
      this.url = "http://localhost:8080/HRMAPI/receive/";
    }

    periodItems: string[] = ['صباحية', 'مسائية'];
    immediately: boolean;

}
