import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Round, RoundDocument } from '../schemas/round.schema';
import { Model, Schema, Types } from 'mongoose';
import { Record, RecordDocument } from '../schemas/record.schema';
import { Vote, VoteDocument } from '../schemas/vote.schema';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Round.name) private roundModel: Model<RoundDocument>,
    @InjectModel(Record.name) private recordModel: Model<RecordDocument>,
    @InjectModel(Vote.name) private voteModel: Model<VoteDocument>,
  ) {
  }

  async createRound(round: Round): Promise<RoundDocument> {
    const newRound = new this.roundModel(round);
    await newRound.save();
    return await this.refreshRound(newRound);
  }

  async updateRound(round: Round) {
    const existingRound = await this.roundModel.findOne({_id: round._id}).exec();
    // Only update playercount because..
    existingRound.playerCount = round.playerCount;
    return await existingRound.save();
  }

  async refreshRound(round: RoundDocument) {
    const record = await this.findRandomRecord(round);
    if (record) {
      round.currentRecord = record;
      return await round.save();
    }

    round.currentRecord = null;
    return await round.save();
  }

  async findAllRounds(): Promise<RoundDocument[]> {
    return await this.roundModel.find().populate('currentRecord').exec();
  }

  async findRound(id: string): Promise<RoundDocument> {
    return await this.roundModel.findOne({_id: new Types.ObjectId(id)}).populate({
      path: 'currentRecord',
      populate: {path: 'votes', match: {round: new Types.ObjectId(id)}},
    }).exec();
  }

  async createRecord(record: Record) {
    const newRecord = new this.recordModel(record);
    return await newRecord.save();
  }

  async findAllRecords(): Promise<Record[]> {
    return await this.recordModel.find().exec();
  }

  private async findRandomRecord(round: RoundDocument): Promise<any> {
    const models = await this.recordModel.aggregate([
      {
        $lookup: {
          from: 'votes',
          localField: 'votes',
          foreignField: '_id',
          as: 'resolvedVotes',
        },
      },
      {
        $match: {
          year: 2021,
          'resolvedVotes.round': {
            '$ne': new Types.ObjectId(round._id),
          },
        },
      },
    ]).exec();
    // const count = await this.recordModel.count({
    //   year: 2021,
    //   $or: [{'votes.round': {$ne: round}}, {'votes.0': {$exists: false}}],
    // }).exec();
    const count = models.length;
    // Get a random entry
    const random = Math.floor(Math.random() * count);
    // Again query all users but only fetch one offset by our random #
    const randomRecord = await this.recordModel.aggregate([
      {
        $lookup: {
          from: 'votes',
          localField: 'votes',
          foreignField: '_id',
          as: 'resolvedVotes',
        },
      },
      {
        $match: {
          year: 2021,
          'resolvedVotes.round': {
            '$ne': new Types.ObjectId(round._id),
          },
        },
      },
    ]).skip(random).exec();
    if (randomRecord.length) {
      return await this.recordModel.findOne({_id: randomRecord[0]._id.toString()}).exec();
    }
    return null;
  }

  async submitVoteForRound(id: string, vote: Vote): Promise<RecordDocument | null> {
    const round = await this.findRound(id);
    if (round) {
      const record = <RecordDocument>round.currentRecord;
      if (record) {
        const existingVote = record.votes.find((v) => v.round._id.toString() === round.id && v.player === vote.player);
        if (existingVote) {
          const index = record.votes.indexOf(existingVote);
          record.votes.splice(index, 1);
          await existingVote.delete();
        }
        const voteObject = new this.voteModel(vote);
        await voteObject.save();
        record.votes.push(voteObject);
        await record.save();
        record.votes = record.votes.filter(v => v.round.toString() === id);
        return record;
      }
    }
    return null;
  }

  async findRecordsForRound(id: string) {
    const records = await this.recordModel.find({year: 2021}).populate('votes').exec();
    records.forEach((r) => {
      r.votes = r.votes.filter(v => v.round.toString() === id);
    });
    return records;
  }
}
