import { ObjectId } from "mongoose";
import { Product } from "./product/entities/product.entity";

export class UserDataDto {
    _id: ObjectId;
    username: string;
    description: string;
    date_added: Date;
    products: Product[];
}
