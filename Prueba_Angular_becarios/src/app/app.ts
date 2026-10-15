import { Component, signal } from '@angular/core';
import { MachineDashboard } from './machine-dashboard/machine-dashboard';

@Component({
  imports: [MachineDashboard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Prueba_Angular_becarios');
}
