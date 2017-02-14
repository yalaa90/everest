import { Component } from '@angular/core';
import {ClinicService} from './clinic.service';
import {FormScreen} from '../../screens/FormScreen.component';

@Component({
	moduleId: module.id,
    selector: 'clinic',
    templateUrl: 'clinic.component.html'

})
export class ClinicComponent extends FormScreen{

    constructor(private _clinicService:ClinicService) {
        super(_clinicService);

      this.columns = [
        { field: 'name', header: 'اسم المريض' },
        { field: 'complain', header: 'مشكلة' },
        { field: 'diagnosis', header: 'راى الطبيب' },
        { field: 'medicineType', header: 'الرشتة' }
        //{ field: 'disease', header: 'disease' },
        //{ field: 'diseaseType', header: 'diseaseType' },
        //{ field: 'medicineType', header: 'medicineType' },
        //{ field: 'medicineTypeItems', header: 'medicineTypeItems' }
      ];

      this.dataSource = [{ code: '1', name: 'دواء1' ,medicineType:'اقراص'}, { code: '1', name: 'دواء2' ,medicineType:'حقن'}]
      this.url = "http://localhost:8080/HRMAPI/medicine/";
    }

    complain: string;
    diagnosis: string;
    diseaseType:string;
    diseaseTypeItem=['صداع','برد']
    surgeryType:string;
    surgeryTypeItem=['عملية1','عملية2']
    nextMeeting: string;


}
