import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Round } from '../schemas/round.schema';
import { Record } from '../schemas/record.schema';
import { Vote } from '../schemas/vote.schema';

@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {
  }

  @Get('rounds')
  async getRounds(): Promise<Round[]> {
    return this.gameService.findAllRounds();
  }

  @Get('rounds/:id')
  async findOne(@Param('id') id: string) {
    let round = await this.gameService.findRound(id);
    if (round.currentRecord && round.playerCount <= round.currentRecord.votes.length) {
      round = await this.gameService.refreshRound(round);
    }
    return round;
  }

  @Get('rounds/:id/stats')
  async findRecordsForRound(@Param('id') id: string) {
    return await this.gameService.findRecordsForRound(id);
  }

  @Post('rounds')
  async createRound(@Body() round: Round) {
    return await this.gameService.createRound(round);
  }

  @Post('rounds/:id')
  async updateRound(@Body() round: Round) {
    return await this.gameService.updateRound(round);
  }

  @Post('rounds/:id/submit')
  async submitVote(@Param('id') id: string, @Body() vote: Vote) {
    return await this.gameService.submitVoteForRound(id, vote);
  }

  @Post('records')
  async createRecord(@Body() record: Record) {
    return await this.gameService.createRecord(record);
  }

  @Get('records')
  async getRecords(): Promise<Record[]> {
    return this.gameService.findAllRecords();
  }
}
