import {Component} from '@angular/core';
import {DiseaseService} from './disease.service';
import {FormScreenReactive} from "../../screens/FormScreen.Reactive.component";
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'disease',
  templateUrl: 'disease.component.html'

})
export class DiseaseComponent extends FormScreenReactive {

  constructor(private _diseaseService:DiseaseService , private fb:FormBuilder) {

    super(_diseaseService);

    this.formR = fb.group({
      code: [''],
      name: [''],
    });
    this.columns = [
      {field: 'code', header: 'كود', filter: true},
      {field: 'name', header: 'اسم'}
    ]
    this.dataSource = [{code: '1', name: 'صداع'}, {code: '2', name: 'برد'}]
    this.url = "http://localhost:8080/HRMAPI/disease/"
  }


}
