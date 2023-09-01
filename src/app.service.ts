import { Injectable } from '@nestjs/common';
import {User, UserDocument} from './user.models'
import  { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { productDocument } from './product/entities/product.entity';
import { UserDataDto } from './userData.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    @InjectModel('product') private readonly productModel: Model<productDocument>
  ) {}

  // creating a user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user)
    return newUser.save()
  }

  // getting all users
  async getUsers(): Promise<any> {
    const users = await this.userModel.find({})
    let usersData: any = [...users]
    if (users?.length) {
      for (let user of usersData) {
        let userProduct = await this.productModel.find({ownerId: user._id})
        user.products = userProduct
      }
    }
    return usersData
  }

  // updating user
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, {new: true})
  }

  // deleting user
  async deleteUser(id) {
    return this.userModel.findByIdAndRemove(id)
  }
}
