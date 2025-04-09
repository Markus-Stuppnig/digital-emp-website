import { Timeline } from "@/types/timeline";
import { TfiTarget } from "react-icons/tfi";
import { RiSpeedUpFill } from "react-icons/ri";

const timelineData: Timeline[] = [
  {
    id: 1,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Lastenheft abgegeben",
    date: "02-06-2024",
    paragraph:
      "Das Lastenheft wurde abgegeben und die Anforderungen wurden festgelegt.",
  },
  {
    id: 2,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title:
      "Ausgangslage, Zielbestimmung und Individuelle Themenstellung definiert",
    date: "09-09-2024",
    paragraph:
      "Die Ausgangslage, Zielbestimmung und Individuelle Themenstellung wurden auf der Projektwoche definiert.",
  },
  {
    id: 3,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Datenbank und Authentifizierung aufgesetzt",
    date: "10-09-2024",
    paragraph:
      "Die Authentifizierung erfolgt mittels FastAPI Security und JWT Token mit einer PostgreSQL Datenbank.",
  },
  {
    id: 4,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Erstversion der Machbarkeit ist abgeschlossen",
    date: "18-10-2024",
    paragraph: "Eine erste Version der Machbarkeit ist abgeschlossen.",
  },
  {
    id: 5,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Erster Prototyp ist einsatzbereit",
    date: "08-11-2024",
    paragraph:
      "Ein erster Prototyp ist einsatzbereit und kann bereits (von Developern) verwendet werden.",
  },
  {
    id: 6,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Basis LLM fuer weiteres Training entschieden",
    date: "12-11-2024",
    paragraph:
      "Es wurde ein pre-trained LLM fuer das weitere training getestet und ausgewaehlt.",
  },
  {
    id: 7,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Literaturrecherche abgegeben",
    date: "22-11-2024",
    paragraph:
      "Die Literaturrecherche wurde abgegeben und recherche wurde betrieben.",
  },
  {
    id: 8,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Live Audio Streaming",
    date: "26-11-2024",
    paragraph:
      "Die Audio Daten werden live ueber einen Websocket in chunks ans Backend gesendet und dort reassembled.",
  },
  {
    id: 9,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "State of the Art & Machbarkeit abgegeben.",
    date: "13-01-2025",
    paragraph:
      "Die State of the Art & Machbarkeit wurden abgegeben.",
  },
  {
    id: 10,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Generation der Trainingsdaten angefangen.",
    date: "04-02-2025",
    paragraph:
      "Die Generation der Trainingsdaten für das fine-tuning des LLMs wurde gestartet.",
  },
  {
    id: 11,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Frontend kann Nachrichten anzeigen.",
    date: "04-08-2025",
    paragraph:
      "Das Frontend zeigt, nach absenden der Nachricht, einen Ladeindikator und zeigt, sobald das LLM antwortet, die Antwort an.",
  },
  {
    id: 12,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "CI/CD working.",
    date: "04-02-2025",
    paragraph:
      "Continious Integraton / Continious Deployment auf server mit Domain funktionabel.",
  },
  // Felix um Februar herum etwas
  {
    id: 13,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Profile page implementiert.",
    date: "04-03-2025",
    paragraph:
      "Die Profile page zeigt welcher Benutzer angemeldet ist, eine möglichkeit sein password zurück zu setzten und seine Account Informationen.",
  },
  {
    id: 14,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Implementierungsteil abgegeben.",
    date: "15-03-2025",
    paragraph:
      "Der Implementierungsteil der Diplomarbeit wurde f",
  },
  {
    id: 15,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Implementierungsteil abgegeben.",
    date: "15-03-2025",
    paragraph:
      "Der Implementierungsteil der Diplomarbeit wurde f",
  },
  // Felix March
  {
    id: 16,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Renerated text from LLM can be streamed.",
    date: "07-04-2025",
    paragraph:
      "Der Output des LLMs kann während der Generation gestreamed werden.",
  },
  {
    id: 17,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Online Abgabe der Diplomarbeit.",
    date: "08-04-2025",
    paragraph:
      "Die Diplomarbeit wurde online im ABA-Portal abgegeben.",
  },
];
export default timelineData;
