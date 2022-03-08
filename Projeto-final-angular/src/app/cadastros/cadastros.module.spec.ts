import { CadastrosModule } from './cadastros.module';

describe('CadastrosModule', () => {
  let cadastrosModule: CadastrosModule;

  beforeEach(() => {
    cadastrosModule = new CadastrosModule();
  });

  it('should create an instance', () => {
    expect(cadastrosModule).toBeTruthy();
  });
});
