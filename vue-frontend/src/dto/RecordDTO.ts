import { VoteDTO } from '@/dto/VoteDTO';

export class RecordDTO {
  _id: any;
  createdAt: any;
  imageUrl: string = '';
  artist: string = '';
  title: string = '';
  votes: VoteDTO[] = [];

  static fromData(data: any): RecordDTO {
    const record = new RecordDTO();
    record._id = data._id;
    record.createdAt = data.createdAt;
    record.imageUrl = data.imageUrl;
    record.artist = data.artist;
    record.title = data.title;
    record.votes = data.votes.map((v: any) => VoteDTO.fromData(v));
    return record;
  }
}
