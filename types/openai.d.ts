export interface OpenAIModel {
    id: string;
    name: string;
    maxLength: number;
    tokenLimit: number;
    requestLimit: number;
}
export declare enum OpenAIModelID {
    GPT_3_5 = "gpt-3.5-turbo",
    GPT_3_5_AZ = "gpt-35-turbo",
    GPT_4 = "gpt-4",
    GPT_4_32K = "gpt-4-32k"
}
export declare const OpenAIModels: Record<OpenAIModelID, OpenAIModel>;
