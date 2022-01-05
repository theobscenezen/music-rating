import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Vote, VoteDocument } from './vote.schema';

export type RecordDocument = Record & Document;

@Schema()
export class Record {

  @Prop({type: String, required: true})
  artist: string;

  @Prop({type: String, required: true})
  title: string;

  @Prop({type: String})
  imageUrl: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Vote'}]})
  votes: VoteDocument[];

  @Prop({type: Number})
  year: number;

  @Prop({type: Date, default: Date.now()})
  createdAt?: Date;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
