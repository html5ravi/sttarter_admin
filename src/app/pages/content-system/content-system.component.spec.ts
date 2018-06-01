import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSystemComponent } from './content-system.component';

describe('ContentSystemComponent', () => {
  let component: ContentSystemComponent;
  let fixture: ComponentFixture<ContentSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
