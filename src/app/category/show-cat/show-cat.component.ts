import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }
  CategoryList:any=[];

  ngOnInit(): void {
    this.refreshCatList();
  }
  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoryList=data;
    });
  }

}
