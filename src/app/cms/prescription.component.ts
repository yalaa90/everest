import {Component} from '@angular/core';
export interface Prescription {
  id:string,
  patientId?:string,
  medicineId?:string,
  medicineName?:string,
  dosage?:string,
  count?:number
}


@Component({
  moduleId: module.id,
  selector: 'prescription',
  templateUrl: 'prescription.component.html'
})
export class PrescriptionComponent {
  prescriptionColumn = [{field: 'id',header: 'كود'},
    {field: 'patientId', header: 'المريض'},
    {field: 'medicineId',header: 'المرض',},
    {field: 'dosage',header: 'الجرعة'},
    {field: 'count',header: 'عدد'}

  ];
  prescriptions:Prescription[] = [{count: 1, id: '2', patientId: '3'}, {
    count: 1,
    id: '2',
    medicineName: 'hello wolrd'
  }, {count: 1, id: '2'}, {count: 1, id: '2'}];

  constructor() {

  }
}
