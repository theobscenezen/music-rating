import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Record, RecordDocument } from './record.schema';

export type RoundDocument = Round & Document;

@Schema()
export class Round {
  _id: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Record'})
  currentRecord: RecordDocument;

  @Prop({type: Date, default: Date.now})
  createdAt: Date;

  @Prop({type: String, default: ''})
  creator: string;

  @Prop({type: Number, default: 0})
  playerCount: number;
}

export const RoundSchema = SchemaFactory.createForClass(Round);
