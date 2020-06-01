import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompareplanosPage } from './compareplanos.page';

describe('CompareplanosPage', () => {
  let component: CompareplanosPage;
  let fixture: ComponentFixture<CompareplanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareplanosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompareplanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
