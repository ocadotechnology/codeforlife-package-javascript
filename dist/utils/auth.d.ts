export declare function logout(): void;
export declare function getCsrfCookie(): string | undefined;
export declare function makeOAuth2StorageKey(provider: string, key: string): string;
export declare const OAUTH2_CODE_CHALLENGE_METHODS: readonly ["S256"];
export type OAuth2CodeChallengeMethods = (typeof OAUTH2_CODE_CHALLENGE_METHODS)[number];
export declare const OAUTH2_CODE_CHALLENGE_LENGTHS: readonly [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];
export type OAuth2CodeChallengeLengths = (typeof OAUTH2_CODE_CHALLENGE_LENGTHS)[number];
export type OAuth2RequestCodeUrlSearchParams = {
    client_id: string;
    redirect_uri: string;
    scope: string;
    response_type: string;
    access_type: string;
    prompt?: string;
    state: string;
    code_challenge: string;
    code_challenge_method: string;
};
export type OAuth2ReceiveCodeUrlSearchParams = {
    code: string;
    state: string;
};
export type OAuth2CodeChallenge = {
    verifier: string;
    challenge: string;
    method: OAuth2CodeChallengeMethods;
};
export declare function generateOAuth2CodeChallenge(length: OAuth2CodeChallengeLengths): Promise<OAuth2CodeChallenge>;
