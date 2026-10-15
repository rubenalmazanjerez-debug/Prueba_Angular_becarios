import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [],
  templateUrl: './control-panel.html',
  styleUrls: ['./control-panel.css'],
})
export class ControlPanel {
  @Output() start: EventEmitter<void> = new EventEmitter<void>();
  @Output() stop: EventEmitter<void> = new EventEmitter<void>();

  onStart(): void {
    this.start.emit();
  }

  onStop(): void {
    this.stop.emit();
  }
}
