import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreHomeComponent } from './sobre-home.component';

describe('SobreHomeComponent', () => {
  let component: SobreHomeComponent;
  let fixture: ComponentFixture<SobreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
