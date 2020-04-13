import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignagesCasComponent } from './temoignages-cas.component';

describe('TemoignagesCasComponent', () => {
  let component: TemoignagesCasComponent;
  let fixture: ComponentFixture<TemoignagesCasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoignagesCasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoignagesCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
