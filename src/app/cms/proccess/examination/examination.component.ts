import { Component } from '@angular/core';
import {ExaminationService} from './examination.service';
import {FormScreen} from '../../../screens/FormScreen.component';

@Component({
    moduleId: module.id,
    selector: 'examination',
    templateUrl: 'examination.component.html'

})
export class ExaminationComponent extends FormScreen{

    constructor(private _examinationService: ExaminationService) {
        super(_examinationService);

      this.columns = [
        { field: 'done', header: 'تم الكشف' },
        { field: 'bookingCode', header: 'كود الحجز' },
        { field: 'meetingDate', header: 'تاريخ' },
        { field: 'period', header: 'الفترة' },
        { field: 'paid', header: 'المدفوع' },
        { field: 'rest', header: 'الباقى' }
        //{ field: 'disease', header: 'disease' },
        //{ field: 'diseaseType', header: 'diseaseType' },
        //{ field: 'medicineType', header: 'medicineType' },
        //{ field: 'medicineTypeItems', header: 'medicineTypeItems' }
      ];

      this.dataSource = [{done:'نعم' ,bookingCode:'1',meetingDate:'20/12/2016',period:'صباحية',paid:'200',rest:'50'}
        ,{done:'نعم' ,bookingCode:'2',meetingDate:'20/12/2016',period:'مسائية',paid:'200',rest:'50'}]

      this.url = "http://localhost:8080/HRMAPI/examination/";
    }
    bookingCode:String;
    patientcode: string;
    mobile: number;
    meetingDate: string;
    total: number;
    paid: number;
    rest: number;
    note: string = '';
    period: string;
    periodItems: string[] = ['صباحية', 'مسائية'];
    examType: string;
    examTypeItem: string[] = ['كشف', 'اعادة'];
    immediately: boolean;
    done:boolean;

}
