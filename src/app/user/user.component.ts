import { Quote } from '../quote';
//import { User } from '../user';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  buttonclick:boolean;
 // user= new User('James');
  quoteCard=[];
  card=["red","blue","green"]
  
assign(event:Quote){
  let usersarrLength= this.quoteCard.length
  event._editorid=usersarrLength + 1;
  this.quoteCard.push(event)
}
upvote(quote:Quote){
 quote._upvote+=1
}
downvote(quote:Quote){
  quote._downvote+=1
}

  constructor() { }

  ngOnInit() {
  }

}
