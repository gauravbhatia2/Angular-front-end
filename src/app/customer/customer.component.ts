import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:SharedService) { }
  CustomerList:any=[];
  ngOnInit(): void {
    this.refreshCatList();
  }
  refreshCatList(){
    this.service.getCustList().subscribe(data=>{
      this.CustomerList=data;
    });
  }

}
