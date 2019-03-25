import { Quote } from '../quote';
//import { User } from '../user';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  toDelete:boolean=true;
 // user= new User('James');
  quoteCard=[
    new Quote("Eminem","The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.","brian",0,15,1,new Date()),
    new Quote("Albert Einstein","Look deep into nature, and then you will understand everything better.","brian",0,10,0,new Date()),
    new Quote("Albert Einstein","I have no special talent. I am only passionately curious.","brian",0,20,0,new Date()),

  ];
  
  highest:any;
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

goalDelete(quote,index){
  if (quote){
      let toDelete=confirm(`Are you sure you want to delete ${this.quoteCard[index].name}`)
      
      if(toDelete){
          this.quoteCard.splice(index,1)
      }
  }
}

toogleDetails(index){
  this.quoteCard[index].showDescription = !this.quoteCard[index].showDescription;
}

  constructor() { }

  ngOnInit() {
  }

}
