import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroCompComponent } from './outro-comp.component';

describe('OutroCompComponent', () => {
  let component: OutroCompComponent;
  let fixture: ComponentFixture<OutroCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutroCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutroCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
