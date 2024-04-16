import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevistoMesSeguinteComponent } from './previsto-mes-seguinte.component';

describe('PrevistoMesSeguinteComponent', () => {
  let component: PrevistoMesSeguinteComponent;
  let fixture: ComponentFixture<PrevistoMesSeguinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrevistoMesSeguinteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevistoMesSeguinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
