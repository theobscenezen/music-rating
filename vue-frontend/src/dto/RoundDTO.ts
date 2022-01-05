import { RecordDTO } from '@/dto/RecordDTO';

export class RoundDTO {
  _id: any;
  currentRecord: RecordDTO | null = null;
  creator: string = '';
  createdAt: any;
  playerCount: number = 0;

  static fromData(data: any): RoundDTO {
    const round = new RoundDTO();
    round._id = data._id;
    round.creator = data.creator;
    round.createdAt = data.createdAt;
    round.playerCount = data.playerCount;
    round.currentRecord = RecordDTO.fromData(data.currentRecord);
    return round;
  }
}
