import {Component} from "@angular/core";
import {PatienService} from "./patient.service";
import {FormScreenReactive} from "../../screens/FormScreen.Reactive.component";
import {FormBuilder} from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'patient',
  templateUrl: 'patient.component.html'

})
export class PatientComponent extends FormScreenReactive {


 

  constructor(private _PatienService:PatienService, private fb:FormBuilder) {
    super(_PatienService);

    this.formR = fb.group({
      code: [''],
      name: [''],
      mobile: [''],
      iDentification: [''],
      mail: [''],
      gender: [''],
      address: [''],
      job: [''],
      note: [''],
      birthDate: ['']
    })
    this.columns = [
      {field: 'code', header: 'كود', filter: true},
      {field: 'name', header: 'اسم'},
      {field: 'mobile', header: 'موبيل'}
      //{ field: 'disease', header: 'disease' },
      //{ field: 'diseaseType', header: 'diseaseType' },
      //{ field: 'medicineType', header: 'medicineType' },
      //{ field: 'medicineTypeItems', header: 'medicineTypeItems' }
    ];

    this.dataSource = [{code: '1', name: 'المريض الاول', mobile: '01223358564'}, {
      code: '2',
      name: 'المريض 2',
      mobile: '0111558812'
    }]
    this.url = "http://localhost:8080/HRMAPI/patient/";
  }

}
