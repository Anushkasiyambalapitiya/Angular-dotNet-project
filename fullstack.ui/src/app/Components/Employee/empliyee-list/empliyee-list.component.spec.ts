import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpliyeeListComponent } from './empliyee-list.component';

describe('EmpliyeeListComponent', () => {
  let component: EmpliyeeListComponent;
  let fixture: ComponentFixture<EmpliyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpliyeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpliyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
