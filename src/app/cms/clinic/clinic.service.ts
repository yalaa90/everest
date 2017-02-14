import {Injectable} from '@angular/core';
import {FormScreenService} from '../../screens/formscreen.service';
import {HttpServices} from '../../services/HttpServices';
@Injectable()
export class ClinicService extends FormScreenService{
    constructor(http: HttpServices) {
        super(http);
    }
}
