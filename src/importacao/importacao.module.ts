
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Para consumir APIs externas
import { ImportacaoService } from './importacao.service';
import { ImportacaoController } from './importacao.controller';
import { PessoaModule } from '../pessoa/pessoa.module'; // Importa o módulo Pessoa para salvar os dados importados

@Module({
  imports: [HttpModule, PessoaModule], // Adiciona o módulo Http para chamadas externas e o módulo Pessoa
  controllers: [ImportacaoController],
  providers: [ImportacaoService],
})
export class ImportacaoModule {}
