var jogadorEscolha = 0;
      var jogadorPontuacao = 0;
      var computadorEscolha = 0;
      var computadorPontuacao = 0;
      var ganhador = -1;
      var repeticaoJogada = 0;
      var computadorEscolhaAnterior = 0;

      function jogar(escolha) {
        jogadorEscolha = escolha;
        computadorEscolhaAnterior = computadorEscolha;

        //lógico do funcionamento das jogadas do computador
        computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        if (computadorEscolhaAnterior == computadorEscolha) {
          repeticaoJogada++;
          if (repeticaoJogada > 2) {
            if (computadorEscolha == 1 || computadorEscolha == 2)
              computadorEscolha = computadorEscolha + 1;
            if (computadorEscolha == 3)
              computadorEscolha = computadorEscolha - 2;
          }
        } //final da lógica

        //1 - pedra //2 - papel //3 - tesoura

        if (jogadorEscolha == 1 && computadorEscolha == 1) {
          ganhador = 0; //empate
        } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
          ganhador = 2; //computador
        } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
          ganhador = 1; //jogador
        }

        if (jogadorEscolha == 2 && computadorEscolha == 1) {
          ganhador = 1; //jogador
        } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
          ganhador = 0; //empate
        } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
          ganhador = 2; //computador
        }

        if (jogadorEscolha == 3 && computadorEscolha == 1) {
          ganhador = 2; //computador
          computadorPontuacao++;
        } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
          ganhador = 1; //jogador
        } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
          ganhador = 0; //empate
        }

        document
          .getElementById("jogador-escolha-1")
          .classList.remove("selecionado");
        document
          .getElementById("jogador-escolha-2")
          .classList.remove("selecionado");
        document
          .getElementById("jogador-escolha-3")
          .classList.remove("selecionado");
        document
          .getElementById("computador-escolha-1")
          .classList.remove("selecionado");
        document
          .getElementById("computador-escolha-2")
          .classList.remove("selecionado");
        document
          .getElementById("computador-escolha-3")
          .classList.remove("selecionado");

        //exibir ação dos jogadores
        document
          .getElementById("jogador-escolha-" + jogadorEscolha)
          .classList.add("selecionado");
        document
          .getElementById("computador-escolha-" + computadorEscolha)
          .classList.add("selecionado");

        if (ganhador == 0) {
          document.getElementById("mensagens").innerHTML = "Empate";
        } else if (ganhador == 1) {
          document.getElementById("mensagens").innerHTML = "Jogador Ganhou";
          jogadorPontuacao++;
        } else if (ganhador == 2) {
          document.getElementById("mensagens").innerHTML = "Computador Ganhou";
          computadorPontuacao++;
        }

        document.getElementById("jogador-pontos").innerHTML = jogadorPontuacao;
        document.getElementById("computador-pontos").innerHTML =
          computadorPontuacao;
      }