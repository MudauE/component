
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scoreA = 0;
  scoreB = 0;

  constructor(public navCtrl: NavController) {

  }

  Click(){
    this.scoreA +=3;
    console.log(this.scoreA)
    
   
  }

  ClickOne(){

    this.scoreA +=2;
    console.log(this.scoreA)
    
    
}

ClickTwo(){
  console.log(this.scoreA)
  this.scoreA +=1;
  
}
  ClickThree(){
    this.scoreB +=3;
    console.log(this.scoreB)
    
   
 } 
 ClickFour(){
  this.scoreB +=2;
  console.log(this.scoreB)
 
  
 }
  ClickFive(){
    this.scoreB +=1;
    console.log(this.scoreB)
    
   
  }

  ClickSix(){
  this.scoreA = 0;

  this.scoreB = 0;
    

  }  

}





  
   
  




 
 





