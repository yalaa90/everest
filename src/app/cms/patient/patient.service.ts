import {Injectable} from '@angular/core';
import {FormScreenService} from '../../screens/formscreen.service';
import {HttpServices} from '../../services/HttpServices';
@Injectable()
export class PatienService extends FormScreenService {
    constructor(private http: HttpServices) { super(http)}
}