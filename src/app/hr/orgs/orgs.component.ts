import { Component } from '@angular/core';
import {OrgsService} from './orgs.service';
import {FormScreen} from '../../screens/FormScreen.component';

@Component({
    selector: 'orgs',
    templateUrl: 'orgs.component.html'

})
export class OrgsComponent extends FormScreen{

    constructor(private _orgsService:OrgsService) {
      super(_orgsService);
		this.columns = [
            { field: 'code', header: 'رمز', filter: true },
            { field: 'name', header: 'اسم' },
            { field: 'status', header: 'حالة' },
            { field: 'note', header: 'ملاحظات' },
			]
			this.dataSource = []
			this.url="http://localhost:8080/HRMAPI/orgs/"
    }

  status=true;
  notes:string;
}
