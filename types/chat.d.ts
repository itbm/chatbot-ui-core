import { AiModel } from './ai-models';
import { SystemPrompt } from './system-prompt';
export interface Message {
    id: string;
    role: 'assistant' | 'user' | 'auth';
    content: string;
    timestamp: string;
    plugin?: string;
}
export interface ChatBody {
    model: AiModel;
    messages: Message[];
    apiKey: string;
    systemPrompt: SystemPrompt;
    temperature: number;
}
export interface Conversation {
    id: string;
    name: string;
    messages: Message[];
    model: AiModel;
    systemPrompt: SystemPrompt | null;
    temperature: number;
    folderId: string | null;
    timestamp: string;
    enabledPlugins: string[];
}
