export class VoteDTO {
  _id: any;
  createdAt: any;
  player: string = '';
  lyrics: number = 0;
  production: number = 0;
  creativity: number = 0;
  groove: number = 0;
  underdogness: number = 0;
  earworm: number = 0;
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
