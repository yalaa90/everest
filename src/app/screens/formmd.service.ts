/**
 * Created by yahia on 2/1/2017.
 */
import {Injectable} from '@angular/core';
import {HttpServices} from '../services/HttpServices';
import {FormGroup} from '@angular/forms';
export class FormMDService {
  constructor(public _httpServices:HttpServices) {
  }

  public save(url:string, model:any) {

    return this._httpServices.postHttpService(url, model, null);
  }

  public prepareFormModel(value) {
    let model = {};
    for (let item in value) {
      if (value[item] instanceof FormGroup) {
        model[item] = (value[item])._value;
      }
      if (value[item] instanceof Array) {
        model[item] = value[item];
      }
    }
    return model;
  }


  public prepareModelToView(value, model) {

    for (let item in value) {

      if (model[item] instanceof FormGroup) {
        model[item].patchValue(value[item]);
      }
      if (model[item] instanceof Array) {
        model[item] = value[item];
      }
    }
    return model;
  }

  public getOneModel(url:string) {

    return this._httpServices.getHttpService(url, null);
  }

  public getall(url:string) {
    return this._httpServices.getHttpService(url, null);
  }
}
