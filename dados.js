let dados = [
    {
        titulo: "Star Wars",
        descricao: "Uma galáxia muito, muito distante... Uma saga épica que explora temas como o bem e o mal, a família e o destino. Com batalhas espaciais, personagens icônicos e uma mitologia rica, Star Wars conquistou fãs de todas as idades.",
        link: "https://starwars.fandom.com/pt/wiki/Wiki_Star_Wars",
        tags: "galáxia galaxia naves nave jedi sit forca estrelas skywalker darth vader"
      },
      {
        titulo: "Battlestar Galactica",
        descricao: "Uma frota de naves espaciais humanas luta pela sobrevivência após um ataque surpresa dos Cylons, robôs que se rebelaram contra seus criadores. A série explora temas como fé, esperança e a natureza da humanidade.",
        link: "https://pt.wikipedia.org/wiki/Battlestar_Galactica",
        tags: "rebelia guerra humanidade robo nave espacial"
      },
      {
        titulo: "Exterminador do Futuro",
        descricao: "Em um futuro distópico, robôs assassinos enviados do futuro tentam eliminar um líder da resistência humana. A série explora temas como a inteligência artificial, a manipulação do tempo e o destino da humanidade.",
        link: "https://pt.wikipedia.org/wiki/O_Exterminador_do_Futuro",
        tags: "exterminador viagem tempo resistencia apocalipse schwarzenegger"
      },
      {
        titulo: "Star Trek",
        descricao: "A tripulação da Enterprise explora a galáxia, encontrando novas civilizações e enfrentando desafios épicos. A série promove valores como a exploração, a diversidade e a paz.",
        link: "https://pt.startrek.com/",
        tags: "ciencia ficcao espacial exploracao enterprise spock futuro"
      },    
    {
        titulo: "Matrix",
        descricao: "Realidade Simulada: Matrix é um mundo virtual complexo criado por máquinas inteligentes para controlar a humanidade. A história explora temas como livre arbítrio, identidade e a natureza da realidade. Ação e Suspense: Combates corpo a corpo fluidos, efeitos visuais inovadores e uma trama envolvente fazem de Matrix um marco no cinema de ficção científica.",
        link : "https://pt.wikipedia.org/wiki/Matrix",
        tags: "efeitos realidade ficcao futuro máquinas maquina simulacao simulação"
      },
      {
        titulo: "Blade Runner 2049",
        descricao: "Em um futuro distópico e neon, um novo Blade Runner descobre um segredo que pode destruir a sociedade. A trama explora temas como a natureza da humanidade, a inteligência artificial e a busca por identidade.",
        link: "https://pt.wikipedia.org/wiki/Blade_Runner_2049",
        tags: "futuro, android, inteligencia, robo, identidade"
      },
      {
        titulo: "Dune",
        descricao: "Uma épica jornada em um universo de areia e especiarias, onde um jovem herdeiro deve cumprir seu destino e liderar um povo rebelde. A trama explora temas como política, ecologia e a busca pelo poder.",
        link: "https://pt.wikipedia.org/wiki/Duna_(filme_de_2021)",
        tags: "epico saga deserto futuro ecologia politica guerra"
      },
      {
        titulo: "O Homem de Aço",
        descricao: "A origem de Superman é reimaginada em um filme que explora a identidade e os desafios de um alienígena criado na Terra. Ação e drama se misturam em uma história sobre o que significa ser herói.",
        link: "https://pt.wikipedia.org/wiki/O_Homem_de_Aço_(filme)",
        tags: "Superman superman aço aco alienígena herói"
      },
      {
        titulo: "Interstellar",
        descricao: "Um grupo de astronautas embarca em uma missão para encontrar um novo lar para a humanidade. A trama explora temas como a relatividade, os buracos negros e a busca por significado.",
        link: "https://pt.wikipedia.org/wiki/Interstellar",
        tags: "relatividade buraco buracos tempo espaço exploracao viagem"
      },
      {
        titulo: "Mad Max: Estrada da Fúria",
        descricao: "Em um futuro pós-apocalíptico, uma guerreira solitária lidera uma revolta contra um tirano. Ação frenética, paisagens áridas e uma estética única marcam este clássico do cinema de ação.",
        link: "https://pt.wikipedia.org/wiki/Mad_Max:_Estrada_da_Fúria",
        tags: "combustível deserto recursos ação apocalíptico apocalipse"
      },
      {
        titulo: "Ghost in the Shell",
        descricao: "Em um futuro cyberpunk, uma major ciborgue busca sua identidade enquanto investiga uma conspiração. A trama explora temas como a natureza da consciência, a inteligência artificial e a filosofia.",
        link: "https://pt.wikipedia.org/wiki/Ghost_in_the_Shell_(filme)",
        tags: "ciborgue android inteligencia inteligência robo robôs"
      },
      {
        titulo: "Alita: Anjo de Combate",
        descricao: "Uma ciborgue amnésica desperta em um futuro distópico e embarca em uma jornada para descobrir sua identidade e seu propósito. Ação, drama e visuais impressionantes marcam este filme.",
        link: "https://pt.wikipedia.org/wiki/Alita:_Anjo_de_Combate",
        tags: "combate torneio robo ciborgue anjo identidade recompensas" 
      },
      {
        titulo: "Her",
        descricao: "Em um futuro próximo, um homem solitário se apaixona por um sistema operacional com inteligência artificial. Uma história sobre amor, solidão e a natureza da consciência.",
        link: "https://pt.wikipedia.org/wiki/Her",
        tags: "voice inteligencia ficcao amor solidao sistema artificial"
      },
      {
        titulo: "Predador",
        descricao: "Um grupo de comandos elite é caçado por um alienígena extremamente poderoso e tecnológico em uma selva da América Central. Ação e suspense em um clássico do terror sci-fi.",
        link: "https://pt.wikipedia.org/wiki/O_Predador",
        tags: "extremamente cacador caçador predador predator antagonista"
      },
      {
        titulo: "Alien",
        descricao: "Uma tripulação espacial é aterrorizada por uma criatura alienígena mortal enquanto viajam pelo espaço. Um dos filmes de terror sci-fi mais influentes de todos os tempos.",
        link: "https://pt.wikipedia.org/wiki/Alien_(filme)",
        tags: "viagem passageiro alien alienigena morfo futuro espacial"
      },
      {
        titulo: "O Quinto Elemento",
        descricao: "Em um futuro distópico, um táxi aéreo leva um pacote misterioso que pode salvar a humanidade. Uma mistura de ação, comédia e ficção científica com visuais exuberantes.",
        link: "https://pt.wikipedia.org/wiki/O_Quinto_Elemento",
        tags: "futuro elemento armas viagem quinto tecnologia espaço espaco"
      },
      {
        titulo: "Minority Report",
        descricao: "Em um futuro onde crimes podem ser previstos, um policial acusado de um crime que ainda não cometeu tenta provar sua inocência. Uma trama envolvente que levanta questões sobre livre arbítrio e determinismo.",
        link: "https://pt.wikipedia.org/wiki/Minority_Report",
        tags: "nova lei previsão previsao policial crime futuro distopia"
      },
      {
        titulo: "Elysium",
        descricao: "Em um futuro distópico, os ricos vivem em uma estação espacial luxuosa enquanto os pobres lutam pela sobrevivência na Terra. Ação e drama em um filme que explora temas sociais.",
        link: "https://pt.wikipedia.org/wiki/Elysium_(filme)",
        tags: "distopia ação acao drama espacial estacao futuro" 
      },
      {
        titulo: "Akira",
        descricao: "Em um futuro distópico em Tóquio, um jovem com poderes psíquicos desencadeia uma catástrofe que ameaça a cidade. Um anime clássico com visuais marcantes e uma história complexa.",
        link: "https://pt.wikipedia.org/wiki/Akira_(filme)",
        tags: "akira classico futuro visual psíquicos psiquico"
      }
]

/*let matrix = {
    titulo: "Matrix",
    descricao : "Realidade Simulada: Matrix é um mundo virtual complexo criado por máquinas inteligentes para controlar a humanidade. A história explora temas como livre arbítrio, identidade e a natureza da realidade. Ação e Suspense: Combates corpo a corpo fluidos, efeitos visuais inovadores e uma trama envolvente fazem de Matrix um marco no cinema de ficção científica.",
    link : "https://pt.wikipedia.org/wiki/Matrix" 
}

"Star Wars",
"Battlestar Galactica",
"Exterminador do Futuro",
"Star Trek",
"Matrix"*/