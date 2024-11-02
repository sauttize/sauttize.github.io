import { Game } from "../domain/Game";

const makeMeLaugh: Game = new Game("Make Me Laugh", ["Horror", "Puzzle"], 2023, ["GlobalGameJam", "3D"], "link");
makeMeLaugh.setDescription(
    "Short horror game made in less than 48 hs for the Global Game Jam " +
    "(with some extra polish afterwards). Escape the place while keeping " +
    "the jester entertain (don't let the music box stop)."
)
makeMeLaugh.addTeamMember("Coding", "Nicolas Tejera");
makeMeLaugh.addTeamMember("Game Design", "Joaquin de los Santos");
makeMeLaugh.addTeamMember("2D Art", "Stefano Icardo, Juan Manuel Vaitkevicius, Rodrigo Ledesma");
makeMeLaugh.addTeamMember("3D Art", "Benjamin Martinez");
makeMeLaugh.setLink("https://sauttize.itch.io/make-me-laugh");
makeMeLaugh.setImage('/games/make_me_laugh/screenshot.webp');
makeMeLaugh.setScreenshots([
    'https://img.itch.zone/aW1hZ2UvMjUwMTcwNS8xNDk4OTIzOS5wbmc=/original/ToK6fe.png',
    'https://img.itch.zone/aW1hZ2UvMjUwMTcwNS8xNDk4OTI0MS5wbmc=/original/rd332X.png',
    'https://img.itch.zone/aW1hZ2UvMjUwMTcwNS8xNDk4OTI0My5wbmc=/original/nuneWY.png'
]);
makeMeLaugh.tools = ["Godot"];

export const GameList = [
    makeMeLaugh
]