import { baseUrl } from '@/constants';

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

export const fetcher = (path: string) => fetch(`${baseUrl}${path}`).then((res) => res.json());



