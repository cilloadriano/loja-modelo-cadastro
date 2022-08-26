Este é um modelo para Cadastro de Pessoas e Cadastro de Produtos.
________________________________________________________________________________
Descrição 

Bem-vindo ao modelo de Cadastro, aqui você pode testar a aplicação que foi produzida em Java 11, Springboot, Angular e POSTGRES utilizando o conceito de microserviços (Docker), é possível baixar, testar e utilizar esse modelo de aplicação livremente. Vale lembrar que você pode contribuir com novos scripts para otimizar funções e estruturas.

Instruções 

    • Clone o repositório 
    • É necessário ter o Docker instalado para rodar. 
    • Utilize o script automático (bash) da pasta raiz com 2 comandos (Primeiro utilize o comando ./build.sh e posteriormente o comando docker-compose up).
    • Espere o script instalar todas as dependências.
    • Este é o primeiro meu projeto(Sugestôes ou dicas de alterações e melhoras são sempre bem vindas).
    • Foi criado um bash para limpar as máquinas virtuais do docker (Use com moderação)
    
Testes

Como esse modelo de aplicação está envolto de uma única pasta raiz e dentro dela o backend e posteriormente o frontend, os testes deverão ser feitos separados. Pode utilizar ferramentas genéricas para testar o backend como Postman ou insominia. Pode ser feito teste automatizado também, lembrando que nesse modelo de aplicação não existia uma regra de negócio para validação e ou traramento de erros. 

Execução

Como esse modelo de aplicação não foi projetado para ser utilizado em ambiente de produção, na sua execução não foi testada o impacto do processamento e qualquer tipo de verificação de redirecionamento de portas e etc. 
