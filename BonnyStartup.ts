// Definizione delle interfacce

interface IStartup {
    nome: string;
    settoreDiFocus: string;
    descrizione: string;
    prodottiServizi: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
  }
  
  interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valore: number;
    criteriEleggibilita: string;
    assegnaAStartup(startup: IStartup): void;
  }
  
  interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    partecipaAttivita(startup: IStartup): void;
  }
  
  // Implementazione delle classi
  
  class Startup implements IStartup {
    nome: string;
    settoreDiFocus: string;
    descrizione: string;
    prodottiServizi: string[];
  
    constructor(nome: string, settoreDiFocus: string, descrizione: string, prodottiServizi: string[]) {
      this.nome = nome;
      this.settoreDiFocus = settoreDiFocus;
      this.descrizione = descrizione;
      this.prodottiServizi = prodottiServizi;
    }
  
    riceviIncentivo(incentivo: IIncentivo): void {
      console.log(`${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione} del valore di €${incentivo.valore}`);
    }
  }
  
  class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valore: number;
    criteriEleggibilita: string;
  
    constructor(codiceIdentificativo: string, descrizione: string, valore: number, criteriEleggibilita: string) {
      this.codiceIdentificativo = codiceIdentificativo;
      this.descrizione = descrizione;
      this.valore = valore;
      this.criteriEleggibilita = criteriEleggibilita;
    }
  
    assegnaAStartup(startup: IStartup): void {
      console.log(`L'incentivo ${this.descrizione} è stato assegnato alla startup ${startup.nome}`);
      startup.riceviIncentivo(this);
    }
  }
  
  class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
  
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]) {
      this.nome = nome;
      this.cognome = cognome;
      this.eta = eta;
      this.interessiSportivi = interessiSportivi;
    }
  
    partecipaAttivita(startup: IStartup): void {
      console.log(`${this.nome} ${this.cognome} partecipa alle attività di ${startup.nome}`);
    }
  }
  
  // Test della logica di collegamento
  
  // Creazione di startup
  const startup1 = new Startup("SportTech", "App per il fitness", "Una startup che crea app innovative per il fitness", ["App di monitoraggio attività", "Piani di allenamento"]);
  const startup2 = new Startup("WearablePro", "Tecnologie wearable", "Startup specializzata in wearable sportivi", ["Smartwatch", "Sensori di attività"]);
  
  // Creazione di incentivi
  const incentivo1 = new Incentivo("INC001", "Bonus Innovazione Sportiva", 10000, "Startup innovative nel settore dello sport");
  const incentivo2 = new Incentivo("INC002", "Supporto alle tecnologie wearable", 15000, "Startup che sviluppano wearable sportivi");
  
  // Creazione di cittadini
  const cittadino1 = new Cittadino("Mario", "Rossi", 35, ["Calcio", "Corsa"]);
  const cittadino2 = new Cittadino("Anna", "Verdi", 28, ["Yoga", "Pilates"]);
  
  // Assegnazione degli incentivi alle startup
  incentivo1.assegnaAStartup(startup1);
  incentivo2.assegnaAStartup(startup2);
  
  // Partecipazione dei cittadini alle attività promosse
  cittadino1.partecipaAttivita(startup1);
  cittadino2.partecipaAttivita(startup2);
  