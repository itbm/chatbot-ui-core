import React from 'react';
import { Session } from '../types/auth';
export interface Auth {
    AuthProvider: React.FC<{
        session: any;
        children: any;
    }>;
    useSession: () => Session | null;
    getClient: () => any;
    signIn: (client: any, provider: any, redirectTo: string) => Promise<void>;
    signOut: (client: any) => Promise<void>;
}
