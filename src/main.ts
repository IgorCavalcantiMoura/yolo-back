import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Cria a aplicação com o módulo principal
  const app = await NestFactory.create(AppModule);

  // Define um prefixo global para as rotas
  app.setGlobalPrefix('api'); // Todas as rotas terão o prefixo /api (ex.: /api/pessoas)

  // Configuração para CORS (se necessário)
  app.enableCors({
    origin: '*', // Permite todas as origens. Alterar conforme necessário.
  });

  // Inicia o servidor na porta 3000
  await app.listen(3000);
  console.log(`Aplicação rodando em: http://localhost:3000/api`);
}

bootstrap();

