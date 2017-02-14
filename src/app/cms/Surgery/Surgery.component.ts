import {Component} from "@angular/core";
import {SurgeryService} from "./Surgery.service";
import {FormScreenReactive} from "../../screens/FormScreen.Reactive.component";
import {FormBuilder} from "@angular/forms";

@Component({
	moduleId: module.id,
    selector: 'Surgery',
    templateUrl: 'Surgery.component.html'

})
export class SurgeryComponent extends FormScreenReactive{

    constructor(private _SurgeryService:SurgeryService, private fb:FormBuilder) {
		super(_SurgeryService);
      this.formR = fb.group({
        code: [''],
        name: ['']
      });
      this.columns = [
        { field: 'code', header: 'كود', filter: true },
        { field: 'name', header: 'اسم' }

        //{ field: 'disease', header: 'disease' },
        //{ field: 'diseaseType', header: 'diseaseType' },
        //{ field: 'medicineType', header: 'medicineType' },
        //{ field: 'medicineTypeItems', header: 'medicineTypeItems' }
      ];

      this.dataSource = [{ code: '1', name: 'عملية 1' }, { code: '2', name: 'عملية2' } ]
      this.url = "http://localhost:8080/HRMAPI/surgery/";

    }

}
