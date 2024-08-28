import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverComponent } from './deliver.component';

describe('DeliverComponent', () => {
  let component: DeliverComponent;
  let fixture: ComponentFixture<DeliverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverComponent]
    });
    fixture = TestBed.createComponent(DeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
