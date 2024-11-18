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

// Test della logica di collegamento usando i dati di Bonny

// Creazione della startup Bonny
const bonny = new Startup(
  "Bonny",
  "Agevolazioni statali e benessere",
  "Una startup marchigiana che semplifica l'accesso ai bonus statali e promuove il benessere tramite lo sport",
  ["Consulenza fiscale", "Supporto per ISEE e 730", "Convenzioni con associazioni sportive"]
);

// Creazione di incentivi
const incentivoSport = new Incentivo(
  "INC100",
  "Bonus Sport e Salute",
  5000,
  "Startup che promuovono attività sportive attraverso incentivi statali"
);

const incentivoFiscale = new Incentivo(
  "INC200",
  "Supporto Fiscale",
  3000,
  "Startup che semplificano l'accesso ai bonus fiscali"
);

// Creazione di cittadini
const cittadino1 = new Cittadino("Giulia", "Bianchi", 32, ["Ciclismo", "Palestra"]);
const cittadino2 = new Cittadino("Luca", "Verdi", 40, ["Nuoto", "Corsa"]);

// Assegnazione degli incentivi a Bonny
incentivoSport.assegnaAStartup(bonny);
incentivoFiscale.assegnaAStartup(bonny);

// Partecipazione dei cittadini alle attività promosse da Bonny
cittadino1.partecipaAttivita(bonny);
cittadino2.partecipaAttivita(bonny);
