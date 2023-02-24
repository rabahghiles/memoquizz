import { cardsMiddleware } from "./cards.middleware";
import { gameMiddleware } from "./game.middleware";
import { quizzMiddleware } from "./quizz.middleware";

export const appMiddleware = [cardsMiddleware, gameMiddleware, quizzMiddleware];