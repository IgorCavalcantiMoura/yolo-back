import { Controller, Post } from '@nestjs/common';
import { ImportacaoService } from './importacao.service';

@Controller('importacao')
export class ImportacaoController {
  constructor(private readonly importacaoService: ImportacaoService) {}

  @Post()
  importar() {
    return this.importacaoService.importarPessoas();
  }
}
