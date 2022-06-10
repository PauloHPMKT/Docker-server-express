Interpretando o arquivo DOckerfile

FROM node - criando uma imagem com a base node

WORKDIR /usr/src/app - diretorio de trabalho no container

COPY package.json . - arquivo com as dependencias necessária referencia pelo (.) que se refere ao workdir

RUN npm install - para baixar as dependencias do projeto

COPY . . - os pontos se referem a copiar tudo oq está no amiente de trabalho e levados para o workdir

ESPOSE 3000 -  porta em que o projeto irá funcionar 

CMD ["node", "index.js"] - caminho do executável do projeto

======================================================================================================

comando docker para inicialização do container

$ docker start node-docker-2