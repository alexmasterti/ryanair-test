import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-control-field',
  templateUrl: './error-control-field.component.html',
  styleUrls: ['./error-control-field.component.css']
})
export class ErrorControlFieldComponent implements OnInit {

  @Input() msgErro: string;
  @Input() showError: boolean;

  constructor() { }

  ngOnInit() {
  }

}
