import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonor',
  templateUrl: './searchdonor.component.html',
  styleUrls: ['./searchdonor.component.css']
})
export class SearchdonorComponent implements OnInit {

  constructor() { }

  donorname=""
  bloodgroup=""

  readValues=()=>{
    let data={
      "donorname":this.donorname,
      "bloodgroup":this.bloodgroup
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
