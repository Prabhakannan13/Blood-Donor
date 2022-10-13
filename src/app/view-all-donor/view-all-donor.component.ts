import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-donor',
  templateUrl: './view-all-donor.component.html',
  styleUrls: ['./view-all-donor.component.css']
})
export class ViewAllDonorComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
     this.myapi.viewdonorData().subscribe(
       (data)=>{
         this.donorData=data
       }
     )
    }

donorData:any=[]

  ngOnInit(): void {
  }

}
