import bardockPhoto from "../../assets/members/bardock.jpg";
import bebezaoPhoto from "../../assets/members/bebezao.jpg";
import brenimPhoto from "../../assets/members/brenim.jpg";
import fiotePhoto from "../../assets/members/fiote.jpg";
import renatoPhoto from "../../assets/members/renato.jpg";

export type BandMember = {
  role: string;
  name: string;
  nickname: string;
  bio: string;
  instagram: string;
  photo: string;
  number: string;
};

export const members: BandMember[] = [
  {
    role: "Vocalista",
    name: "Gustavo Mesquita",
    nickname: "Fiote",
    bio: "Pegou o primeiro violão aos 7 anos e nunca mais se afastou da música. Vocalista, guitarrista e produtor musical, une técnica e presença de palco em cada show.",
    instagram: "fiote.tec",
    photo: fiotePhoto,
    number: "01",
  },
  {
    role: "Baixista",
    name: "Breno Ferreira",
    nickname: "Brenim",
    bio: "Começou os estudos musicais aos 13 anos. No circuito profissional, já passou por diversos projetos e bandas, dividindo o palco com grandes nomes da cena local.",
    instagram: "brenimferreira",
    photo: brenimPhoto,
    number: "02",
  },
  {
    role: "Baterista",
    name: "Renato Cunha",
    nickname: "Renato",
    bio: "Filho de baterista, sempre viveu cercado de música. Aos 17 anos iniciou sua carreira na bateria e, desde então, percorreu festivais e diferentes estilos.",
    instagram: "renatocunhastg",
    photo: renatoPhoto,
    number: "03",
  },
  {
    role: "Guitarrista",
    name: "Vinicius Carilo",
    nickname: "Bebezão",
    bio: "Começou a estudar guitarra aos 7 anos. Hoje também é professor de música e luthier, levando sua experiência técnica a diferentes projetos da cena.",
    instagram: "viniciuscarilo",
    photo: bebezaoPhoto,
    number: "04",
  },
  {
    role: "Guitarrista",
    name: "Gabriel Henrique",
    nickname: "Bardock",
    bio: "Conheceu a música aos 9 anos no Projeto Guri, estudando violoncelo. Aos 11, ganhou a primeira guitarra — e encontrou seu instrumento. Curiosidade: já foi aluno do Vinicius.",
    instagram: "gabrielbardock_",
    photo: bardockPhoto,
    number: "05",
  },
];
