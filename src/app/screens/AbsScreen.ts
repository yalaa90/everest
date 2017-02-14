export abstract class AbsScreen {

  public url: string="http://localhost:8080/HRMAPI/";
  public columns: any[];
  public dataSource: any[];
  public title: string;
  public isList: boolean = true;
  public id: string;
  public model=[];
  public formModel ={form:null ,defaultDataSource:[]};

  public printForm() {

    if (!this.isList) window.print();
  }
}
