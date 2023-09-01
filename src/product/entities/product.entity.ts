import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type productDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    ownerId: string;

    @Prop()
    numberOfUsers: number

    @Prop({default: Date.now})
    dateCreated: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product)