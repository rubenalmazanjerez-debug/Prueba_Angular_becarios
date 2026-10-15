import { MachineState} from '../interface/MachineState';
import { BehaviorSubject, Observable, Subscription, interval} from 'rxjs';
import { Injectable, OnDestroy} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MachineService implements OnDestroy {
  constructor() {}

  private initialState: MachineState = {
    temperature: 25,
    rpm: 0,
    status: 'STOPPED',
  };

  private status: BehaviorSubject<MachineState> = new BehaviorSubject<MachineState>(
    this.initialState,
  );

  public machineStatus: Observable<MachineState> = this.status.asObservable();

  private telemetrySubscription: Subscription | null = null;

  private generateTelemetryData(): void {
    const currentState: MachineState = this.status.value;
    const currentTemp: number = (Math.random() - 0.5) * 3; //   (+/- 1.5 grados)
    const currentRpm: number = (Math.random() - 0.5) * 200; //  (+/- 100 RPM)

    const newTemperature: number = Math.round((currentState.temperature + currentTemp) * 100) / 100;
    const newRpm: number = Math.max(0, Math.round(currentState.rpm + currentRpm));
    const newState: MachineState = {
      temperature: newTemperature,
      rpm: newRpm,
      status: 'RUNNING',
    };
    this.status.next(newState);
  }

  public startMachine(): void {
    if (this.status.value.status !== 'RUNNING') {
      this.status.next({
        temperature: 25,
        rpm: 1000,
        status: 'RUNNING',
      });

      this.telemetrySubscription = interval(2000).subscribe((): void => {
        this.generateTelemetryData();
      });
    }
  }

  public stopMachine(): void {
    if (this.telemetrySubscription) {
      this.telemetrySubscription.unsubscribe();
      this.telemetrySubscription = null;
    }

    this.status.next({
      temperature: 25,
      rpm: 0,
      status: 'STOPPED',
    });
  }

  ngOnDestroy(): void {
    this.stopMachine();
  }
}
