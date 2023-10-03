import { Game, Stage } from "@/types";

export const mockStages: Stage[] = [
  {
    id: "1",
    content: `Ta mission si tu l’acceptes est de percer les secrets du Code perdu !`,
    nextStageId: "2",
    type: "NO_RESPONSE",
  },
  {
    id: "2",
    content: `# Quel est le sens de la vie ?`,
    nextStageId: "",
    type: "RESPONSE_INPUT",
    correctAnswers: ["42"],
  },
];

export const mockGame: Game = {
  name: "DevFest",
  teams: {
    FRONT: {
      name: "Pixelgriffes",
      description: "",
      image: "../../assets/cogi.png",
      scenario: {
        firstStageId: "1",
        stages: mockStages,
      },
    },
    BACK: {
      name: "Cogitrouille",
      description: "",
      image: "../../assets/pixel.png",
      scenario: {
        firstStageId: "1",
        stages: mockStages,
      },
    },
    DEVOPS: {
      name: "Datamage",
      description: "",
      image: "../../assets/data.png",
      scenario: {
        firstStageId: "1",
        stages: mockStages,
      },
    },
    PRODUCT: {
      name: "Visiolupin",
      description: "",
      image: "../../assets/visio.png",
      scenario: {
        firstStageId: "1",
        stages: mockStages,
      },
    },
  },
};
