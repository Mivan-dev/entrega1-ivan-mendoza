import { FullnamePipe } from './fullname-pipe';

describe('FullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });

  fit('should return full name', () => {
    // Setup
    const pipe = new FullnamePipe();
    const name = 'John';
    const surname = 'Doe';

    //Act
    const fullName = pipe.transform(name, surname);

    // Assert
    expect(fullName).toBe('John Doe');
  });
});
