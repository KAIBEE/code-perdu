import { Game } from '@/types';
import { createContext } from 'react';

export const GameContext = createContext<Game | undefined>(undefined);