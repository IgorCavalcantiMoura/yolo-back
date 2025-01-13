import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { ImportacaoModule } from './importacao/importacao.module';

@Module({
  imports: [PessoaModule, ImportacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
