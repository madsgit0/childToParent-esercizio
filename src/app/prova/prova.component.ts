import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  @Output() mandaDatiEvento = new EventEmitter<object>();

  persone = [
    { nome: 'luca', cognome: 'rossi' },
    { nome: 'marco', cognome: 'verdi' },
    { nome: 'anna', cognome: 'neri' },
  ];

  constructor() {}

  ngOnInit(): void {}

  mandaDati() {
    this.mandaDatiEvento.emit(this.persone);
  }
}
