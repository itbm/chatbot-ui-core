"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIModels = exports.OpenAIModelID = void 0;
var OpenAIModelID;
(function (OpenAIModelID) {
    OpenAIModelID["GPT_3_5"] = "gpt-3.5-turbo";
    OpenAIModelID["GPT_3_5_AZ"] = "gpt-35-turbo";
    OpenAIModelID["GPT_4"] = "gpt-4";
    OpenAIModelID["GPT_4_32K"] = "gpt-4-32k";
})(OpenAIModelID = exports.OpenAIModelID || (exports.OpenAIModelID = {}));
exports.OpenAIModels = {
    [OpenAIModelID.GPT_3_5]: {
        id: OpenAIModelID.GPT_3_5,
        name: 'GPT-3.5',
        maxLength: 12000,
        tokenLimit: 4000,
        requestLimit: 3000,
    },
    [OpenAIModelID.GPT_3_5_AZ]: {
        id: OpenAIModelID.GPT_3_5_AZ,
        name: 'GPT-3.5',
        maxLength: 12000,
        tokenLimit: 4000,
        requestLimit: 3000,
    },
    [OpenAIModelID.GPT_4]: {
        id: OpenAIModelID.GPT_4,
        name: 'GPT-4',
        maxLength: 24000,
        tokenLimit: 8000,
        requestLimit: 6000,
    },
    [OpenAIModelID.GPT_4_32K]: {
        id: OpenAIModelID.GPT_4_32K,
        name: 'GPT-4-32K',
        maxLength: 96000,
        tokenLimit: 32000,
        requestLimit: 24000,
    },
};
