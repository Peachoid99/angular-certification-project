export interface FixtureResponse {
    response: {
        fixture: {
            id: number;
        };
        league: {
            id: number;
            name: string;
        };
        teams: {
            home: {
                id: number;
                name: string;
                logo: string;
            };
            away: {
                id: number;
                name: string;
                logo: string;
            };
        };
        goals: {
            home: number;
            away: number;
        };
    }[];
}