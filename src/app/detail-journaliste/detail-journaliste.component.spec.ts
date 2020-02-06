import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJournalisteComponent } from './detail-journaliste.component';

describe('DetailJournalisteComponent', () => {
  let component: DetailJournalisteComponent;
  let fixture: ComponentFixture<DetailJournalisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailJournalisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailJournalisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
