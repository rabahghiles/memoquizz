import { cardsMiddleware } from "./cards.middleware";
import { gameMiddleware } from "./game.middleware";

export const appMiddleware = [cardsMiddleware, gameMiddleware];