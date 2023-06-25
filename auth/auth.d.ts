import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session, User } from '../types/auth';
export interface Auth {
    AuthProvider: React.FC<{
        session: any;
        children: any;
    }>;
    session: () => Promise<Session | null>;
    user: () => Promise<User | null>;
    serverSession: (req: NextApiRequest, res: NextApiResponse, authOptions: any) => Promise<Session | null>;
    serverUser: (req: NextApiRequest, res: NextApiResponse, authOptions: any) => Promise<User | null>;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}
