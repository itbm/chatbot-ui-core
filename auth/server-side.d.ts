import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from '../types/auth';
export interface ServerAuth {
    session: (req: NextApiRequest, res: NextApiResponse, authOptions: any) => Promise<Session | null>;
    apiHandler: any;
}
