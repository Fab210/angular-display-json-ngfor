import { Component } from '@angular/core';
import { Observable } from 'rxjs';

 import { DataService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  private dataList  = []; 
  constructor( private dataService: DataService) {
          this.dataService.getInfos().subscribe((res : any[])=>{
              console.log(res.basics.profiles);
              this.dataList = res.basics.profiles;
          });
  
  
  }
  

}
