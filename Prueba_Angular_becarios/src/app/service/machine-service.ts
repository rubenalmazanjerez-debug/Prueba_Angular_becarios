import { MachineState} from '../interface/MachineState';
import { BehaviorSubject, Observable, Subscription, interval} from 'rxjs';
import { Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MachineService {
  constructor() {}

  private initialState: MachineState = {
    temperature: 0,
    rpm: 0,
    status: 'STOPPED',
  };

  private status: BehaviorSubject<MachineState> = new BehaviorSubject<MachineState>(this.initialState);

  public machineStatus: Observable<MachineState> = this.status.asObservable();

  private telemetrySubscription: Subscription | null = null;

  private generateTelemetryData(): void {
    const currentState: MachineState = this.status.value;

    const currentTemp: number = Math.round(Math.random() * 100); //   (0-100 grados)
    const currentRpm: number = Math.max(0, Math.round(currentState.rpm + (Math.random() - 0.5) * 200)); //  (+/- 100 RPM)

    const newStatus: MachineState = {
      temperature: currentTemp,
      rpm: currentRpm,
      status: 'RUNNING'
    };
    this.status.next(newStatus);
  }

  public startMachine(): void {
    if (this.status.value.status !== 'RUNNING') {
      this.status.next(
        {
          temperature: 25,
          rpm: 1000,
          status: 'RUNNING'
        });

      this.telemetrySubscription = interval(2000).subscribe((): void => {
        this.generateTelemetryData();
      });
    }
  }

  public stopMachine(): void {
    if (this.telemetrySubscription != null) {
      this.telemetrySubscription.unsubscribe();
      this.telemetrySubscription = null;
    }

    this.status.next({
      temperature: 0,
      rpm: 0,
      status: 'STOPPED',
    });
  }

}
