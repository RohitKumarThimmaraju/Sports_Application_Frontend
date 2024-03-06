import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListProductsComponent } from './user-list-products.component';

describe('UserListProductsComponent', () => {
  let component: UserListProductsComponent;
  let fixture: ComponentFixture<UserListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
