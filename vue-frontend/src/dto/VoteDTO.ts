export class VoteDTO {
  _id: any;
  createdAt: any;
  player: string = '';
  lyrics: number = 2;
  production: number = 2;
  creativity: number = 2.5;
  groove: number = 2;
  underdogness: number = 2;
  earworm: number = 2;
  round: string = '';

  static fromData(data: any): VoteDTO {
    const vote = new VoteDTO();
    vote._id = data._id;
    vote.createdAt = data.createdAt;
    vote.player = data.player;
    vote.lyrics = data.lyrics;
    vote.production = data.production;
    vote.creativity = data.creativity;
    vote.groove = data.groove;
    vote.underdogness = data.underdogness;
    vote.earworm = data.earworm;
    vote.round = data.round;
    return vote;
  }

  get isValid(): boolean {
    return this.production !== 0
    && this.creativity !== 0
    && this.groove !== 0
    && this.underdogness !== 0
    && this.earworm !== 0;
  }
}
