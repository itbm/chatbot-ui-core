import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from './types/auth';
export interface Auth {
    useSession: () => Promise<{
        session: Session | null;
        status: 'authenticated' | 'loading' | 'unauthenticated';
    }>;
    getServerSession: (req: NextApiRequest, res: NextApiResponse, authOptions: any) => Promise<Session | null>;
    getSession: () => Promise<Session | null>;
    getCsrfToken: () => Promise<string | undefined>;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}
