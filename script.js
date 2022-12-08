//Inicialização
		const paises = ["Catar", "Equador", "Holanda", "Senegal", 
		"Estados Unidos", "Inglaterra", "Irã", "País de Gales", 
		"Argentina", "Arábia Saudita", "México", "Polônia", 
		"Austrália", "Dinamarca", "França", "Tunísia", 
		"Alemanha", "Costa Rica", "Espanha", "Japão",
		"Bélgica", "Canadá", "Croácia", "Marrocos",
		"Brasil", "Camarões", "Suíça", "Sérvia",
		"Coreia do Sul", "Gana", "Portugal", "Uruguai"];
		
		var jogo = []
		
		for (i=0;i<100;i++) {
			jogo[i] = {
				time1: 0,
				time2: 0,
				vit1: false,
				vit2: false,
				partida: false
			}
		}
		
		var selecoes = [];
		for (i=0;i<paises.length;i++) {
			selecoes[i] = {
					nome: paises[i],
					grupo: '',
					pontos: 0,
					saldo: 0,
					gols: 0,
					vit: 0,
					der: 0,
					emp: 0,
					jogos: 0
				}
			if (i<4) {
				selecoes[i].grupo = "A";
			} else if (i>3 && i<8) {
				selecoes[i].grupo = "B";
			} else if (i>7 && i<12) {
				selecoes[i].grupo = "C";
			} else if (i>11 && i<16) {
				selecoes[i].grupo = "D";
			} else if (i>15 && i<20) {
				selecoes[i].grupo = "E";
			} else if (i>19 && i<24) {
				selecoes[i].grupo = "F";
			} else if (i>23 && i<28) {
				selecoes[i].grupo = "G";
			} else if (i>27 && i<32) {
				selecoes[i].grupo = "H";
			}
		}

		
		for (i=0;i<selecoes.length;i++) {
			var tabela = document.getElementById(`tabela-g${selecoes[i].grupo}`);
			var cabeçalho = document.getElementById(`hg${selecoes[i].grupo}`);
			
			var tr = document.createElement("tr");
			tr.innerHTML = `<td>${selecoes[i].nome}</td>
			<td>${selecoes[i].jogos}</td>
			<td>${selecoes[i].vit}</td>
			<td>${selecoes[i].der}</td>
			<td>${selecoes[i].emp}</td>
			<td>${selecoes[i].gols}</td>
			<td>${selecoes[i].saldo}</td>
			<td>${selecoes[i].pontos}</td>`;
			tabela.append(tr);
		}
		
		function classificar() {
			if (valorid1 > valorid2) {
					time1.vit += 1;
					time2.der += 1;
					jogo[i].vit1 = true;
				} else if (valorid2 > valorid1) {
					time1.der += 1;
					time2.vit += 1;
					jogo[i].vit2 = true;
				} else {
					time1.emp += 1;
					time2.emp += 1;
				}
		}
		
		function atualizarTabela(grupo) {
			var tabela = document.getElementById(`tabela-g${grupo}`)
			tabela.innerHTML = "";
			for (let x of selecoes) {
				if (x.grupo == grupo) {
					var tr = document.createElement("tr");
					tr.innerHTML = `<td>${x.nome}</td>
					<td>${x.jogos}</td>
					<td>${x.vit}</td>
					<td>${x.der}</td>
					<td>${x.emp}</td>
					<td>${x.gols}</td>
					<td>${x.saldo}</td>
					<td>${x.pontos}</td>`;
					tabela.append(tr);
				}
			}
		}
		
		
		
		
		const G = ["gA", "gB", "gC", "gD", "gE", "gF", "gG", "gH"];
		const gA = ["Catar", "Equador", "Holanda", "Senegal"];
		const gB = ["Estados Unidos", "Inglaterra", "Irã", "País de Gales"];
		const gC = ["Argentina", "Arábia Saudita", "México", "Polônia"];
		const gD = ["Austrália", "Dinamarca", "França", "Tunísia"];
		const gE = ["Alemanha", "Costa Rica", "Espanha", "Japão"];
		const gF = ["Bélgica", "Canadá", "Croácia", "Marrocos"];
		const gG = ["Brasil", "Camarões", "Suíça", "Sérvia"];
		const gH = ["Coreia do Sul", "Gana", "Portugal", "Uruguai"];
		
		function enter(event) {
			var d = document.getElementById('textbox');
			if (event.keyCode == 13) {
				document.write(result)
				console.log("Enter key is pressed");
			}
		}
		function comparar(id1, id2, time1, time2, i) {
			if(id1.value == "" || id2.value == ""){
				return;
			}
			var valorid1 = parseInt(id1.value);
			var valorid2 = parseInt(id2.value);
			
			if (jogo[i].partida) {
				// Apaga dados existentes
				time1.gols -= jogo[i].time1;
				time2.gols -= jogo[i].time2;
				time1.saldo -= (jogo[i].time1 - jogo[i].time2);
				time2.saldo -= (jogo[i].time2 - jogo[i].time1);
				jogo[i].time1 = 0;
				jogo[i].time2 = 0;
				if (jogo[i].vit1) {
					time1.vit -= 1;
					time2.der -= 1;
					jogo[i].vit1 = false;
				} else if (jogo[i].vit2) {
					time1.der -= 1;
					time2.vit -= 1;
					jogo[i].vit2 = false;
				} else {
					time1.emp -= 1;
					time2.emp -= 1;
				}
				// Inicializa dados novos
				time1.gols += valorid1;
				time2.gols += valorid2;
				jogo[i].time1 = valorid1;
				jogo[i].time2 = valorid2;
				if (valorid1 > valorid2) {
					time1.vit += 1;
					time2.der += 1;
					jogo[i].vit1 = true;
				} else if (valorid2 > valorid1) {
					time1.der += 1;
					time2.vit += 1;
					jogo[i].vit2 = true;
				} else {
					time1.emp += 1;
					time2.emp += 1;
				}
				time1.saldo += (valorid1 - valorid2)
				time2.saldo += (valorid2 - valorid1)
			} else {
				time1.gols += valorid1;
				time2.gols += valorid2;
				jogo[i].time1 = valorid1;
				jogo[i].time2 = valorid2;
				time1.jogos += 1;
				time2.jogos += 1;
				if (valorid1 > valorid2) {
					time1.vit += 1;
					time2.der += 1;
					jogo[i].vit1 = true;
				} else if (valorid2 > valorid1) {
					time1.der += 1;
					time2.vit += 1;
					jogo[i].vit2 = true;
				} else {
					time1.emp += 1;
					time2.emp += 1;
				}
				jogo[i].partida = true;
			}
			atualizarTabela(time1.grupo);
			atualizarTabela(time2.grupo);
		}
