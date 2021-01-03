import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BubbleSkillComponent } from './bubble-skill.component';

describe('BubbleSkillComponent', () => {
  let component: BubbleSkillComponent;
  let fixture: ComponentFixture<BubbleSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleSkillComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BubbleSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
