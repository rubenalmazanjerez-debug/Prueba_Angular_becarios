import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MachineState} from '../interface/MachineState';

@Component({
  selector: 'app-telemetry-display',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './telemetry-display.html',
  styleUrls: ['./telemetry-display.css'],
})
export class TelemetryDisplay {
  @Input() machineState: MachineState | null = null;

  get isErrorState(): boolean {
    if (!this.machineState) return false;
    return this.machineState.status === 'ERROR' || this.machineState.temperature > 80;
  }

  get isRunningState(): boolean {
    return this.machineState?.status === 'RUNNING';
  }
}
