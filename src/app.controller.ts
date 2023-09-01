import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';
import { UserDataDto } from './userData.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create-user')
  async createNewUser(@Body() userDto: User ) {
    return this.appService.createUser(userDto)
  }

  @Get()
  async getUsers(): Promise<UserDataDto[]> {
    const response = await this.appService.getUsers()
    return response
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateData: UserUpdateDto) {
    return this.appService.updateUser(id, updateData)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id)
  }
}
