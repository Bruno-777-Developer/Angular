import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'JOGO DA VELHA';

  public clk1 = '';
  public clk2 = '';
  public clk3 = '';
  public clk4 = '';
  public clk5 = '';
  public clk6 = '';
  public clk7 = '';
  public clk8 = '';
  public clk9 = '';
  public set = 0;
  public vx = 0;
  public vo = 0;
  public lancex = 0;
  public lanceo = 0;
  public px: number[] = [];
  public po: number[] = [];


  vitoria_x() {
    if (this.lancex >= 3) {
      if (((this.px[1] === 1) && (this.px[2] === 1) && (this.px[3] === 1)) ||
        ((this.px[4] === 1) && (this.px[5] === 1) && (this.px[6] === 1)) ||
        ((this.px[7] === 1) && (this.px[8] === 1) && (this.px[9] === 1)) ||
        ((this.px[1] === 1) && (this.px[4] === 1) && (this.px[7] === 1)) ||
        ((this.px[2] === 1) && (this.px[5] === 1) && (this.px[8] === 1)) ||
        ((this.px[3] === 1) && (this.px[6] === 1) && (this.px[9] === 1)) ||
        ((this.px[1] === 1) && (this.px[5] === 1) && (this.px[9] === 1)) ||
        ((this.px[3] === 1) && (this.px[5] === 1) && (this.px[7] === 1))) {
     this.vx = 1;
      }
    }
  }

  vitoria() {
    if (this.lanceo >= 3) {
      if (((this.po[1] === 1) && (this.po[2] === 1) && (this.po[3] === 1)) ||
         ((this.po[4] === 1) && (this.po[5] === 1) && (this.po[6] === 1)) ||
         ((this.po[7] === 1) && (this.po[8] === 1) && (this.po[9] === 1)) ||
         ((this.po[1] === 1) && (this.po[4] === 1) && (this.po[7] === 1)) ||
         ((this.po[2] === 1) && (this.po[5] === 1) && (this.po[8] === 1)) ||
         ((this.po[3] === 1) && (this.po[6] === 1) && (this.po[9] === 1)) ||
         ((this.po[1] === 1) && (this.po[5] === 1) && (this.po[9] === 1)) ||
         ((this.po[3] === 1) && (this.po[5] === 1) && (this.po[7] === 1))) {
      this.vo = 1;
      }
    }
  }

  click(numero: number) {

    if ((numero === 1) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk1 === 'X') {
        if (this.set === 1) {
          this.px[1] = 0;
          this.lancex--;
        }
        this.clk1 = '0';
        this.set = 2;
        this.po[1] = 1;
        this.lanceo++;
        // this.vitoria();
      }
      else {
        if (this.set === 2) {
          this.po[1] = 0;
          this.lanceo--;
        }
        this.clk1 = 'X';
        this.set = 1;
        this.px[1] = 1;
        this.lancex++;
        // this.vitoria_x();
      }
    }

    if ((numero === 2) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk2 === 'X') {
        if (this.set === 3) {
          this.px[2] = 0;
          this.lancex--;
        }
        this.clk2 = '0';
        this.set = 4;
        this.po[2] = 1;
        this.lanceo++;
       // this.vitoria();
      }
      else {
        if (this.set === 4) {
          this.po[2] = 0;
          this.lanceo--;
        }
        this.clk2 = 'X';
        this.set = 3;
        this.px[2] = 1;
        this.lancex++;
        // this.vitoria_x();
      }
    }
    if ((numero === 3) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk3 === 'X') {
        if (this.set === 5) {
          this.px[3] = 0;
          this.lancex--;
        }
        this.clk3 = '0';
        this.set = 6;
        this.po[3] = 1;
        this.lanceo++;
       // this.vitoria();
      }
      else {
        if (this.set === 6) {
          this.po[3] = 0;
          this.lanceo--;
        }
        this.clk3 = 'X';
        this.set = 5;
        this.px[3] = 1;
        this.lancex++;
        // this.vitoria_x();
      }
    }

    if ((numero === 4) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk4 === 'X') {
        if (this.set === 7) {
          this.px[4] = 0;
          this.lancex--;
        }
        this.clk4 = '0';
        this.set = 8;
        this.po[4] = 1;
        this.lanceo++;
      // this.vitoria();
      }
    else {
        if (this.set === 8) {
          this.po[4] = 0;
          this.lanceo--;
        }
        this.clk4 = 'X';
        this.set = 7;
        this.px[4] = 1;
        this.lancex++;
       // this.vitoria_x();
    }
  }
    if ((numero === 5) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk5 === 'X') {
        if (this.set === 9) {
          this.px[5] = 0;
          this.lancex--;
        }
        this.clk5 = '0';
        this.set = 10;
        this.po[5] = 1;
        this.lanceo++;
       // this.vitoria();
      }
      else {
        if (this.set === 10) {
          this.po[5] = 0;
          this.lanceo--;
        }
        this.clk5 = 'X';
        this.set = 9;
        this.px[5] = 1;
        this.lancex++;
       // this.vitoria_x();
      }
    }
    if ((numero === 6) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk6 === 'X') {
        if (this.set === 11) {
          this.px[6] = 0;
          this.lancex--;
        }
        this.clk6 = '0';
        this.set = 12;
        this.po[6] = 1;
        this.lanceo++;
        // this.vitoria();
      }
      else {
        if (this.set === 12) {
          this.po[6] = 0;
          this.lanceo--;
        }
        this.clk6 = 'X';
        this.set = 11;
        this.px[6] = 1;
        this.lancex++;
        // this.vitoria_x();
      }
    }
    if ((numero === 7) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk7 === 'X') {
        if (this.set === 13) {
          this.px[7] = 0;
          this.lancex--;
        }
        this.clk7 = '0';
        this.set = 14;
        this.po[7] = 1;
        this.lanceo++;
       // this.vitoria();
      }
      else {
        if (this.set === 14) {
          this.po[7] = 0;
          this.lanceo--;
        }
        this.clk7 = 'X';
        this.set = 13;
        this.px[7] = 1;
        this.lancex++;
       // this.vitoria_x();
      }
    }
    if ((numero === 8) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk8 === 'X') {
        if (this.set === 17) {
          this.px[9] = 0;
          this.lancex--;
        }
        this.clk8 = '0';
        this.set = 16;
        this.po[8] = 1;
        this.lanceo++;
        // this.vitoria();
      }
      else {
        if (this.set === 16) {
          this.po[8] = 0;
          this.lanceo--;
        }
        this.clk8 = 'X';
        this.set = 15;
        this.px[8] = 1;
        this.lancex++;
        // this.vitoria_x();
      }
    }
    if ((numero === 9) && (this.vx === 0) && (this.vo === 0)) {
      if (this.clk9 === 'X') {
        if (this.set === 17) {
          this.px[9] = 0;
          this.lancex--;
        }
        this.clk9 = '0';
        this.set = 18;
        this.po[9] = 1;
        this.lanceo++;
        // this.vitoria();
      }
      else {
        if (this.set === 18) {
          this.po[9] = 0;
          this.lanceo--;
        }
        this.clk9 = 'X';
        this.set = 17;
        this.px[9] = 1;
        this.lancex++;
       // this.vitoria_x();
      }
    }

    console.log('clicou no ' + numero);
    console.log('vitoria de x = ' + this.vx);
    console.log('vitoria de o = ' + this.vo);
    this.vitoria_x();
    this.vitoria();
  }
}
