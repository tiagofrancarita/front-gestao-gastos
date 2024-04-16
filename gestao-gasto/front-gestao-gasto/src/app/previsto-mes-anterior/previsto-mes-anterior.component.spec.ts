import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevistoMesAnteriorComponent } from './previsto-mes-anterior.component';

describe('PrevistoMesAnteriorComponent', () => {
  let component: PrevistoMesAnteriorComponent;
  let fixture: ComponentFixture<PrevistoMesAnteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrevistoMesAnteriorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevistoMesAnteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
