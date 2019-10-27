import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEscolaComponent } from './cad-escola.component';

describe('CadEscolaComponent', () => {
  let component: CadEscolaComponent;
  let fixture: ComponentFixture<CadEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
