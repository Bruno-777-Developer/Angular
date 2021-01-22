import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JOGO DA VELHA';

  public clk1 = '--';
  public clk2 = '--';
  public clk3 = '--';
  public clk4 = '--';
  public clk5 = '--';
  public clk6 = '--';
  public clk7 = '--';
  public clk8 = '--';
  public clk9 = '--';
  public a1 = 0;
  public a2 = 0;
  public a3 = 0;
  public a4 = 0;
  public a5 = 0;
  public a6 = 0;
  public a7 = 0;
  public a8 = 0;
  public a9 = 0;
  public vt = 0;
  public set = 0;
  public vx = 0;
  public vo = 0;
  public vxx = 0;
  public voo = 0;
  public rx = 0;
  public ro = 0;
  public lancex = 0;
  public lanceo = 0;
  public px: number[] = [];
  public po: number[] = [];
  public play: any;
  public setxo = 0;
  public jogador = '';
  public j1 = 'Player1';
  public j2 = 'Player2';

  novaPartida(){
    this.clk1 = '--';
    this.clk2 = '--';
    this.clk3 = '--';
    this.clk4 = '--';
    this.clk5 = '--';
    this.clk6 = '--';
    this.clk7 = '--';
    this.clk8 = '--';
    this.clk9 = '--';
    this.a1 = 0;
    this.a2 = 0;
    this.a3 = 0;
    this.a4 = 0;
    this.a5 = 0;
    this.a6 = 0;
    this.a7 = 0;
    this.a8 = 0;
    this.a9 = 0;
    this.set = 0;
    this.vx = 0;
    this.vo = 0;
    this.setxo = 0;
    this.lancex = 0;
    this.lanceo = 0;
    for (let i = 0; i <= 9; i++){
      this.px[i] = 0;
      this.po[i] = 0;
    }
  }

  reset(){
    this.novaPartida();
    this.vxx = 0;
    this.voo = 0;
    this.j1 = 'Player 1';
    this.j2 = 'Player 2';
  }
  vitoria_x() {
    if (this.lancex >= 3) {
      if ((this.px[1] === 1) && (this.px[2] === 1) && (this.px[3] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a1 = 1;
        this.a2 = 1;
        this.a3 = 1;
      }
      if ((this.px[4] === 1) && (this.px[5] === 1) && (this.px[6] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a4 = 1;
        this.a5 = 1;
        this.a6 = 1;
      }
      if ((this.px[7] === 1) && (this.px[8] === 1) && (this.px[9] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a7 = 1;
        this.a8 = 1;
        this.a9 = 1;
      }
      if ((this.px[1] === 1) && (this.px[4] === 1) && (this.px[7] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a1 = 1;
        this.a4 = 1;
        this.a7 = 1;
      }
      if ((this.px[2] === 1) && (this.px[5] === 1) && (this.px[8] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a2 = 1;
        this.a5 = 1;
        this.a8 = 1;
      }
      if ((this.px[3] === 1) && (this.px[6] === 1) && (this.px[9] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a3 = 1;
        this.a6 = 1;
        this.a9 = 1;
      }
      if ((this.px[1] === 1) && (this.px[5] === 1) && (this.px[9] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a1 = 1;
        this.a5 = 1;
        this.a9 = 1;
      }
      if ((this.px[3] === 1) && (this.px[5] === 1) && (this.px[7] === 1)) {
        this.vxx++;
        this.vx = 1;
        this.a3 = 1;
        this.a5 = 1;
        this.a7 = 1;
      }


    }
  }

  vitoria_o() {
    if (this.lanceo >= 3) {
      if ((this.po[1] === 1) && (this.po[2] === 1) && (this.po[3] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a1 = 1;
        this.a2 = 1;
        this.a3 = 1;
      }
      if ((this.po[4] === 1) && (this.po[5] === 1) && (this.po[6] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a4 = 1;
        this.a5 = 1;
        this.a6 = 1;
      }
      if ((this.po[7] === 1) && (this.po[8] === 1) && (this.po[9] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a7 = 1;
        this.a8 = 1;
        this.a9 = 1;
      }
      if ((this.po[1] === 1) && (this.po[4] === 1) && (this.po[7] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a1 = 1;
        this.a4 = 1;
        this.a7 = 1;
      }
      if ((this.po[2] === 1) && (this.po[5] === 1) && (this.po[8] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a2 = 1;
        this.a5 = 1;
        this.a8 = 1;
      }
      if ((this.po[3] === 1) && (this.po[6] === 1) && (this.po[9] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a3 = 1;
        this.a6 = 1;
        this.a9 = 1;
      }
      if ((this.po[1] === 1) && (this.po[5] === 1) && (this.po[9] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a1 = 1;
        this.a5 = 1;
        this.a9 = 1;
      }
      if ((this.po[3] === 1) && (this.po[5] === 1) && (this.po[7] === 1)) {
        this.voo++;
        this.vo = 1;
        this.a3 = 1;
        this.a5 = 1;
        this.a7 = 1;
      }

      }
    }

  click2(play: number) {
  this.play = play;
  }

  click(numero: number) {
if ((this.vx === 0) && (this.vo === 0)) {
  if ((numero === 1) && (this.clk1 === '--')) {
    if (this.setxo === 0) {
      this.clk1 = 'X';
      this.set = 2;
      this.px[1] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk1 = 'O';
      this.set = 1;
      this.po[1] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }

  if ((numero === 2) && (this.clk2 === '--')) {
    if (this.setxo === 0) {
      this.clk2 = 'X';
      this.set = 4;
      this.px[2] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk2 = 'O';
      this.set = 3;
      this.po[2] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  if ((numero === 3) && (this.clk3 === '--')) {
    if (this.setxo === 0) {
      this.clk3 = 'X';
      this.set = 6;
      this.px[3] = 1;
      this.lancex++;
      this.setxo = 1;

    } else {
      this.clk3 = 'O';
      this.set = 5;
      this.po[3] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }

  if ((numero === 4) && (this.clk4 === '--')) {
    if (this.setxo === 0) {
      this.clk4 = 'X';
      this.set = 8;
      this.px[4] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk4 = 'O';
      this.set = 7;
      this.po[4] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  if ((numero === 5) && (this.clk5 === '--')) {
    if (this.setxo === 0) {

      this.clk5 = 'X';
      this.set = 10;
      this.px[5] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk5 = 'O';
      this.set = 9;
      this.po[5] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  if ((numero === 6) && (this.clk6 === '--')) {
    if (this.setxo === 0) {
      this.clk6 = 'X';
      this.set = 12;
      this.px[6] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk6 = 'O';
      this.set = 11;
      this.po[6] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  if ((numero === 7) && (this.clk7 === '--')) {
    if (this.setxo === 0) {
      this.clk7 = 'X';
      this.set = 14;
      this.px[7] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk7 = 'O';
      this.set = 13;
      this.po[7] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  if ((numero === 8) && (this.clk8 === '--')) {
    if (this.setxo === 0) {
      this.clk8 = 'X';
      this.set = 16;
      this.px[8] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk8 = 'O';
      this.set = 15;
      this.po[8] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  if ((numero === 9) && (this.clk9 === '--')) {
    if (this.setxo === 0) {
      this.clk9 = 'X';
      this.set = 18;
      this.px[9] = 1;
      this.lancex++;
      this.setxo = 1;
    } else {
      this.clk9 = 'O';
      this.set = 17;
      this.po[9] = 1;
      this.lanceo++;
      this.setxo = 0;
    }
  }
  this.vitoria_x();
  this.vitoria_o();
}
console.log('clicou no ' + numero);
console.log('valor de vo = ' + this.vo);
console.log('valor de voo = ' + this.voo);
console.log('valor de vx = ' + this.vx);
console.log('valor de vxx = ' + this.vxx);
console.log('Valor  de a1 = ' + this.a1);
console.log('Valor  de a2 = ' + this.a2);
console.log('Valor  de a3 = ' + this.a3);
console.log('Valor  de a4 = ' + this.a4);
console.log('Valor  de a5 = ' + this.a5);
console.log('Valor  de a6 = ' + this.a6);
console.log('Valor  de a7 = ' + this.a7);
console.log('Valor  de a8 = ' + this.a8);
console.log('Valor  de a9 = ' + this.a9);
console.log(this.j1);
console.log(this.j2);
  }
}
