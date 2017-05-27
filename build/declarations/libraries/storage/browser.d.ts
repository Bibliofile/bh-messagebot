import { IStorage } from './storage';
/**
 * @inheritdoc
 */
export declare class Storage implements IStorage {
    private namespace;
    /**
     * Creates a new storage class, should not be used by extensions.
     */
    constructor(namespace: string | number);
    /**
     * @inheritdoc
     */
    getString(key: string, fallback: string, local?: boolean): string;
    /**
     * @inheritdoc
     */
    getObject<T>(key: string, fallback: T, local?: boolean): T;
    /**
     * @inheritdoc
     */
    set(key: string, data: any, local?: boolean): void;
    /**
     * @inheritdoc
     */
    clearNamespace(namespace: string): void;
    /**
     * @inheritdoc
     */
    migrate<T>(key: string, actor: (found: T) => T): void;
}