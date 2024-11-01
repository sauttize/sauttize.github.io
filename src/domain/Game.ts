export class Game {
    private name: string;
    private genres: string[];
    private releaseYear: number;
    private description: string = "";
    private keywords: string[];
    private team: { [key: string]: string } = {};
    private link: string;
    private image: string = "";

    constructor(name: string, genres: string[], releaseYear: number, keywords: string[], link: string) {
        this.name = name;
        this.genres = genres;
        this.releaseYear = releaseYear;
        this.keywords = keywords;
        this.link = link;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getName(): string {
        return this.name;
    }

    public getGenres(): string[] {
        return this.genres;
    }

    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public getDescription(): string {
        return this.description;
    }

    public getKeywords(): string[] {
        return this.keywords;
    }

    public getTeam(): { [key: string]: string } {
        return this.team;
    }

    public getLink(): string {
        return this.link;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setGenres(genres: string[]): void {
        this.genres = genres;
    }

    public setReleaseYear(releaseYear: number): void {
        this.releaseYear = releaseYear;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setKeywords(keywords: string[]): void {
        this.keywords = keywords;
    }

    public setTeam(team: { [key: string]: string }): void {
        this.team = team;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public addKeyword(keyword: string): void {
        this.keywords.push(keyword);
    }

    public removeKeyword(keyword: string): void {
        this.keywords = this.keywords.filter(k => k !== keyword);
    }

    public addTeamMember(role: string, name: string): void {
        this.team[role] = name;
    }

    public removeTeamMember(role: string): void {
        delete this.team[role];
    }

    public addGenre(genre: string): void {
        this.genres.push(genre);
    }

    public removeGenre(genre: string): void {
        this.genres = this.genres.filter(g => g !== genre);
    }
}