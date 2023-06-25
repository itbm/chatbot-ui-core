export interface ServerDatabase {
    name: string;
    connect(args?: any): Promise<void>;
    disconnect(): Promise<void>;
    paths: {
        endpoint: string;
        handler: any;
    }[];
}
