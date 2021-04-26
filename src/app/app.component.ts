import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memory';
  tabSelect: any[] = [];
  score:number = 0;
  tabCardTemp: any[] = [];
  win:string = 'Gagné !';
  isWin:boolean = false;
  memos: any[] = ["🍌", "🍌", "🍒", "🍒", "🍓", "🍓", "🍑", "🍑", "🍋", "🍋", "🍍", "🍍"]
  randomize(memos) {
    var i, j, tmp;
    for (i = memos.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = memos[i];
      memos[i] = memos[j];
      memos[j] = tmp;
    }
    return memos;
  }



  memory = this.randomize(this.memos);

afficher(selectedCard) {
  selectedCard.classList.add('hidden'); 
        this.tabCardTemp[0].classList.remove('hidden'); 
        this.tabCardTemp[1].classList.remove('hidden'); 
        this.tabCardTemp = [];
        this.tabSelect = [];
        this.score ++;
        console.log('score: ', this.score);
        if(this.score == 6 ) {
          console.log('GAGNE !');
          this.isWin = true;
        }
}


cacher(selectedCard) {
  // console.log('ko'); 
        selectedCard.classList.add('hidden'); 
        this.tabCardTemp[0].classList.add('hidden'); 
        this.tabCardTemp[1].classList.remove('hidden'); 
        this.tabCardTemp.splice(0,1);
        this.tabSelect.splice(0,1);
}

reload() {
  location.reload();
}

  touch(i) {
    // console.log(this.memory);
  
    if (this.tabSelect.length < 2) {
      
      this.tabSelect.push(this.memory[i]);
      console.log('vous avez selectionné ' + this.memory[i]);
      var selectedCard = document.querySelector(`.game :nth-child(${i + 1})`);
      selectedCard.classList.remove('hidden');
      this.tabCardTemp.push(selectedCard);
      // console.log("selection actuelle : ",this.tabCardTemp);

      if (this.tabSelect.length == 2) {        
        this.tabSelect[0] == this.tabSelect[1] ? this.afficher(selectedCard) : this.cacher(selectedCard);
      }
    } else {
      this.tabSelect = [];
      console.log(this.tabSelect);
    }
  }
}


