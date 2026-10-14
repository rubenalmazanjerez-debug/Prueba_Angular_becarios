import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryDisplay } from './telemetry-display';

describe('TelemetryDisplay', () => {
  let component: TelemetryDisplay;
  let fixture: ComponentFixture<TelemetryDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelemetryDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(TelemetryDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
