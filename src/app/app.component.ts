import { Component, OnInit } from '@angular/core';
import { IconService } from './service/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  icons:object[];
  selectedIcon:any;
  iconCode= '';
  constructor(private service:IconService){}
  getIcons(){
    this.service.getIcons().subscribe((data:any)=>{
      this.icons=data;
      this.selectedIcon=this.icons[0];
      this.getIconString();
    });
  }
  getIcon(id:any){
    this.selectedIcon=this.service.getIcon(id);
    this.getIconString();
  }
  getIconString(){
    if(this.selectedIcon){
      this.iconCode='<i class="pi pi-'+this.selectedIcon.properties.name+'"></i>';
    }
  }
  ngOnInit(){
  this.getIcons();
  }
}