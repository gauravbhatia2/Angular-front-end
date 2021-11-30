import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service:SharedService) { }
  OrdersList:any=[];
  ngOnInit(): void {
    this.refreshOrdList();
  }
  refreshOrdList(){
    this.service.getOrdList().subscribe(data=>{
      this.OrdersList=data;
    });
  }

}
