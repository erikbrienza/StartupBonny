# Bonny - Facilitare l'accesso ai bonus statali

Bonny è un progetto TypeScript che modella il funzionamento di una startup innovativa marchigiana, focalizzata sul semplificare l'accesso ai bonus statali per i cittadini italiani. Attraverso interfacce e classi, il sistema rappresenta le interazioni tra startup, incentivi statali e cittadini, con un'attenzione particolare alla promozione dello sport e del benessere.

## 🛠️ Tecnologie utilizzate
- **TypeScript**: linguaggio principale utilizzato per implementare il sistema.

## 📂 Struttura del progetto
Il progetto contiene:
- **Interfacce**:
  - `IStartup`: rappresenta una startup innovativa.
  - `IIncentivo`: rappresenta un incentivo statale.
  - `ICittadino`: rappresenta un cittadino partecipante.
- **Classi**:
  - `Startup`: implementa l'interfaccia `IStartup` per gestire le startup.
  - `Incentivo`: implementa l'interfaccia `IIncentivo` per gestire gli incentivi.
  - `Cittadino`: implementa l'interfaccia `ICittadino` per gestire la partecipazione dei cittadini.

## 🚀 Funzionalità principali
- Modella startup innovative e i servizi/prodotti offerti.
- Assegna incentivi statali alle startup qualificabili.
- Permette ai cittadini di partecipare alle attività sportive promosse.

## 📜 Istruzioni per l'installazione
1. Clona il repository:
   ```bash
   git clone <URL_REPOSITORY_GITHUB>
   ```
2. Spostati nella directory del progetto:
   ```bash
   cd <NOME_CARTELLA_PROGETTO>
   ```
3. Installa le dipendenze necessarie:
   ```bash
   npm install
   ```
4. Compila il codice TypeScript:
   ```bash
   npx tsc
   ```
5. Esegui il progetto:
   ```bash
   node dist/index.js
   ```

## 🧪 Esempi di utilizzo
### Creazione di una startup
```typescript
const bonny = new Startup(
  "Bonny",
  "Agevolazioni statali e benessere",
  "Startup marchigiana che semplifica l'accesso ai bonus statali",
  ["Consulenza fiscale", "Supporto per ISEE e 730", "Convenzioni con associazioni sportive"]
);
```

### Assegnazione di un incentivo a una startup
```typescript
const incentivoSport = new Incentivo(
  "INC100",
  "Bonus Sport e Salute",
  5000,
  "Startup che promuovono attività sportive"
);
incentivoSport.assegnaAStartup(bonny);
```

### Partecipazione di un cittadino
```typescript
const cittadino1 = new Cittadino("Giulia", "Bianchi", 32, ["Ciclismo", "Palestra"]);
cittadino1.partecipaAttivita(bonny);
```

## 📝 Autore
**Erik Brienza**  
Web Designer & Sviluppatore  
[LinkedIn](https://www.linkedin.com/in/erikbrienza/) | [GitHub](https://github.com/erikbrienza/)

---

Grazie per aver esplorato questo progetto! 🌟
