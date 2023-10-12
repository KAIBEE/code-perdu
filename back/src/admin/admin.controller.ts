import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginRequest } from './request/login-request';
import { LoginResponse } from './reponse/login-response';

@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginRequest: LoginRequest): Promise<LoginResponse> {
    const { login, password } = loginRequest;
    const success = await this.adminService.login(login, password);
    return {
      success,
    };
  }
}
