export class AdminService {
  async login(login: string, password: string): Promise<boolean> {
    return login === "mathilde" && password === "mathilde@devfest2023";
  }
}
