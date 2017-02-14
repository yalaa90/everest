import { Component } from '@angular/core';
import {TestgenService} from './testgen.service';
import {FormScreen} from '../../screens/FormScreen.component';
 
@Component({
	moduleId:module.id,
    selector: 'testgen',
    templateUrl: 'testgen.component.html'
   
})
export class TestgenComponent extends FormScreen{
 
    test: string;
    constructor(private _TestgenService: TestgenService) {
			super(_TestgenService);
    }

    
}
