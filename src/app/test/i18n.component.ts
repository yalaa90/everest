import {Component} from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
@Component({
    moduleId: module.id,
    selector: 'incom',
    templateUrl: 'i18n.component.html'
})
export class I18N {

  testItems=['1','2','3'];
  testModel='test';
  selectedCity={id: 2, name: "Rome", code: "RM"};
  formR:FormGroup
  cities;
  constructor(private fb:FormBuilder){
    this.formR=fb.group({
      selectedCity:['']
    })
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
  }

  clickfn(){
    debugger;
    this.formR.value;
  }
}
