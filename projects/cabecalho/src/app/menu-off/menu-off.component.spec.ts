import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOffComponent } from './menu-off.component';

describe('MenuOffComponent', () => {
  let component: MenuOffComponent;
  let fixture: ComponentFixture<MenuOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
