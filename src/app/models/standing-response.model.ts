import { Standing } from "./standing.model";

export interface StandingResponse {
  response: {
    league: {
      standings: Standing[][]
    }
  }[];
}