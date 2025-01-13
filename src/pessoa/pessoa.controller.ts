import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  criarPessoa(@Body() data: any) {
    return this.pessoaService.criarPessoa(data);
  }

  @Get()
  listarPessoas() {
    return this.pessoaService.listarPessoas();
  }

  @Get(':id')
  buscarPessoaPorId(@Param('id') id: string) {
    return this.pessoaService.buscarPessoaPorId(id);
  }

  @Put(':id')
  atualizarPessoa(@Param('id') id: string, @Body() data: any) {
    return this.pessoaService.atualizarPessoa(id, data);
  }

  @Delete(':id')
  excluirPessoa(@Param('id') id: string) {
    return this.pessoaService.excluirPessoa(id);
  }
}

