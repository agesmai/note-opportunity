import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationMapComponent } from './organization-map.component';

describe('OrganizationMapComponent', () => {
  let component: OrganizationMapComponent;
  let fixture: ComponentFixture<OrganizationMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationMapComponent]
    });
    fixture = TestBed.createComponent(OrganizationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
