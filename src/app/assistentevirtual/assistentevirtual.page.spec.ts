import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssistentevirtualPage } from './assistentevirtual.page';

describe('AssistentevirtualPage', () => {
  let component: AssistentevirtualPage;
  let fixture: ComponentFixture<AssistentevirtualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistentevirtualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssistentevirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
