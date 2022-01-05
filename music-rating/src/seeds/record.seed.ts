import { Command, Positional } from 'nestjs-command';
import { Inject, Injectable } from '@nestjs/common';
import { GameService } from '../game/game.service';
import { Record } from '../schemas/record.schema';

@Injectable()
export class RecordSeed {
  constructor(
    @Inject(GameService) private readonly gameService: GameService,
  ) {
  }

  @Command({command: 'create:records', describe: 'Create records.'})
  async create() {
    const promises = [];
    this.recordList.forEach((record: Record) => {
      promises.push(this.gameService.createRecord(record));
    });

    await Promise.all(promises);
  }

  get recordList(): Record[] {
    return [
      {
        artist: 'Whitechapel',
        title: 'Kin',
        imageUrl: 'https://www.metal-hammer.de/wp-content/uploads/2021/10/29/10/whitechapel-992x992.jpg',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Gojira',
        title: 'Fortitude',
        imageUrl: 'https://sharpshooter-pics.de/wp-content/uploads/2021/05/gojira-fortitude-album-01-2021.jpg',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Mastodon',
        title: 'Hushed and Grim',
        imageUrl: 'https://rockhard.de/imgs/8978898_20226a09e0.jpg',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Soen',
        title: 'Imperial',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Silent Planet',
        title: 'Iridescent',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Light The Torch',
        title: 'You Will Be The Death Of Me',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Architects',
        title: 'For Those That Wish To Exist',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Carnifex',
        title: 'Graveside Confessions',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Normandie',
        title: 'Dark & Beautiful Secrets',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Chevelle',
        title: 'Niratias',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Erra',
        title: 'Erra',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Cannibal Corpse',
        title: 'Violence Unimagined',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'While She Sleeps',
        title: 'Sleeps Society',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Caliban',
        title: 'Zeitgeister',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Atreyu',
        title: 'Baptize',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Beartooth',
        title: 'Below',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Powerwolf',
        title: 'Call Of The Wild',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Between The Buried And Me',
        title: 'Colors II',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Love and Death',
        title: 'Perfectly Preserved',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Slaughter To Prevail',
        title: 'Kostolom',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Aborted',
        title: 'ManiaCult',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Tremonti',
        title: 'Marching In Time',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Wage War',
        title: 'Maniac',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Born Of Osiris',
        title: 'Angel or Alien',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Jinjer',
        title: 'Wallflowers',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Leprous',
        title: 'Aphelion',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'We Butter The Bread With Butter',
        title: 'Das Album',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Trivium',
        title: 'In The Court Of The Dragon',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Twelve Foot Ninja',
        title: 'Vengeance',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Bullet For My Valentine',
        title: 'Bullet For My Valentine',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Hypocrisy',
        title: 'Worship',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'The Browning',
        title: 'End Of Existence',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Volbeat',
        title: 'Servant Of The Mind',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Ice Nine Kills',
        title: 'Welcome To Horrorwood: The Silver Scream 2',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Of Mice & Men',
        title: 'Echo',
        imageUrl: '',
        votes: [],
        year: 2021,
      },
    ];
  }
}
