import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';
//import {User} from '../user'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

//@Input("_username") username:string;
  
quote= new Quote('','','',0,0,0,new Date())

@Output() newquote= new EventEmitter<Quote>();

private submitQuote(){
  this.newquote.emit(this.quote)
  this.quote=new Quote('','','',0,0,0,new Date())
}
  constructor() {}

  ngOnInit() {
    
  }

}
