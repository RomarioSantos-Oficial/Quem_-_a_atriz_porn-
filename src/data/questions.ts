// questions.ts

//Esse é uma aquivo de bancos de dados é temporario, recomendo fazer uma com.
//As imagem tem direitos autrais, recomendo.


export interface Question {
  image: string;
  name: string;
  hints: string[];
}

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
  return array;
};

export const questions = [
  {
    name: "Mia Khalifa", // Este nome é para ser usado internamente, não aparecerá nas dicas
    image: "/images/mia.png", // Caminho da imagem na pasta public
    hints: shuffleArray([
      "Nasceu em 10 de fevereiro de 1993.",
      "Se mudou novamente para Montgomery County, Estado de Maryland, durante a adolescência.",
      "Sua carreira na indústria adulta durou apenas três meses.",
      "Ela foi uma das figuras mais procuradas na indústria de filmes adultos durante seu tempo.",
      "Após deixar a indústria adulta, ela se tornou comentarista esportiva.",
      "Sua curta e bem-sucedida carreira como atriz pornográfica entre os anos de 2014 e 2015.",
      "Nascida no Líbano, começou a residir nos Estados Unidos em 2000.",
      "Em outubro de 2014, começou a sua carreira na indústria pornográfica, e em dezembro do respectivo ano tornou-se a atriz mais vista do mês no site Pornhub.",
      "Sua família era católica.",
      "Fez apenas 28 filme.",
      "Graduou pela Universidade do Texas em El Paso, com um Bacharelado em artes em História.",
      "Casou-se com 18 anos.",
      "Em 28 de dezembro de 2014, foi a atriz número um, ultrapassando a veterana Lisa Ann.",
      "Declarou em entrevista que se arrependia de ter trabalhado como atriz pornô.",
      "Já foi citada em uma CPI no brasil.",
      "O filme BangBros, foi o mais polêmico de sua carreira.",
      "Ela ficou conhecida por um papel controverso em um vídeo envolvendo um hijab.",
      "Nasceu em Beirute, Líbano.",
      "Começou a carreia com 22 Anos.",
      "Depois de uma polêmica abadonou sua carreira.",
    ]).slice(0, 10),
  },

  {
    name: "Eva Elfie", // Este nome é para ser usado internamente, não aparecerá nas dicas
    image: "/images/Eva_elfie.png", // Caminho da imagem na pasta public
    hints: shuffleArray([
      "É Russa",
      "Seu nome é Yulia Sergeevna Romanova.",
      "Sua cidade natal é Omsk, uma cidade da Rússia, capital da província homônima.",
      "Nascida em  27 de maio de 1997.",
      "Ela é a vencedora do AVN Awards na categoria Melhor Estrela Estrangeira Emergente em 2021.",
      "As primeiras fotografias como modelo erótica ocorreram no outono de 2018 na Crimeia.",
      "Fez Faculdade de Jornalismo.",
      "Casou com também ator, Adam Ocelot em dezembro de 2019.",
      "Tentou vários empregos, inclusive gerente e garçonete.",
      "Fez um estágio como correspondente do canal de televisão de Omsk.",
      "Em fevereiro de 2019 criou um canal no Pornhub.",
      "Seu primeiro vídeo enviado ganhou grande popularidade e em fevereiro de 2020 teve mais de 53 milhões de visualizações.",
      "No início de novembro de 2020, ocupava o quarto lugar na classificação do Pornhub.",
      "Tem filmado para os estúdios e sites Amour Angels, Babes, Brazzers, MetArt, Nubiles, Reality Kings, TeamSkeet, WowGirls e outros.",
      "Desde fevereiro de 2020, ele dirige um canal no YouTube onde fala sobre a indústria do sexo.",
      "Já estrelou 100 cenas e filmes.",
      "Ela morou em Moscou por algum tempo.",
      "Em março de 2022, ela deixou a Rússia e atualmente mora na Califórnia.",
      "Em 2023, foi lançado um documentário dirigido por Evgeny Milykh, chamado de Артём и Ева. Traduzido Artem e Eva.",
      "É uma personagem jogável no simulador de namoro Booty Calls da Nutaku.",
      "Em 2021, ela apresentou o uniforme de futebol do clube italiano Venezia",
      "Ela planejou contribuir com fundos de sua conta OnlyFans para o prêmio do torneio Dota 2 TI12, embora os vencedores (Team Spirit) a tenham recusado.",
      "Ela também apareceu em uma campanha publicitária ao lado da equipe de Counter-Strike 2 da Aurora Gaming.",
      "Ela já veio ao Brasil acompanhando o IEM Rio Major in loco, marcando presença no Riocentro durante os dois dias finais do Legends Stage, em 2022",
    ]).slice(0, 10),
  },


  {
    name: "Mia Malkova", // Este nome é para ser usado internamente, não aparecerá nas dicas
    image: "/images/mia_malkova.jpg", // Caminho da imagem na pasta public
    hints: shuffleArray([
      "É norte-americana",
      "Sua entrada na indústria adulta aconteceu em 2012.",
      "nome artístico em homenagem à sua amiga de infância.",
      "É amiga  infância de Natasha Malkova.",
      "Já trabalhou no McDonald's.",
      "É de ascendência franco-canadense, germânica e irlandesa.",
      "Nascida em  1 de julho de 1992",
      "Foi casada entre 2014 e 2018 com o também ator pornográfico Danny Mountain.",
      "Seu nome verdadeiro é Melissa Ann Hevner ",
      "Tem um irmão que também trabalha na indústria pornográfica, chamado Justin Hunt.",
      "Nasceu em Palm Springs, Califórnia.",
      "Fez mais de 500 filmes.",
      "Tem pseudônimos de Mia Bliss, Madison Swan.",
      "Tem o prêmio de Best B/G Scene (com Johnny Castle).",
      "Ela já estrelou um documentário, God, Sex and Truth (Deus, Sexo e Verdade, em tradução livre).",
      "Cheia de talentos, a artista é grande fã de videogame e gosta de fazer streaming no Twitch",
      "Ela também já participou de um videoclipe, da música Still Be Friends, de G-Eazy, em 2020.",
      "Já comprou um castelo para gravafilmes nele",
      "Estreou quando tinha 19 anos.",
    ]).slice(0, 10),
  }
];
