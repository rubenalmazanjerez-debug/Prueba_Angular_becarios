import { Component } from '@angular/core';
import { MachineDashboard } from '../machine-dashboard/machine-dashboard';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-telemetry-display',
  styleUrl: './telemetry-display.css',
  templateUrl: './telemetry-display.html',
})
export class TelemetryDisplay extends MachineDashboard{
  constructor() {
    super();
  }
}
