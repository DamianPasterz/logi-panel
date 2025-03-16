import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToggleSwitchComponent } from './basic-toggle-switch.component';

describe('BasicToggleSwitchComponent', () => {
  let component: BasicToggleSwitchComponent;
  let fixture: ComponentFixture<BasicToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicToggleSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
