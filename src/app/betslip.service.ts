import { Injectable } from '@angular/core';
import { Bet } from './bet';

@Injectable({
  providedIn: 'root'
})
export class BetslipService {

  item=[];
  finalTotal=0;
  _idCounter=1;
  _value: Bet;
  relatedBetId = [];
  constructor() { }

  addToBetSlip(bet:any, punterchoice:string, odds:number)
  {
    if(!this.checkIfBetExists(bet,punterchoice))
    {
      this._value ={
        id:this._idCounter,
        typeOfEvent:'Soccer',
        event:bet,
        punterBetSelection:punterchoice,
        selectionOdds:odds,
        cost:0
    };
    
    this.item.push(this._value);
    this._idCounter++;
    this.updateBetId();
    }
  }
  checkIfBetExists(bet:any,punterchoice:string):Boolean
  {
    var _flag = false;
    for(let index=0; index<this.item.length;index++){
      const element = this.item[index];
      if(element.event.id==bet.id && element.punterBetSelection==punterchoice){
        this.removeFromDoubleClick(bet,punterchoice);
        _flag = true;
        break;
      }
    }
    return _flag;
  }
  updateBetId(){
    for(let index=0; index < this.item.length; index++){
      const element = this.item[index];
      element.id = index + 1;
    }
  }
  clearBetSlip(){
    this.finalTotal = 0;
    this.item.splice(0,this.item.length);
  }
  removeEvent(event:any){
    const index = this.item.indexOf(event);
    if(index!==-1){
      this.item.splice(index,1);
    }
    this.updateBetId();
  }
  removeFromDoubleClick(event:any,punter:string){
    for(let index=0; index<this.item.length;index++){
      const element = this.item[index];
      if(element.event.id==event.id && element.punterBetSelection==punter)
      {
        this.item.splice(index,1);
      }
    }
    this.updateBetId();
  }
  relatedBets(){
    this.relatedBetId = [];
    for(let index = 0; index < this.item.length; index++)
    {
      const element = this.item[index];
      if(element.warning==true)
      {
        this.relatedBetId.push(element.id);
      }
    }
  }
  checkRelatedBets(){
    for (let index = 0; index < this.item.length; index++) {
      const array1 = this.item[index];
      this.item[index].Message =null;
      this.item[index].error = false; 

      for (let x = 0; x < this.item.length; x++) {
        const array2 = this.item[x];

        if(array1.event.id == array2.event.id && index!=x)
        {
         this.item[index].error = true;

          if(this.item[index].Message==null)
          {
           this.item[index].Message = `Related to leg ${array2.id}`;
          }
          else{
           this.item[index].Message += ` and ${array2.id}`;
          }
        }
      }
   }
  }
  calculateBetPayout(stake:number,odds:number,id:number){
    var calculationOfOdds = stake * odds;
    this.item[id-1].payout = Number(calculationOfOdds);
  }
  calculateCostBasedOnPayout(payout:number,odds:number,id:number)
  {
   var costCalculation = payout / odds ;
   this.item[id-1].stake = Math.round(Number(costCalculation*100))/100;
  }
  checkIfMutipleIsAllowed():boolean{
    var _flag= true;
 
    for (let index = 0; index < this.item.length; index++) {
      const element = this.item[index];
      if(element.warning==true)
      {
        _flag = false;
        break;
      }
    }
    return _flag;
  }
}
