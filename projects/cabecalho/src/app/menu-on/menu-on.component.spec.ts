import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOnComponent } from './menu-on.component';

describe('MenuOnComponent', () => {
  let component: MenuOnComponent;
  let fixture: ComponentFixture<MenuOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
