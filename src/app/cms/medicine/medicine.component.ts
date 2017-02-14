import {Component} from "@angular/core";
import {MedicineService} from "./medicine.service";
import {FormScreen} from "../../screens/FormScreen.component";
import {FormScreenReactive} from "../../screens/FormScreen.Reactive.component";
import {FormBuilder} from '@angular/forms';
@Component({
	moduleId: module.id,
    selector: 'medicine',
    templateUrl: 'medicine.component.html'

})
export class MedicineComponent extends FormScreenReactive  {

    constructor(private _medicineService: MedicineService, private fb:FormBuilder) {
        super(_medicineService);
      this.formR = fb.group({
        code: [''],
        name: [''],
        disease: [''],
        medicineType: ['']
      });
        this.columns = [
            { field: 'code', header: 'كود', filter: true },
            { field: 'name', header: 'اسم' },
            { field: 'medicineType', header: 'انوع الدواء' }
            //{ field: 'disease', header: 'disease' },
            //{ field: 'diseaseType', header: 'diseaseType' },
            //{ field: 'medicineType', header: 'medicineType' },
            //{ field: 'medicineTypeItems', header: 'medicineTypeItems' }
        ];

        this.dataSource = [{ code: '1', name: 'دواء1' ,medicineType:'اقراص'}, { code: '1', name: 'دواء2' ,medicineType:'حقن'}]
        this.url = "http://localhost:8080/HRMAPI/medicine/";
    }


    mobile: number;
    disease: string;
    diseaseType: string[] = ['مرض1','مرض2'];


}
