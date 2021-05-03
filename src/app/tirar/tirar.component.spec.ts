import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirarComponent } from './tirar.component';

describe('TirarComponent', () => {
  let component: TirarComponent;
  let fixture: ComponentFixture<TirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
