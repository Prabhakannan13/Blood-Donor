import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }
  name=""
  bloodgroup=""
  lastdonation=""
  previousdonation=""
  address=""
  pincode=""
  mobilenumber=""
  emailid=""

  realValues=()=>{
    let data={
      "name":this.name,
      "bloodgroup":this.bloodgroup,
      "lastdonation":this.lastdonation,
      "previousdonation":this.previousdonation,
      "address":this.address,
      "pincode":this.pincode,
      "mobilenumber":this.mobilenumber,
      "emailid":this.emailid
    }
    console.log(data)
    

  }

  ngOnInit(): void {
  }

}
