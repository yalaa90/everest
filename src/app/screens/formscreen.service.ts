import {HttpServices} from "../services/HttpServices";
import {Injectable} from "@angular/core";
@Injectable()
export class FormScreenService {

  constructor(public _httpServices:HttpServices) {
  }

  public save(url:string, model:any) {

    this._httpServices.postHttpService(url, model, null).subscribe();
  }

  public deleteRecord(url:string) {

    this._httpServices.deleteHttpService(url, null).subscribe();
  }

  public getFormModel(form:any) {
    let model = {};
    for (let control in form.controls) {
      let value = form.controls[control].value;
      if (value) {
        model[control] = value;
      }
    }

    return model;
  }

  public getOneModel(url:string, form:any) {


    this._httpServices.getHttpService(url, null).subscribe(res => {

      this.setOneModel(res, form);
    });


  }

  public getOneModelR(url:string) {
    return this._httpServices.getHttpService(url, null)

  }

  public setOneModel(res:any, form:any) {

    if (res) {
      for (let item in res) {
        form[item] = res[item];
      }
    }
  }

  public getAllModels(url:string, dataSource:any[]) {

    this._httpServices.getHttpService(url, null).subscribe(res => {

      dataSource = res;

    });

  }
}
