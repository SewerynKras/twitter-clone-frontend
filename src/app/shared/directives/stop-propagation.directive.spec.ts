import { StopPropagationDirective } from './stop-propagation.directive';

describe('StopPropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new StopPropagationDirective();
    expect(directive).toBeTruthy();
  });

  it('should stop propagation', () => {
    const directive = new StopPropagationDirective();
    var event = {
      stopPropagation: jasmine.createSpy(),
    };
    directive.onClick(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
