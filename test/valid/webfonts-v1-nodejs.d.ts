// Type definitions for Google Google Fonts Developer API v1
// Project: https://developers.google.com/fonts/docs/developer_api
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function webfonts(version:string):typeof googleapis.webfonts;
    function webfonts(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.webfonts;
}
/**
 * The Google Fonts Developer API.
 */
declare module googleapis.webfonts {
    var webfonts: {
        /**
         * Retrieves the list of fonts currently served by the Google Fonts Developer API
         * @params {string} sort Enables sorting of the list
         */
        list: (params: {
            sort?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IWebfontList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface IWebfont {
        /**
         * The category of the font.
         */
        category: string;
        /**
         * The name of the font.
         */
        family: string;
        /**
         * The font files (with all supported scripts) for each one of the available variants, as a key : value map.
         */
        files: {
            [name:string]: string;
        };
        /**
         * This kind represents a webfont object in the webfonts service.
         */
        kind: string;
        /**
         * The date (format "yyyy-MM-dd") the font was modified for the last time.
         */
        lastModified: string; // date
        /**
         * The scripts supported by the font.
         */
        subsets: string[];
        /**
         * The available variants for the font.
         */
        variants: string[];
        /**
         * The font version.
         */
        version: string;
    }
    interface IWebfontList {
        /**
         * The list of fonts currently served by the Google Fonts API.
         */
        items: IWebfont[];
        /**
         * This kind represents a list of webfont objects in the webfonts service.
         */
        kind: string;
    }
}
