/// <reference types="cypress" />
import { StyleOptions } from '.';
/**
 * Remove any style or extra link elements from the iframe placeholder
 * left from any previous test
 */
export declare function cleanupStyles(document: Document): void;
/**
 * Injects custom style text or CSS file or 3rd party style resources
 * into the given document.
 */
export declare const injectStylesBeforeElement: (options: Partial<StyleOptions & {
    log: boolean;
}>, document: Document, el: HTMLElement) => import("cypress/types/bluebird")<Cypress.Chainable<any>[]>;
/**
 * Replaces window.fetch with a polyfill based on XMLHttpRequest
 * that Cypress can spy on and stub
 * @see https://www.cypress.io/blog/2020/06/29/experimental-fetch-polyfill/
 */
export declare function polyfillFetchIfNeeded(): void;
