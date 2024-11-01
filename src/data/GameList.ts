import { Game } from "../domain/Game";

const makeMeLaugh: Game = new Game("Make Me Laugh", ["Horror", "Puzzle"], 2023, ["GlobalGameJam", "3D"], "link");
makeMeLaugh.setDescription(
    "Short horror game made in less than 48 hs for the Global Game Jam " +
    "(with some extra polish afterwards). Escape the place while keeping " +
    "the jester entertain (don't let the music box stop)."
)
makeMeLaugh.addTeamMember("Coding:", "Nicolas Tejera]");
makeMeLaugh.addTeamMember("Game Design:", "Joaquin de los Santos");
makeMeLaugh.addTeamMember("2D Art:", "Stefano Icardo, Juan Manuel Vaitkevicius, Rodrigo Ledesma");
makeMeLaugh.addTeamMember("3D Art:", "Benjamin Martinez");
makeMeLaugh.setLink("https://sauttize.itch.io/make-me-laugh");
makeMeLaugh.setImage('/games/make_me_laugh/screenshot.webp');


export const GameList = [
    makeMeLaugh
]