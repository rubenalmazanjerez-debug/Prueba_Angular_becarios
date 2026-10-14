import { Component } from '@angular/core';
import { MachineDashboard } from '../machine-dashboard/machine-dashboard';

@Component({
  imports: [],
  standalone : true,
  selector: 'app-control-panel',
  styleUrl: './control-panel.css',
  templateUrl: './control-panel.html',
})
export class ControlPanel extends MachineDashboard{
  constructor() {
    super();
  }
}
