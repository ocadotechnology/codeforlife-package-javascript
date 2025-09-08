import { CacheClass } from 'memory-cache';
import { Express as Express_2 } from 'express';
import { Request as Request_2 } from 'express';
import { Response as Response_2 } from 'express';

declare type GetRenderAndTemplate = (path: string) => Promise<RenderAndTemplate>;

declare type HealthCheck = {
    healthStatus: HealthStatus;
    additionalInfo: string;
    details?: Array<{
        name: string;
        description: string;
        health: HealthStatus;
    }>;
};

declare type HealthStatus = "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown";

declare type Mode = "development" | "staging" | "production";

declare type OnServeError = (error: Error) => string | undefined;

declare type Options = Partial<{
    mode: Mode;
    port: number;
    base: string;
}>;

declare type Render = (path: string) => Promise<{
    head?: string;
    html?: string;
}>;

declare type RenderAndTemplate = [Render, string];

declare class Server {
    envIsProduction: boolean;
    templateHtml: string;
    hostname: string;
    mode: Mode;
    port: number;
    base: string;
    app: Express_2;
    cache: CacheClass<string, any>;
    healthCheckCacheKey: string;
    healthCheckCacheTimeout: number;
    healthCheckStatusCodes: Record<HealthStatus, number>;
    constructor({ mode, port, base }?: Options);
    getHealthCheck(request: Request_2): HealthCheck;
    handleHealthCheck(request: Request_2, response: Response_2): void;
    handleServeHtml(request: Request_2, response: Response_2, getRenderAndTemplate: GetRenderAndTemplate, onServeError: OnServeError): Promise<void>;
    run(): Promise<void>;
}
export default Server;

export { }


declare module "@mui/material/styles" {
    interface CustomPaletteColors {
        tertiary: PaletteColor;
        white: PaletteColor;
        black: PaletteColor;
        teacher: PaletteColor;
        student: PaletteColor;
        indy: PaletteColor;
    }
    interface Palette extends CustomPaletteColors {
    }
    interface PaletteOptions extends CustomPaletteColors {
    }
}


declare module "@mui/material" {
    interface FabPropsColorOverrides extends PropsColorOverrides {
    }
    interface CardPropsColorOverrides extends PropsColorOverrides {
    }
    interface ChipPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconPropsColorOverrides extends PropsColorOverrides {
    }
    interface AlertPropsColorOverrides extends PropsColorOverrides {
    }
    interface BadgePropsColorOverrides extends PropsColorOverrides {
    }
    interface RadioPropsColorOverrides extends PropsColorOverrides {
    }
    interface AppBarPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface SliderPropsColorOverrides extends PropsColorOverrides {
    }
    interface SwitchPropsColorOverrides extends PropsColorOverrides {
    }
    interface SvgIconPropsColorOverrides extends PropsColorOverrides {
    }
    interface CheckboxPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormLabelPropsColorOverrides extends PropsColorOverrides {
    }
    interface InputBasePropsColorOverrides extends PropsColorOverrides {
    }
    interface TextFieldPropsColorOverrides extends PropsColorOverrides {
    }
    interface IconButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationPropsColorOverrides extends PropsColorOverrides {
    }
    interface ButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
    interface FormControlPropsColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonPropsColorOverrides extends PropsColorOverrides {
    }
    interface LinearProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface PaginationItemPropsColorOverrides extends PropsColorOverrides {
    }
    interface CircularProgressPropsColorOverrides extends PropsColorOverrides {
    }
    interface TabsPropsIndicatorColorOverrides extends PropsColorOverrides {
    }
    interface ToggleButtonGroupPropsColorOverrides extends PropsColorOverrides {
    }
}
