import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedoComponent } from './wedo.component';

describe('WedoComponent', () => {
  let component: WedoComponent;
  let fixture: ComponentFixture<WedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WedoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
