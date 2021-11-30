import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service:SharedService) { }
  ProductsList:any=[];

  ngOnInit(): void {
    this.refreshProdList();
  }
  refreshProdList(){
    this.service.getProdList().subscribe(data=>{
      this.ProductsList=data;
    });
  }

}