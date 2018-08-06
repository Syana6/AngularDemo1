import { TodoAppModule } from './todo-app.module';

describe('TodoAppModule', () => {
  let todoAppModule: TodoAppModule;

  beforeEach(() => {
    todoAppModule = new TodoAppModule();
  });

  it('should create an instance', () => {
    expect(todoAppModule).toBeTruthy();
  });
});
