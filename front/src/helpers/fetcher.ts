import { Fetcher } from 'swr';
import type { Game } from '@/types';

const baseUrl = 'http://localhost:3000'

const EVENT_ID = "651424209c61c018b28c5270"; // devfest TODO move to an env file

export const fetchGame: Fetcher<Game, string> = (/*id: string*/) => {
    return fetch(`${baseUrl}/event/${EVENT_ID}`).then(res => res.json())
}

export const checkCode = (id: string, code: string) => {
    return fetch(`${baseUrl}/participants/${id}/verify-code?code=${code}`).then(res => res.json())
}

export const createParticipant = (email: string): Promise<string> => new Promise((resolve, reject) => {
    fetch(`${baseUrl}/participants`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        res.json().then((data) => {
            const id: string = data._id;
            resolve(id);
        })
    }).catch((err) => reject(err));
})

export const fetcher = (url: string) => fetch(url).then((res) => res.json());



