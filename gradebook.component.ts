//import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//import { stderr } from 'process';
import { User } from '../user';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  logInName = "admin"
  imageUrl:string="assets/images/header.jpg"
  

    users: User[] = [
      {"userId":1, "userName": "User1"},
      {"userId":2, "userName": "User2"},
    ];
  


    //Two-way data binding
    studName="";
    lastname="";
    prelim=0;
    midterm=0;
    final=0;

    //ngIf Example 1
    isLogIn:boolean=true;
    isLogOut:boolean=false;

    //ngFor Example 2
    list = [1,2,3,4,5];

    //ngFor Example 2 using trackby
    studentArr:any[]=[{
      "id": 1,
      "name": "student1"
    },
    {
      "id": 2,
      "name": "student2"     
    },
    {
      "id": 3,
      "name": "student3"     
    },
    {
      "id": 4,
      "name": "student4"
    }
  ];
  trackByData(index:number, studentArr:any):number
  {
    return studentArr.id;
  }

  //ngFor Example 3
  staff = [
    {firstName: 'Rei', lastName: 'Naoi', email: 'naoirei@gmail.com', role: 'User'},
    {firstName: 'Haram', lastName: 'Kim', email: 'kimharam@gmail.com', role: 'Admin'},
    {firstName: 'Mashiro', lastName: 'Sakamoto', email: 'sakamotomashiro@gmail.com', role: 'User'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
