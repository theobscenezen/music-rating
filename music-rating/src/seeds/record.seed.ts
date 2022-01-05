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
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e024818f6eb5e785c2f543cf774',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Silent Planet',
        title: 'Iridescent',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02877dca042f64bba9de01a138',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Light The Torch',
        title: 'You Will Be The Death Of Me',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e7bdb09c822252c93e3f9a57',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Architects',
        title: 'For Those That Wish To Exist',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02c78b2edbc9407cea20ccfb9f',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Carnifex',
        title: 'Graveside Confessions',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02244465301dfd29fe5b562c57',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Normandie',
        title: 'Dark & Beautiful Secrets',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02798d65467f5208d83088b48f',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Chevelle',
        title: 'Niratias',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e029b042afdc75bdd6549a6bad2',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Erra',
        title: 'Erra',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e024703f6ad5c70c8c4615b9491',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Cannibal Corpse',
        title: 'Violence Unimagined',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02b5c9290165a4cd1d5b37cb62',
        votes: [],
        year: 2021,
      },
      {
        artist: 'While She Sleeps',
        title: 'Sleeps Society',
        imageUrl: 'https://www.awayfromlife.com/wp-content/uploads/While-She-sLeeps-Sleeps-Society-Album-Cover-2020.jpg',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Caliban',
        title: 'Zeitgeister',
        imageUrl: 'https://www.impericon-mag.com/de/wp-content/uploads/sites/2/2021/02/Zeitgeister-1024x1024.jpg',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Atreyu',
        title: 'Baptize',
        imageUrl: 'https://m.media-amazon.com/images/I/81+eQH2y5bL._SL1200_.jpg',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Beartooth',
        title: 'Below',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e0235e1ba1b6d84673e306b3e89',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Powerwolf',
        title: 'Call Of The Wild',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02379352b72b8e75bd7a40b8a2',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Between The Buried And Me',
        title: 'Colors II',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a9fef38b45536ae05931ede3',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Love and Death',
        title: 'Perfectly Preserved',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e0219fec4b73ee0a0fb5b44e41a',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Slaughter To Prevail',
        title: 'Kostolom',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02216bcc698a15eb6101b9c9e3',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Aborted',
        title: 'ManiaCult',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e0243e4040f599e8d1e6f1820a8',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Tremonti',
        title: 'Marching In Time',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02bbd52ef9d9fdb1c7fbfd3289',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Wage War',
        title: 'Maniac',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02a5f7d35901c2357eeb50106a',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Born Of Osiris',
        title: 'Angel or Alien',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e0297491b37564e83c230d9d07e',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Jinjer',
        title: 'Wallflowers',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02cb63958664ce7153721fb1aa',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Leprous',
        title: 'Aphelion',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e024818f6eb5e785c2f543cf774',
        votes: [],
        year: 2021,
      },
      {
        artist: 'We Butter The Bread With Butter',
        title: 'Das Album',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02c2d7989ce2a049bc360669c6',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Trivium',
        title: 'In The Court Of The Dragon',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e0225b9f6fff06527d26895c96b',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Twelve Foot Ninja',
        title: 'Vengeance',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e021901218a09511d335271591d',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Bullet For My Valentine',
        title: 'Bullet For My Valentine',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e022f1366c8b236b5be98b7b476',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Hypocrisy',
        title: 'Worship',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e020a8d0bda492a5813e3f3aadf',
        votes: [],
        year: 2021,
      },
      {
        artist: 'The Browning',
        title: 'End Of Existence',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e0200663887ae32529bcef29f70',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Volbeat',
        title: 'Servant Of The Mind',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02108d3b26e2c2fd86c6c1b7ec',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Ice Nine Kills',
        title: 'Welcome To Horrorwood: The Silver Scream 2',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e02eb2826b3e23703d6e1d1bd0a',
        votes: [],
        year: 2021,
      },
      {
        artist: 'Of Mice & Men',
        title: 'Echo',
        imageUrl: 'https://i.scdn.co/image/ab67616d00001e028eaa8ea5ed8b61cfeeda605f',
        votes: [],
        year: 2021,
      }
    ];
  }
}
