import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [],
  templateUrl: './control-panel.html',
  styleUrls: ['./control-panel.css'],
})
export class ControlPanel {
  @Output() startAction = new EventEmitter<void>();
  @Output() stopAction = new EventEmitter<void>();

  onStart(): void {
    this.startAction.emit();
  }

  onStop(): void {
    this.stopAction.emit();
  }
}
