import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GameModule } from './game/game.module';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'vue-frontend/dist'),
    }),
    CommandModule,
    GameModule,
  ],
})
export class AppModule {
}
