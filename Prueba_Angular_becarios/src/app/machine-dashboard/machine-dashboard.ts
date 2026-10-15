import { Component } from '@angular/core';
import { MachineService} from '../service/machine-service';
import { Observable } from 'rxjs';
import { MachineState } from '../interface/MachineState';
import {TelemetryDisplay} from '../telemetry-display/telemetry-display';
import { ControlPanel} from '../control-panel/control-panel';
import { AsyncPipe} from '@angular/common';

@Component({
  imports: [TelemetryDisplay, AsyncPipe, ControlPanel],
  selector: 'app-machine-dashboard',
  standalone: true,
  styleUrl: './machine-dashboard.css',
  templateUrl: './machine-dashboard.html',
})
export class MachineDashboard {
  machineState$: Observable<MachineState>;

  constructor(private machineService: MachineService) {
    this.machineState$ = this.machineService.machineStatus;
  }

  startMachine(): void {
    this.machineService.startMachine();
  }

  stopMachine(): void {
    this.machineService.stopMachine();
  }
}
