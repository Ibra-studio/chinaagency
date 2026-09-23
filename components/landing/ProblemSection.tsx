import StackingCards, { CardData } from '../ui/staking-card'

const storyBrandProblems: CardData[] = [
  {
    badge: '1. Problème Externe',
    title: "VOUS VOULEZ ETUDIEZ EN CHINE MAIS NE SAVEZ PAS PAR OÙ COMMENCER ?",
    description:
      "Vous êtes surement submerges par tous ces videos youtube et tiktok qui vous disent que c'est LA meilleur methode pour etudier en chine",
    image: '/images/problem1image.png',
    color: '#8A0E0C',
    textColor: '#EDEDED',
  },
  {
    badge: '2. Problème Interne',
    title: "VOUS AVEZ PEUR DE VOUS TROMPER D'UNIVERSITÉ, DE VOUS FAIRE ARNAQUER, OU DE VOUS RETROUVER SEUL(E) À L'ARRIVÉE",
    description:
      "La peur de perdre une année, de payer pour un dossier mal préparé, ou de débarquer dans une ville sans personne pour vous orienter , c'est ce qui empêche beaucoup d'étudiants de se lancer, même quand ils en ont vraiment envie.",
    image: '/images/problem2image.jpg',
    color: 'oklch(0.35 0.04 185)',
    textColor: '#EDEDED',
  },
  {
    badge: '3. Problème Philosophique',
    title: "ÉTUDIER À L'ÉTRANGER NE DEVRAIT PAS ÊTRE RÉSERVÉ À CEUX QUI ONT DÉJÀ UN CONTACT OU UN GROS BUDGET",
    description:
      "Que vous veniez d'une grande ville ou d'une région reculée, que vos parents connaissent le système ou le découvrent avec vous , vous méritez les mêmes chances d'accéder à une bourse et à une admission qu'un étudiant mieux entouré.",
    image: '/images/problem3image.jpg',
    color: '#8A0E0C',
    textColor: '#EDEDED',
  },
  {
    badge: 'La solution',
    title: "VOUS N'ÊTES PAS SEUL(E), C'EST EXACTEMENT POUR ÇA QU'ON EXISTE",
    description:
      "OMA Scholars transforme cette incertitude en un parcours clair, étape par étape : du choix de l'université jusqu'à votre installation en Chine, avec un accompagnement humain à chaque étape.",
    image: '/images/solutionImage.jpg',
    color: '#fff',
    textColor: '#111111',
  },
];


export default function ProblemSection() {
  return (
    <div className="">

  
   <StackingCards
      headerSubtitle="Le Constat"
      headerTitle="ETUDIEZ DANS UN NOUVEAU PAYS NE DEVRAIT PAS ÊTRE UN PARCOURS DU COMBATTANT"
      cards={storyBrandProblems}
    />
      </div>
  )
}
