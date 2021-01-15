import { Component, Input, OnInit } from '@angular/core';
import { State } from '../../state.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() error: string;

  constructor(private state: State) { }

  ngOnInit(): void {
  }

  onHandleError(): void {
    this.state.saveErrorState(null);
  }
}
