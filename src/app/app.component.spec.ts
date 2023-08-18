import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'teste2Plus2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('teste2Plus2');
  });

  it('should render body', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('Qual é o valor de 2 + 2?');
    expect(compiled.querySelector('#result-toggle-button').textContent).toContain('Revelar valor');
    expect(compiled.querySelector('#result')).toBeNull;
  });

  it('should show result and change screen', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('#result-toggle-button');
    
    button.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#title').textContent).toContain('Qual é o valor de 2 + 2?');
    expect(button.textContent).toContain('Esconder valor');
    expect(compiled.querySelector('#result').textContent).toContain('O valor é: 4');
  });

});
