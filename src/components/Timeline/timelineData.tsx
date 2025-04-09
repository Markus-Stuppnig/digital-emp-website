import { Timeline } from "@/types/timeline";
import { TfiTarget } from "react-icons/tfi";
import {
  RiSpeedUpFill,
  RiGitBranchFill,
  RiCodeSSlashFill,
  RiSwapFill,
  RiAppleFill,
} from "react-icons/ri";

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
    icon: <RiGitBranchFill size={36} color="#fff" />,
    title: "GitHub Repo aufgesetzt",
    date: "09-09-2024",
    paragraph:
      "Das GitHub-Repository für **dn_audiotranscriber** wurde erstellt, um die Entwicklung zu strukturieren und die Zusammenarbeit zu ermöglichen. Es dient als zentrale Plattform für das Projekt, um Aufgaben zu verwalten und Code zu teilen.",
  },
  {
    id: 3,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title:
      "Ausgangslage, Zielbestimmung und Individuelle Themenstellung definiert",
    date: "09-09-2024",
    paragraph:
      "Die Ausgangslage, Zielbestimmung und Individuelle Themenstellung wurden auf der Projektwoche definiert.",
  },
  {
    id: 4,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Datenbank und Authentifizierung aufgesetzt",
    date: "10-09-2024",
    paragraph:
      "Die Authentifizierung erfolgt mittels FastAPI Security und JWT Token mit einer PostgreSQL Datenbank.",
  },
  {
    id: 5,
    icon: <RiCodeSSlashFill size={36} color="#fff" />,
    title: "Basic Transcription mit OpenAI Whisper API fertiggestellt",
    date: "24-09-2024",
    paragraph:
      "Die Grundfunktion zur Transkription von Audio in Text wurde mit der OpenAI Whisper API implementiert. Diese Funktion stellt die Basis für die weiteren Entwicklungen im Projekt dar und ermöglicht es, Audiodaten in Text umzuwandeln.",
  },
  {
    id: 6,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Erstversion der Machbarkeit ist abgeschlossen",
    date: "18-10-2024",
    paragraph: "Eine erste Version der Machbarkeit ist abgeschlossen.",
  },
  {
    id: 7,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Domain Stuppnig.ddns.net gekauft",
    date: "24-10-2024",
    paragraph:
      "Die Domain wurde erfolgreich eingerichtet und zeigt nun auf den Heimserver.",
  },
  {
    id: 8,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Erster Prototyp ist einsatzbereit",
    date: "08-11-2024",
    paragraph:
      "Ein erster Prototyp ist einsatzbereit und kann bereits (von Developern) verwendet werden.",
  },
  {
    id: 9,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Basis LLM fuer weiteres Training entschieden",
    date: "12-11-2024",
    paragraph:
      "Es wurde ein pre-trained LLM fuer das weitere training getestet und ausgewaehlt.",
  },
  {
    id: 10,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Literaturrecherche abgegeben",
    date: "22-11-2024",
    paragraph:
      "Die Literaturrecherche wurde abgegeben und recherche wurde betrieben.",
  },
  {
    id: 11,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Live Audio Streaming",
    date: "26-11-2024",
    paragraph:
      "Die Audio Daten werden live ueber einen Websocket in chunks ans Backend gesendet und dort reassembled.",
  },
  {
    id: 12,
    icon: <RiSwapFill size={36} color="#fff" />,
    title:
      "Audio Daten können in raw data in das Model gefüttert werden in SpeechTranscription",
    date: "30-11-2024",
    paragraph:
      "Es wurde eine Funktion entwickelt, die es ermöglicht, Audiodaten in ihrer Rohform direkt in das Modell der SpeechTranscription einzuspeisen. Dies verbessert die Flexibilität und Effizienz der Transkription.",
  },
  {
    id: 13,
    icon: <RiSwapFill size={36} color="#fff" />,
    title: "OpenAI zu Huggingface Transition in Speech Transcription",
    date: "07-12-2024",
    paragraph:
      "Die Transkriptionsfunktion wurde von OpenAI auf Huggingface umgestellt. Diese Änderung ermöglicht eine breitere Auswahl an vortrainierten Modellen und bietet mehr Flexibilität für verschiedene Transkriptionsanforderungen.",
  },
  {
    id: 14,
    icon: <RiSwapFill size={36} color="#fff" />,
    title: "User Login im Frontend umgesetzt",
    date: "21-12-2024",
    paragraph:
      "Die App bietet die Funktionalität, um sich mit Benutzeranmeldedaten zu authentifizieren.",
  },
  {
    id: 15,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "State of the Art & Machbarkeit abgegeben.",
    date: "13-01-2025",
    paragraph: "Die State of the Art & Machbarkeit wurden abgegeben.",
  },
  {
    id: 16,
    icon: <RiSwapFill size={36} color="#fff" />,
    title: "Autorisierungstoken wird verschlüsselt abgespeichert",
    date: "28-01-2025",
    paragraph:
      "Die App speichert den JWT-Token nach erfolgreicher Anmeldung verschlüsselt ab.",
  },
  {
    id: 17,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Generation der Trainingsdaten angefangen.",
    date: "04-02-2025",
    paragraph:
      "Die Generation der Trainingsdaten für das fine-tuning des LLMs wurde gestartet.",
  },
  {
    id: 18,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Frontend kann Nachrichten anzeigen.",
    date: "04-02-2025",
    paragraph:
      "Das Frontend zeigt, nach absenden der Nachricht, einen Ladeindikator und zeigt, sobald das LLM antwortet, die Antwort an.",
  },
  {
    id: 19,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "CI/CD working.",
    date: "04-02-2025",
    paragraph:
      "Continious Integraton / Continious Deployment auf server mit Domain funktionabel.",
  },
  {
    id: 20,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Organisations Login im Frontend umgesetzt",
    date: "07-02-2025",
    paragraph:
      "Organisationen können sich in einem eigenen Anmeldeformular in der App authentifizieren.",
  },
  {
    id: 21,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "API Server SSL Verschlüsselung mit Let's Encrypt",
    date: "08-02-2025",
    paragraph:
      "Der API Server verwendet jetzt ein automatisch erneuertes SSL Zertifikat von Let's Encrypt.",
  },
  {
    id: 22,
    icon: <RiAppleFill size={36} color="#fff" />,
    title: "Apple Metal API Unterstützung für Speech Transcription",
    date: "13-02-2025",
    paragraph:
      "Die Integration der Apple Metal API verbessert die Leistung der Speech Transcription auf Apple-Geräten, indem die Hardware-Ressourcen effizienter genutzt werden. Dies führt zu einer besseren Performance, insbesondere auf iOS- und macOS-Geräten.",
  },
  {
    id: 23,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "API Server Entwicklung abgeschlossen",
    date: "13-02-2025",
    paragraph:
      "Alle Kernfunktionen des API Servers wurden implementiert und lokal erfolgreich getestet.",
  },
  {
    id: 24,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Verschlüsselter Audio Stream",
    date: "15-02-2025",
    paragraph:
      "Der Audio Livestream wird nun SSL verschlüsselt versendet und verwendet somit WebSocketSecure.",
  },
  {
    id: 25,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "API Server Testing Phase abgeschlossen",
    date: "16-02-2025",
    paragraph:
      "Der API Server hat alle Unit- und Integrationstests bestanden und ist bereit für das Deployment.",
  },
  {
    id: 26,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Organisations Verwaltung in der App",
    date: "23-02-2025",
    paragraph:
      "Organisationen können in der App ihre Benutzeraccounts verwalten.",
  },
  {
    id: 27,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title:
      "WhisperTranscriber und Audio Abstraktion für modulare Benutzung in dn_audiotranscriber Python Library",
    date: "24-02-2025",
    paragraph:
      "Der **WhisperTranscriber** und eine Audioabstraktion wurden entwickelt, um eine modulare Nutzung in der **dn_audiotranscriber Python-Bibliothek** zu ermöglichen. Diese Funktionen bieten eine flexible Integration der Transkriptionslogik in verschiedene Anwendungen.",
  },
  {
    id: 28,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Datenbank Deployment mit Docker Compose abgeschlossen",
    date: "01-03-2025",
    paragraph:
      "Die PostgreSQL Datenbank wurde erfolgreich in einem Docker Container deployed und konfiguriert.",
  },
  {
    id: 29,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Profile page implementiert.",
    date: "04-03-2025",
    paragraph:
      "Die Profile page zeigt welcher Benutzer angemeldet ist, eine Möglichkeit sein Passwort zurück zu setzen und seine Account Informationen.",
  },
  {
    id: 30,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Passwort vergessen Funktionalität",
    date: "08-03-2025",
    paragraph: "Benutzer können in der App ihr Passwort zurücksetzen lassen.",
  },
  {
    id: 31,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Implementierungsteil abgegeben.",
    date: "15-03-2025",
    paragraph: "Der Implementierungsteil der Diplomarbeit wurde abgegeben.",
  },
  {
    id: 32,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Docker Image Build & Deployment für FastAPI Backend fertig",
    date: "30-03-2025",
    paragraph:
      "Ein produktionsbereites Docker Image wurde gebaut und auf dem Server deployed.",
  },
  {
    id: 33,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Renerated text from LLM can be streamed.",
    date: "07-04-2025",
    paragraph:
      "Der Output des LLMs kann während der Generation gestreamed werden.",
  },
  {
    id: 34,
    icon: <RiSpeedUpFill size={36} color="#fff" />,
    title: "Online Abgabe der Diplomarbeit.",
    date: "08-04-2025",
    paragraph: "Die Diplomarbeit wurde online im ABA-Portal abgegeben.",
  },
];

export default timelineData;
