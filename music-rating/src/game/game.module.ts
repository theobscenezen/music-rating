import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Round, RoundSchema } from '../schemas/round.schema';
import { Record, RecordSchema } from '../schemas/record.schema';
import { Vote, VoteSchema } from '../schemas/vote.schema';
import { RecordSeed } from '../seeds/record.seed';

@Module({
  controllers: [GameController],
  providers: [
    GameService,
    RecordSeed,
  ],
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongo.global/music-rating?authSource=admin`),
    MongooseModule.forFeature([
      {name: Round.name, schema: RoundSchema},
      {name: Record.name, schema: RecordSchema},
      {name: Vote.name, schema: VoteSchema},
    ]),
  ],
  exports: [
    GameService,
    RecordSeed,
  ],
})
export class GameModule {
}
