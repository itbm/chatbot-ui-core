export interface AiModel {
    id: string;
    maxLength: number;
    tokenLimit: number;
    requestLimit: number;
    vendor: 'OpenAI' | 'Anthropic';
}
export interface PossibleAiModelsInterface {
    [modelId: string]: AiModel;
}
export declare const PossibleAiModels: PossibleAiModelsInterface;
