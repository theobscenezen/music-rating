import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Round, RoundDocument } from './round.schema';

export type VoteDocument = Vote & Document;

@Schema()
export class Vote {

  @Prop({type: String, required: true})
  player: string;

  @Prop({type: Number, required: true})
  lyrics: number;

  @Prop({type: Number, required: true})
  production: number;

  @Prop({type: Number, required: true})
  creativity: number;

  @Prop({type: Number, required: true})
  groove: number;

  @Prop({type: Number, required: true})
  underdogness: number;

  @Prop({type: Number, required: true})
  earworm: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Round'})
  round: RoundDocument;

  @Prop({type: Date, default: Date.now})
  createdAt: () => number;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
