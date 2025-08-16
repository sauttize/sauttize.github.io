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

const doubtfullyEverAfter: Game = new Game("Doubtfully Ever After", ["Cards", "Strategy"], 2024, ["New Year, New Skills Game Jam", "3D"], "link");
doubtfullyEverAfter.setDescription(
    "First attempt at a card-based strategy game and also my first attempt at game design. " +
    "We tried a simple but creative concept with the jam theme: 'Building connections'. " +
    "Your goal is to build true connections by learning about each pair of characters and check how good of a match they are."
)
doubtfullyEverAfter.addTeamMember("Coding / Game design", "Nicolas Tejera");
doubtfullyEverAfter.addTeamMember("UI Elements", "Nicolas Tejera, Benjamin Martinez");
doubtfullyEverAfter.addTeamMember("3D Art / 2D Art", "Benjamin Martinez");
doubtfullyEverAfter.addTeamMember("Music", "Rodrigo Ledesma");
doubtfullyEverAfter.setLink("https://sauttize.itch.io/doubtfully-ever-after");
doubtfullyEverAfter.setImage('/games/doubtfully_ever_after/dea_cover.png');
doubtfullyEverAfter.setScreenshots([
    'https://img.itch.zone/aW1hZ2UvMjQ2OTg2OC8xNDY2ODU4MS5wbmc=/original/d3yRAj.png',
    'https://img.itch.zone/aW1hZ2UvMjQ2OTg2OC8xNDY2ODU5Ni5wbmc=/original/%2Fo4wtH.png',
    'https://img.itch.zone/aW1hZ2UvMjQ2OTg2OC8xNDY2ODU5OC5wbmc=/original/KH5HWT.png'
]);
doubtfullyEverAfter.tools = ["Godot"];

const fiveStepsAway: Game = new Game("Five Steps Away", ["Story-based", "Walking simulator"], 2025, ["GlobalGameJam", "2D"], "link");
fiveStepsAway.setDescription(
    "Made in 48hs for the Global Game Jam 2025. " +
    "The theme was 'Bubble'. We somehow ended up with a story about grieving the unavoidable end of a relationship." +
    "Was not an easy task to create a story-based game in such a short time, but we managed to create a simplified version of what we envisioned."
)
fiveStepsAway.addTeamMember("Coding", "Nicolas Tejera, Juan Gabard");
fiveStepsAway.addTeamMember("2D Art", "Daniela Font, Benjamin Martinez, Patricia García, Piero Morelli.");
fiveStepsAway.setLink("https://jgabard.itch.io/five-steps-away");
fiveStepsAway.setImage('/games/five_steps_away/fsa_cover.png');
fiveStepsAway.setScreenshots([
    '/games/five_steps_away/screen1.webp',
    '/games/five_steps_away/screen2.webp',
    '/games/five_steps_away/screen3.webp',
    '/games/five_steps_away/screen4.webp',
    '/games/five_steps_away/screen5.webp',
    '/games/five_steps_away/screen6.webp'
]);
fiveStepsAway.tools = ["Godot"];

const boppler: Game = new Game("Boppler", ["Puzzle", "Suika-like"], 2024, ["Personal project", "Not finished"], "link");
boppler.setDescription(
    "Inspired by the popularity of the Suika game, I wanted to recreate the game by my own. " +
    "This was a great opportunity to dissect the mechanics and design choices that made it so engaging." +
    "I had a lot of fun experimenting with UI and sound effects."
)
boppler.addTeamMember("Coding / 2D Art", "Nicolas Tejera");
boppler.addTeamMember("2D Art", "Nicolas Tejera");
boppler.setLink("https://sauttize.itch.io/bubblepop");
boppler.setImage('/games/boppler/thumbnail.png');
boppler.setScreenshots([
    '/games/boppler/screen3.png',
    '/games/boppler/screen1.png',
    '/games/boppler/screen2.png'
]);
boppler.tools = ["Godot"];

export const GameList = [
    makeMeLaugh,
    doubtfullyEverAfter,
    boppler,
    fiveStepsAway
]