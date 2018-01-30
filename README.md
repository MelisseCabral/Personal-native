# Personal
 <b>
 Documentação de projeto para gerenciamento de treinos de atividades fisicas.<br>
 Por: Melisse Cabral, Julio Lima<br>
 Início: 05/09/2016<br>
 Previsão de conclusão: 05/12/2016<br></b>
 
 <h1>A proposta do aplicativo:</h1>
 
 <p align="justify" >A proposta do aplicativo é gerenciar o treino dos praticantes de atividades fisicas de iniciantes a avançados, proporcionando um ambiente gamificado para que se estimule o ganho de massa muscular e/ou perda de gordura. Também substituindo a ficha clássica de papel adotada por maioria das academias de modo que facilite o acesso já que notavelmente foi adotado o uso de smartphones durante o treino por grande parte dos praticantes da musculação. Podendo ser adotado por academias (como possíveis clientes afim de rentabilizar a concepção do aplicativo criando assim um aplicativo genérico que poderá se adaptar conforme as necessidades de academias clientes) e uma versão a ser lançada a usuário comum.</p>
 
 <b>IDE: Visual studio</b>
 
 <p align="justify" >IDE Escolhida pela fácil usabilidade e compatibilidade com android, iOs e windows phone e também por obter melhor desempenho nos computadores utilizados na execução deste projeto.
 
 <b>Cores padrão:</b>
 Vermelho, branco e fonte preta.
 
 <p align="justify" >A escolha da cor foi baseada após pesquisa sobre a sensação que a cor pode provocar ou intensificar. A cor vermelha como principal por ser uma cor quente que induz um estado de alerta é o que buscamos já que o propósito é o aplicativo seja utilizado em no momento do exercício físico.
 
 <h2>Estratégia de desenvolvimento:</h2>
 
 <p align="justify" >Uso de orientação a objeto, adotando sempre que possível os padrões de projeto descrito pelo Gang of Four. Adotando também a metodologia de desenvolvimento dirigido por testes e o uso de interfaces para diminuir ao máximo o acoplamento  entre as classes utilizadas. Seguindo os padrões de um código coerente e coeso.
 
 <h2> Arquitetura do Sistema:</h2>
 
 <b align = "center">
 <p align="center" >
 ![arquitetura_meupersonal](https://cloud.githubusercontent.com/assets/9977351/18939403/72ec832e-85d6-11e6-814e-1dbcc9066912.png)

 </b>
 
 <h1> Funcionalidades:</h1><br>
 <h2>User stories</h2>
 
 <b>US1:</b> Como usuário sem vinculo a alguma academia, gostaria de ter como escolher a divisão de agrupamento musculares de acordo com minha vontade.<br>
 <b>Cliente:</b> Usuário sem vinculo<br>
 <b>Funcionalidade:</b> Escolha de divisão de agrupamentos musculares por usuário.<br>
 <br>
 <b>US2:</b> Como usuário sem vinculo a alguma academia gostaria de buscar por uma academia vinculada ao aplicativo.<br>
 <b>Cliente:</b> Usuário sem vinculo<br>
 <b>Funcionalidade:</b> Busca de academias.<br>
 <br>
 <b>US3:</b> Como usuário sem vinculo a alguma academia gostaria de visualizar informações de academias vinculada ao aplicativo.<br>
 <b>Cliente:</b> Usuário sem vinculo<br>
 <b>Funcionalidade:</b> Visualizar planos disponiveis.<br>
 <br>
 <b>US4:</b> Como usuário sem vinculo a alguma academia gostaria de realizar uma pré inscrição.<br>
 <b>Cliente:</b> Usuário sem vinculo<br>
 <b>Funcionalidade:</b> Realizar matricula de novo usuario a academia.<br>
 <br>
 <b>US5:</b> Como gerenciador de estabelecimento gostaria de ter acesso a lista de clientes com informações sobre seu vinculo.
 <br><b>Cliente:</b> Gerenciador 
 <br><b>Funcionalidade:</b> Acesso a clientes do estabelecimento e a informações sobre o seu vinculo atual com o estabelecimento.<br>
 <br>
 <b>US6:</b> Como gerenciador de estabelecimento gostaria de registrar pagamentos de mensalidades por outros meios.
 <br><b>Cliente:</b> Gerenciador 
 <br><b>Funcionalidade:</b> Registro de pagamento de mensalidade de usuarios por meios externos.<br>
 <br>
 <b>US7:</b> Como usuário sem vinculo a estabelecimentos gostaria de ter acesso ao banco de dados de exercícios existentes no aplicativo separados por músculo alvo.
 <br><b>Cliente:</b> Usuário sem vinculo
 <br><b>Funcionalidade:</b> Consulta de exercícios por grupo muscular.<br>
 <br>
 <b>US8:</b> Como usuário gostaria de um sistema de classificação de exercícios.
 <br><b>Cliente:</b> Usuário em geral
 <br>Funcionalidade: Avaliação dos usuários em cada exercício afim de obter uma média.<br>
 <br>
 <b>US9:</b> Como usuário gostaria de uma plataforma de exercícios, onde eu pudesse adiciona-lo a minha lista de exercício e houvesse um mini resumo do exercício juntamente com uma figura explicativa e um vídeo.
 <br><b>Cliente:</b> Usuário em geral
 <br>Funcionalidade: Blog de exercícios.<br>
 <br>
 <b>US10:</b> Como personal gostaria de poder comentar os exercicíos da plataforma de forma que para meus alunos meu comentário aparecesse primeiro.
 <br><b>Cliente:</b> Personal
 <br>Funcionalidade: Comentário de exercícios.<br>
 <br>
 <b>US11:</b> Como usuário sem vinculos a estabelecimentos gostaria de ter como escolher adicionar exercicio ao meu treino.
 <br><b>Cliente:</b> Usuário sem vinculo
 <br><b>Funcionalidade:</b> Adicionar exercício.<br>
 <br>
 <b>US12:</b> Como usuário sem vinculos a estabelecimentos gostaria de ter como escolher remover exercicio do meu treino.
 <br><b>Cliente:</b> Usuário sem vinculo
 <br><b>Funcionalidade:</b> Remover exercício.<br>
 <br>
 <b>US13:</b> Como personal gostaria de adicionar observações aos meus exercícios e treino dos alunos;
 <br><b>Cliente:</b> Personal
 <br><b>Funcionalidade:</b> Adicionar observação de exercício e treinos ao aluno.<br>
 <br>
 <b>US14:</b> Como usuário vinculado gostaria de pagar a mensalidade pelo meu cartão de crédito através do aplicativo.
 <br><b>Cliente:</b> Usuário vinculado
 <br><b>Funcionalidade:</b> Fazer Pagamento online de mensalidade.<br>
 <br>
 <b>US15:</b> Como usuário vinculado gostaria de poder trocar mensagens com colegas da academia e personal.
 <br><b>Cliente:</b> Usuário vinculado
 <br><b>Funcionalidade:</b> Troca de mensagem com colegas e personal.<br>
 <br>
 <b>US16:</b> Como usuário gostaria de ter acesso a um portal de mensagens da academia.
 <br><b>Cliente:</b> Usuário vinculado
 <br><b>Funcionalidade:</b> Acesso a portal de mensagens da academia.<br>
 <br>
 
 <h1>Cronograma de execução</h1><br>
 
 <h3>Fase 1: Criação de protótipo das interfaces, e transições.</h3>
 
 <p align="justify" >Nessa fase do projeto é desejável a criação de todas as views do aplicativo que estará documentado mais abaixo nesse mesmo documento. Com o intuito de uma melhor perspectiva de melhorias e abstração na arquitetura do design que será adotado com base nas funcionalidades que a serem implantadas.
 
 <h3>Fase 2: Concepção da parte arquitetural do back-end.</h3>
 
 Escolhas de modelos e padrões a serem adotados, documentação por meio de diagramas UML detalhados.
 
 <h3>Fase 3: Criação de testes.</h3>
 
 <p align="justify" >Criação de testes automáticos para todas as funcionalidades implementadas, com a finalidade de desenvolvermos o projeto guiado por testes. 
 
 
 <h3>Fase 4: Programação do back-end.</h3>
 
 <p align="justify" >Programação das funcionalidades seguindo a arquitetura e os testes do modo que foi previsto nas fases 2 e 3.
 
 
 <h3>Fase 5: Finalização e rentabilização.</h3>
 
  <p align="justify" >A fase 5 consistem em promover o aplicativo e busca de usuários de modo que o aplicativo se torne rentável financeiramente com meta de obter retorno durante os primeiros 6 meses após sua publicação.
 
 <h1>Pacotes</h1>
 
 <h3>Pacote User</h3>
 
 <p align="justify" >No pacote user estarão mantidas apenas as informações relacionadas ao usuário, como login, senha e dados pessoais. Sendo dividido o tipo de usuário em três com diferentes tipos Gerente, treinador e aluno.
 No pacote foi utilizado o design pattern Abstract Factory. Contendo uma super classe User e três classes filhas que herdam os dados de User.
 <p align="center" >
 ![user_diagram](https://cloud.githubusercontent.com/assets/9977351/18956370/97084d3c-8631-11e6-8721-888cc05daddf.png)
 
 <h3>Pacote Account</h3>
 
 <p align="justify" >Neste pacotes estão contidas a estruturação por composiçao de todas as informações relacionadas ao usuário como treinos, informações pessoais e troca de mensagens. Para garantir a segurança e consistencia dos dados contidos em cada classe se faz necessário uma forte utilização de encapsulamento dos dados de cada objeto. A classe Account é composta por objetos dos tipos User, Chat, Profile e Workout.
 <p align="center" >
![account_simplificado 1](https://cloud.githubusercontent.com/assets/9977351/18956621/6ef08a66-8632-11e6-9f4d-cca900dac014.png)

 <h3>Pacote Workout</h3>
 
 <p align="justify" >No pacote workout contém um conjunto de treinos onde estão agrupados os exercício. Possui uma interface WorkoutService por onde será possível realizar alterações no treinamento do usuário garantindo assim o baixo acoplamento e garantindo a consistencia dos dados.
 O pacote é composto de classes do tipo Exercise, Workout e a interface WorkoutServices.
 <p align="center" >
 ![workout_diagram](https://cloud.githubusercontent.com/assets/9977351/18962905/0086111a-8649-11e6-9348-f54458579036.png)
 
 <h3>Pacote Communication</h3>
 
 <p align="justify" >O pacote fornecerá inicialmente a estrutura necessária para a comunicação entre dois usuários. O pacote é composto por dois tipos basicos de classe que são Chat e Message. A classe Chat fará a comunicação final com a interface gráfica e é composta por objetos dos tipos User e Message. Ainda deverá ser analisado o uso de uma interface para fazer a comunicação e troca de informações com a interface gráfica fornecida ao usuário.
 <p align="center" >
 ![communication_diagram](https://cloud.githubusercontent.com/assets/9977351/18962916/07e0ac18-8649-11e6-821b-96276ec4fdc1.png)
 
 <h1> Views</h1>
 
 <h3>Inicial</h3>
 
 <p align="justify" >A tela inicial será a tela de apresentação contendo apenas a logo do aplicativo e mais dois botões "Novo por aqui?" e "Não" que levam o usuário a tela de cadastro e a tela de login respectivamente.
 
 <p align="center" >
![inicial](https://cloud.githubusercontent.com/assets/9977351/18917578/95d19126-856e-11e6-841d-7c4394a5fdf2.jpg)
 
 <h3>Tela de Cadastro</h3>
 
 Na tela de cadastro haverá apenas três campos de informações necessárias para criação de conta, deixando pra complemtentar as outrar informações posteriormente após um primeiro contato do usuário com a aplicativo deixando na mão do usuário a escolha de um momento oportuno para completar o cadastro. Contando também com a opção de realizar o cadastro com o facebook ou instagram. 
 
 <h3>Tela de Login</h3>
 
 Tela de Login interativa contando apenas com os dois campo e botões para login com facebook ou instagram. E caso opte pelo login por username e senha após sair do campo login realiza uma busca no banco de dados a procura do usuario e o numero de caracteres que possui sua senha, caso não encontrado exibe mensagem de erro. Quando encontrado e o numero de caractere do campo password atingir o numero de caracteres da senha realiza tentativa de login.
  <p align="center" >
![sign-up](https://cloud.githubusercontent.com/assets/9977351/18972847/2323f908-8671-11e6-82d4-0aa608a4d84f.png)

 
 <h3>Menu</h3>
 
 <p align="justify" >Após logado será possivel acessar o menu do usuário clicando no botão no canto esquerdo superior ou deslizando a tela da esquerda para a direita. O menu será composto de foto de perfil, nome e opções meu perfil, treinos, mensagens, configurações e fale conosco. 
 
 <h3>Tela de Perfil</h3>
 
Na tela de perfil haverá apenas foto, nome e descrição opcional. O perfil pessoal será visivel apenas a pessoas de um mesmo ciclo ou clientes do mesmo estabelecimento. 

<h3>Tela de Mensagens</h3>

<p align="justify" >Exibe a uma lista de chats já iniciado. Contendo na toolbar no direito um botão para iniciar novas conversas. O usuário tem a opção de apagar as conversas clicando e segurando a mensagem durante 1s ou abrindo a conversa na toolbar canto direito.

<h3>Tela de Treinos</h3>

<p align="justify" >Será a primeira tela após login. Possuira a lista de Exercicios por padrão separando os por marcador de cores diferentes para cada dia de treino podendo ser alterado nas configurações para exibir por dias de treino. 
