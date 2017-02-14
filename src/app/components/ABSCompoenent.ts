import {DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

export interface ABSCompnent extends DefaultValueAccessor{
    id: string;
    key: string;
    model: any;
   

}