import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanosindicadosPage } from './planosindicados.page';

describe('PlanosindicadosPage', () => {
  let component: PlanosindicadosPage;
  let fixture: ComponentFixture<PlanosindicadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosindicadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanosindicadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
