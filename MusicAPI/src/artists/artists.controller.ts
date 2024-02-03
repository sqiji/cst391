import { Request, Response } from 'express';

const ARTIST = [
    {id: 1, name: 'The Beatles'},
    {id: 2, name: 'The Who'},
    {id: 3, name: 'Abba'}
];

export const getArtists = (req: Request, res: Response) => {
    res.send(ARTIST);
};