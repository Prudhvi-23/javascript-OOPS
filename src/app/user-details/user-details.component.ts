import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

   data="";
  constructor(private router :ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.params)
    this.data=this.router.snapshot.params.id
  }

}
