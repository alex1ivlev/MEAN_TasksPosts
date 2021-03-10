import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpContainerComponent } from './tp-container.component';

describe('TpContainerComponent', () => {
  let component: TpContainerComponent;
  let fixture: ComponentFixture<TpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
