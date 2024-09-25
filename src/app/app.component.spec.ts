import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should return 0',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('')).toBe(0);
  });

  it('should return 1',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1')).toBe(1);
  });

  it('should return 6',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1,5')).toBe(6);
  });

  it('should return 6  - new line as delimiter',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('1\n2,3')).toBe(6);
  });

  it('should return 3 - different delimiters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('//;\n1;2')).toBe(3);
  });

  it('should throw and exception - single negetive value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => {app.add('-1')}).toThrowError('negative numbers not allowed -1');
  });

  it('should throw and exception - single negetive value 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => {app.add('-1,3,5')}).toThrowError('negative numbers not allowed -1');
  });

  it('should throw and exception - multiple negetive value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => {app.add('-1,3,-5, -9')}).toThrowError('negative numbers not allowed -1,-5,-9');
  });

  it('should return 14 - non numerics', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('a,b,c,5,d,e,9')).toBe(14);
  })

});
