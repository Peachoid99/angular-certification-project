import { Team } from "./team.model";

export interface Fixture {
    fixture: {
        id: number;
    };
    league: {
        id: number;
        name: string;
    };
    teams: {
        home: Team;
        away: Team;
    };
    goals: {
        home: number;
        away: number;
    };
}