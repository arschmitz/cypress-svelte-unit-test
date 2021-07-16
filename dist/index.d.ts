/// <reference types="cypress" />
/**
 * Additional styles to inject into the document.
 * A component might need 3rd party libraries from CDN,
 * local CSS files and custom styles.
 */
export interface StyleOptions {
    /**
     * Creates <link href="..." /> element for each stylesheet
     * @alias stylesheet
     */
    stylesheets: string | string[];
    /**
     * Creates <link href="..." /> element for each stylesheet
     * @alias stylesheets
     */
    stylesheet: string | string[];
    /**
     * Creates <style>...</style> element and inserts given CSS.
     * @alias styles
     */
    style: string | string[];
    /**
     * Creates <style>...</style> element for each given CSS text.
     * @alias style
     */
    styles: string | string[];
    /**
     * Loads each file and creates a <style>...</style> element
     * with the loaded CSS
     * @alias cssFile
     */
    cssFiles: string | string[];
    /**
     * Single CSS file to load into a <style></style> element
     * @alias cssFile
     */
    cssFile: string | string[];
    /**
     * HTML to surround the component with. Component itself
     * will replace DIV with id "here".
     */
    html: string;
}
/**
 * Options to pass to the component's constructor
 *
 * @export
 * @interface ComponentOptions
 * @example
 *  mount(HelloWorld, { props: {name: 'World'} })
 */
export interface ComponentOptions {
    callbacks?: {
        [key: string]: Function;
    };
    /**
     * List of props to pass to the component's constructor
     *
     * @memberof ComponentOptions
     * @example
     *  mount(HelloWorld, { props: {name: 'World'} })
     */
    props?: {
        [key: string]: any;
    };
}
interface SvelteComponentOptions {
    target: Element;
}
interface SvelteComponent {
    $$: {
        callbacks: {
            [key: string]: Function[];
        };
    };
}
interface SvelteComponentConstructor {
    new (options: SvelteComponentOptions): SvelteComponent;
}
export declare function mount(Component: SvelteComponentConstructor, options?: ComponentOptions, styleOptions?: Partial<StyleOptions>): Cypress.Chainable<Cypress.Chainable<SvelteComponent>>;
export default mount;
