import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationTextareaComponent } from './tweet-creation-textarea.component';

describe('TweetCreationTextareaComponent', () => {
  let component: TweetCreationTextareaComponent;
  let fixture: ComponentFixture<TweetCreationTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetCreationTextareaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the textarea', () => {
    component.tweetTextarea.nativeElement.innerText = 'test 123';
    const result = component.getTextareaValue();
    expect(result).toEqual('test 123');
  });

  it('should append a character to the textarea', () => {
    component.tweetTextarea.nativeElement.innerText = 'test 123';
    component.appendCharToTextarea('4');
    const result = component.getTextareaValue();
    expect(result).toEqual('test 1234');
  });

  it("should emit a disable signal when there's no text", () => {
    component.disableSubmitButton.subscribe((disable) =>
      expect(disable).toEqual(true)
    );
    component.tweetTextarea.nativeElement.innerHTML = '<br>';
    component.checkInput();
  });
  it("should emit a re-enable signal when there's any text", () => {
    component.disableSubmitButton.subscribe((disable) =>
      expect(disable).toEqual(false)
    );
    component.tweetTextarea.nativeElement.innerHTML = 'test<br>';
    component.checkInput();
  });
});
