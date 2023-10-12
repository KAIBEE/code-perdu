export class AdminService {
  async login(login: string, password: string): Promise<boolean> {
    return login === 'math' && password === 'math';
  }
}
