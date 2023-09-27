declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_PREFIX:? string;
        }
    }
}