import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JionUsComponent } from './jion-us.component';

describe('JionUsComponent', () => {
  let component: JionUsComponent;
  let fixture: ComponentFixture<JionUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JionUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JionUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
