import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NepseChartComponent } from './nepse-chart.component';

describe('NepseChartComponent', () => {
  let component: NepseChartComponent;
  let fixture: ComponentFixture<NepseChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NepseChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NepseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
