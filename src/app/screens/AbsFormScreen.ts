import {AbsScreen} from "./AbsScreen";
import {FormGroup} from "@angular/forms";
export enum ShowType {
  list,
  form
}
export abstract class AbsFormScreen extends AbsScreen {


  public submitForm(form:any) {
    console.log("submitForm " + form)
  };

  public newForm(form:any) {
  };

  public beforeSubmitForm(form:boolean) {
    console.log("beforeSubmitForm " + form)
  };

  public validate(form:any) {
  };


  public beforeVliadate(form:any) {
  };

  
  public changeShowType() {
    this.isList = !this.isList;
  };

  public reset(form:any) {
  }

  public onLoad(form:any) {
    console.log(form)
  };

  public fetchData(isList:boolean) {
  }

  public getAll() {
  }

  public getOneModel() {
  }

  public form:any;
  public formR:FormGroup;


}
