export type PageProps<Props> = {
    auth: {
        user: {
            id: string;
            name: string;
            email: string;
        };
    };
    errors: {
        [key: string]: string;
    };
    notifications: {
        success: string;
        error: string;
        warning: string;
        info: string;
    };
} & Props;
