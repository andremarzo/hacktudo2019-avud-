import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTurmaComponent } from './cad-turma.component';

describe('CadTurmaComponent', () => {
  let component: CadTurmaComponent;
  let fixture: ComponentFixture<CadTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
