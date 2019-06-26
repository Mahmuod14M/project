import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeicesComponent } from './serveices.component';

describe('ServeicesComponent', () => {
  let component: ServeicesComponent;
  let fixture: ComponentFixture<ServeicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
