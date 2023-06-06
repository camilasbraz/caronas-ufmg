## Sistema de Caronas para a comunidade da UFMG
1. Install node
2. Install yarn (npm install --global yarn)
3. Run yarn on terminal
4. Run yarn rund dev on terminal
# Membros

Arthur de Oliveira Lima - 2019027318 - Product Owner
Bernardo Taulois Braga - 2019027369 - Dev Fullstack
Camila Santana Braz - 2019027423 - Dev Fullstack
Clara Maria Candido Martins - 2018093058 - Dev Fullstack

# Tecnologias

Para desenvolvimento, será usado o framework React para o frontend e um Google Cloud Storage para armazenamento dos dados.

# Escopo do Sistema

Este sistema busca agilizar e universalizar o sistema de caronas organizado e gerenciado por alunos da UFMG, já existente em grupos do Whatsapp. Atualmente, pessoas são adicionadas aos grupos de macroregiões da cidade, podendo enviar uma mensagem oferecendo carona com dia, horário, rota e preço. Os demais membros do grupo podem entrar em contato de forma privada e então se registrar na carona oferecida, combinando também o local. Após a carona, os que usufuiram costumam pagar usando o PIX.
Neste sistema, qualquer usuário pode oferecer uma carona, passando as mesmas informações, jutamente com seu numero de telefone. Esta carona fica então disponível para os demais usuários buscarem usando uma série de filtros. Encontrando uma carona de interesse, é possível contatar a pessoa que ofereceu a carona por meio de um botão que encaminha para o Whatsapp privado dela.

## Backlog

- **Eu, como usuário, quero oferecer vagas de caronas no meu carro**

- **Eu, como usuário, quero conseguir uma carona da minha casa para a ufmg**

- **Eu, como usuário, quero conseguir uma carona da UFMG para a minha casa**

- **Eu, como usuário, quero que apenas membros da comunidade UFMG possam usar o sistema de caronas**

- **Eu, como usuário, quero poder entrar em contato diretamente com a pessoa oferecendo a carona que tenho interesse**

- **Eu, como usuário, quero ter um login para salvar minhas informações**

- **Eu, como usuário, quero poder adminstrar as caronas que ofereci**

- **Eu, como usuário, quero poder vizualizar as caronas nas quais me registrei**

- **Eu, como usuário, quero oferecer caronas fixas**

- **Eu, como usuário, quero me registrar em caronas fixas**

- **Eu, como usuário, quero poder denunciar problemas**

- **Eu, como usuário, quero poder pagar a carona pelo sistema**

- **Eu, como usuário, quero que o sistema calcule a melhor rota possível para a carona, disponibilizando a rota aos envolvidos e onde cada um entrará no carro**

## Sprint Backlog

- [x] **Tarefas iniciais (não pertencem a nenhuma história)**

  - [x] Criar projeto React e configurar ambiente. (Arthur Lima)
    - [x] Clonar projeto e fazer as instalações de dependências. (Todos)
  - [x] Criar projeto no Firebase, configurar FireStore e conectar ao projeto React. (Arthur Lima)
    - [x] Criar página Home, dando navegabilidade para "Oferecer Carona" ou "Procurar Carona". (Arthur Lima)

- [x] **Eu, como usuário, quero oferecer vagas de caronas no meu carro**

  - [x] Criar página de oferecimento de carona, com formulário para: ida/volta, origem/destino, horário (dia e hora) e número de vagas. (Camila Braz)
    - [x] Opções de origem/destino são um select entre opções hard coded de regiões de BH. (Camila Braz)
    - [x] Validação nos campos: horário no futuro. (Camila Braz)
    - [x] Pegar informações de nome e celular do usuário atual. (Camila Braz)
    - [x] Enviar carona criada para o banco de dados firebase. (Camila Braz)
    - [x] Exibir confirmação para usuário e redirecionar para home. (Camila Braz)

- [ ] **Eu, como usuário, quero conseguir uma carona da minha casa para a ufmg**

  - [ ] Criar página para busca de carona, exibindo uma lista de caronas disponíveis. (Clara Martins)
    - [x] Buscar caronas disponíveis no banco de dados. (Arthur Lima)
  - [ ] Criar interface de filtros para as caronas exibidas: opção ida/volta, origem/destino, horário. (Clara Martins)
    - [ ] Validar o horário (Clara Martins)
  - [x] Função para realizar busca no banco de dados usando filtros. (Clara Martins)
    - [ ] Realizar a filtragem das caronas de IDA, filtrando também pelo horário, refletindo o filtro na lista de caronas exibidas. (Clara Martins)
  - [ ] Fazer o elemento carona ser clicável e redirecionar para página de carona especifica e colocar o ID da selecionada no PARAM da rota. (Clara Martins)

- [ ] **Eu, como usuário, quero conseguir uma carona da UFMG para a minha casa**

  - [ ] Na página de busca de carona, realizar a filtragem das caronas de VOLTA, filtrando também pelo horário, refletindo o filtro na lista de caronas exibidas. (Clara Martins)
  - [ ] Fazer o elemento carona ser clicável e redirecionar para página de carona especifica e colocar o ID da selecionada no PARAM da rota. (Clara Martins)

- [x] **Eu, como usuário, quero que apenas membros da comunidade UFMG possam usar o sistema de caronas**

  - [x] Criar uma página inicial, com um formulário de informações para o usuário: nome, email e celular. (Bernardo Braga)
    - [x] Validar campos: celular completo com DDD; email @ufmg.br. (Bernardo Braga)
    - [x] Salvar informações do usuário localmente para uso em demais páginas. (Bernardo Braga)
    - [x] Sempre redirecionar para esta página quando não houverem dados do usuário. (Bernardo Braga)

- [x] **Eu, como usuário, quero poder entrar em contato diretamente com a pessoa oferecendo a carona que tenho interesse**
  - [x] Criar página de carona específica, com as informações de uma carona. (Arthur Lima)
    - [x] Busca no banco de cados com base no ID. (Arthur Lima)
    - [x] Mostrar as informações da carona especificada pelo ID da rota. (Arthur Lima)
    - [x] Botão de redirecionamento para o whatsapp usando o celular do usuário que ofereceu a carona. (Arthur Lima)
