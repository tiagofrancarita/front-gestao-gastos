import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevistoMesAtualComponent } from './previsto-mes-atual.component';

describe('PrevistoMesAtualComponent', () => {
  let component: PrevistoMesAtualComponent;
  let fixture: ComponentFixture<PrevistoMesAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrevistoMesAtualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevistoMesAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
