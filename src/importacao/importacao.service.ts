import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PessoaService } from '../pessoa/pessoa.service';

@Injectable()
export class ImportacaoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly pessoaService: PessoaService,
  ) {}

  async importarPessoas() {
    const { data } = await this.httpService.axiosRef.get(
      'https://3ji5haxzr9.execute-api.us-east-1.amazonaws.com/dev/caseYolo',
    );

    for (const pessoa of data) {
      await this.pessoaService.criarPessoa(pessoa);
    }
    return { message: 'Dados importados com sucesso!' };
  }
}
