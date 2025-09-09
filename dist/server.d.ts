import { CacheClass } from 'memory-cache';
import { Express, Request, Response } from 'express';
type Mode = "development" | "staging" | "production";
type Options = Partial<{
    mode: Mode;
    port: number;
    base: string;
}>;
type HealthStatus = "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown";
type HealthCheck = {
    healthStatus: HealthStatus;
    additionalInfo: string;
    details?: Array<{
        name: string;
        description: string;
        health: HealthStatus;
    }>;
};
type Render = (path: string) => Promise<{
    head?: string;
    html?: string;
}>;
type RenderAndTemplate = [Render, string];
type GetRenderAndTemplate = (path: string) => Promise<RenderAndTemplate>;
type OnServeError = (error: Error) => string | undefined;
export default class Server {
    envIsProduction: boolean;
    templateHtml: string;
    hostname: string;
    mode: Mode;
    port: number;
    base: string;
    app: Express;
    cache: CacheClass<string, any>;
    healthCheckCacheKey: string;
    healthCheckCacheTimeout: number;
    healthCheckStatusCodes: Record<HealthStatus, number>;
    constructor({ mode, port, base }?: Options);
    getHealthCheck(request: Request): HealthCheck;
    handleHealthCheck(request: Request, response: Response): void;
    handleServeHtml(request: Request, response: Response, getRenderAndTemplate: GetRenderAndTemplate, onServeError: OnServeError): Promise<void>;
    run(): Promise<void>;
}
export {};
