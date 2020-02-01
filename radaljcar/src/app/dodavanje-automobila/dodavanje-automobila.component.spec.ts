import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeAutomobilaComponent } from './dodavanje-automobila.component';

describe('DodavanjeAutomobilaComponent', () => {
  let component: DodavanjeAutomobilaComponent;
  let fixture: ComponentFixture<DodavanjeAutomobilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeAutomobilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeAutomobilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
