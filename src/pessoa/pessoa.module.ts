import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';

@Module({
  controllers: [PessoaController], // Controlador para gerenciar rotas do módulo
  providers: [PessoaService], // Serviços usados no módulo
  exports: [PessoaService], // Exporta o serviço para ser usado em outros módulos (como o de importação)
})
export class PessoaModule {}


