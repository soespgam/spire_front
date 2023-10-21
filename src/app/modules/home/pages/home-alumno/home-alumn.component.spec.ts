import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlumnComponent } from './home-alumn.component';

describe('HomeAlumnComponent', () => {
  let component: HomeAlumnComponent;
  let fixture: ComponentFixture<HomeAlumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
