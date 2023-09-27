import { Fetcher } from 'swr';
import type { Game } from '../types';
import { mockGame } from './mockData';

//const baseUrl = 'http://localhost:3000'

export const gameFetcher: Fetcher<Game, string> = (/*id: string*/) => {
    return mockGame;
    //return fetch(`${baseUrl}/game:${id}`).then(res => res.json())
}