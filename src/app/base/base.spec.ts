import { TestBed, async } from '@angular/core/testing';
import { Base } from './base';
describe('Base', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Base
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Base);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'my-cv'`, async(() => {
    const fixture = TestBed.createComponent(Base);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-cv');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Base);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-cv!');
  }));
});
