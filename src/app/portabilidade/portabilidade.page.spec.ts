import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortabilidadePage } from './portabilidade.page';

describe('PortabilidadePage', () => {
  let component: PortabilidadePage;
  let fixture: ComponentFixture<PortabilidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortabilidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortabilidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
