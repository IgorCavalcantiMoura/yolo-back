import { Injectable } from '@nestjs/common';
import { PutCommand, ScanCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { dynamoClient } from '../database/dynamo.service';

@Injectable()
export class PessoaService {
  private tableName = 'Pessoas';

  async criarPessoa(data: any): Promise<any> {
    const params = new PutCommand({
      TableName: this.tableName,
      Item: data,
    });

    await dynamoClient.send(params); // Corrigido para usar o método send com PutCommand
    return { message: 'Pessoa criada com sucesso!', data };
  }

  async listarPessoas(): Promise<any> {
    const params = new ScanCommand({ TableName: this.tableName });
    const result = await dynamoClient.send(params);
    return result.Items;
  }

  async buscarPessoaPorId(id: string): Promise<any> {
    const params = new GetCommand({
      TableName: this.tableName,
      Key: { id },
    });

    const result = await dynamoClient.send(params);
    return result.Item;
  }

  async atualizarPessoa(id: string, data: any): Promise<any> {
    const params = new UpdateCommand({
      TableName: this.tableName,
      Key: { id },
      UpdateExpression: 'set #nome = :nome, #email = :email',
      ExpressionAttributeNames: {
        '#nome': 'nome',
        '#email': 'email',
      },
      ExpressionAttributeValues: {
        ':nome': data.nome,
        ':email': data.email,
      },
    });

    await dynamoClient.send(params);
    return { message: 'Pessoa atualizada com sucesso!' };
  }

  async excluirPessoa(id: string): Promise<any> {
    const params = new DeleteCommand({
      TableName: this.tableName,
      Key: { id },
    });

    await dynamoClient.send(params);
    return { message: 'Pessoa excluída com sucesso!' };
  }
}
