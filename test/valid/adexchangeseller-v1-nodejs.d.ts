// Type definitions for Google Ad Exchange Seller API v1
// Project: https://developers.google.com/ad-exchange/seller-rest/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/adexchange.seller
//   View and manage your Ad Exchange data
// https://www.googleapis.com/auth/adexchange.seller.readonly
//   View your Ad Exchange data

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function adexchangeseller(version:string):typeof googleapis.adexchangeseller;
    function adexchangeseller(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.adexchangeseller;
}
/**
 * Gives Ad Exchange seller users access to their inventory and the ability to generate reports
 */
declare module googleapis.adexchangeseller {
    var adclients: {
        /**
         * List all ad clients in this Ad Exchange account.
         * @params {number} maxResults The maximum number of ad clients to include in the response, used for paging.
         * @params {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAdClients, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var adunits: {
        /**
         * Gets the specified ad unit in the specified ad client.
         * @params {string} adClientId Ad client for which to get the ad unit.
         * @params {string} adUnitId Ad unit to retrieve.
         */
        get: (params: {
            adClientId: string;
            adUnitId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAdUnit, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all ad units in the specified ad client for this Ad Exchange account.
         * @params {string} adClientId Ad client for which to list ad units.
         * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
         * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
         * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         */
        list: (params: {
            adClientId: string;
            includeInactive?: boolean;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IAdUnits, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        customchannels: {
            /**
             * List all custom channels which the specified ad unit belongs to.
             * @params {string} adClientId Ad client which contains the ad unit.
             * @params {string} adUnitId Ad unit for which to list custom channels.
             * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                adUnitId: string;
                maxResults?: number;
                pageToken?: string;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: ICustomChannels, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    var customchannels: {
        /**
         * Get the specified custom channel from the specified ad client.
         * @params {string} adClientId Ad client which contains the custom channel.
         * @params {string} customChannelId Custom channel to retrieve.
         */
        get: (params: {
            adClientId: string;
            customChannelId: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICustomChannel, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List all custom channels in the specified ad client for this Ad Exchange account.
         * @params {string} adClientId Ad client for which to list custom channels.
         * @params {number} maxResults The maximum number of custom channels to include in the response, used for paging.
         * @params {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         */
        list: (params: {
            adClientId: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ICustomChannels, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        adunits: {
            /**
             * List all ad units in the specified custom channel.
             * @params {string} adClientId Ad client which contains the custom channel.
             * @params {string} customChannelId Custom channel for which to list ad units.
             * @params {boolean} includeInactive Whether to include inactive ad units. Default: true.
             * @params {number} maxResults The maximum number of ad units to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                adClientId: string;
                customChannelId: string;
                includeInactive?: boolean;
                maxResults?: number;
                pageToken?: string;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: IAdUnits, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    var reports: {
        /**
         * Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
         * @params {string} dimension Dimensions to base the report on.
         * @params {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @params {string} filter Filters to be run on the report.
         * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @params {number} maxResults The maximum number of rows of report data to return.
         * @params {string} metric Numeric columns to include in the report.
         * @params {string} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
         * @params {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @params {number} startIndex Index of the first row of report data to return.
         */
        generate: (params: {
            dimension?: string;
            endDate: string;
            filter?: string;
            locale?: string;
            maxResults?: number;
            metric?: string;
            sort?: string;
            startDate: string;
            startIndex?: number;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IReport, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        saved: {
            /**
             * Generate an Ad Exchange report based on the saved report ID sent in the query parameters.
             * @params {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
             * @params {number} maxResults The maximum number of rows of report data to return.
             * @params {string} savedReportId The saved report to retrieve.
             * @params {number} startIndex Index of the first row of report data to return.
             */
            generate: (params: {
                locale?: string;
                maxResults?: number;
                savedReportId: string;
                startIndex?: number;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: IReport, incomingMessage: any /* http.IncomingMessage */) => void) => void;
            /**
             * List all saved reports in this Ad Exchange account.
             * @params {number} maxResults The maximum number of saved reports to include in the response, used for paging.
             * @params {string} pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
             */
            list: (params: {
                maxResults?: number;
                pageToken?: string;
                key?: string; // API_KEY
                auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            }, callback: (err: IErrorResponse, response: ISavedReports, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        };
    };
    var urlchannels: {
        /**
         * List all URL channels in the specified ad client for this Ad Exchange account.
         * @params {string} adClientId Ad client for which to list URL channels.
         * @params {number} maxResults The maximum number of URL channels to include in the response, used for paging.
         * @params {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         */
        list: (params: {
            adClientId: string;
            maxResults?: number;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IUrlChannels, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface IAdClient {
        /**
         * Whether this ad client is opted in to ARC.
         */
        arcOptIn: boolean;
        /**
         * Unique identifier of this ad client.
         */
        id: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#adClient.
         */
        kind: string;
        /**
         * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
         */
        productCode: string;
        /**
         * Whether this ad client supports being reported on.
         */
        supportsReporting: boolean;
    }
    interface IAdClients {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The ad clients returned in this list response.
         */
        items: IAdClient[];
        /**
         * Kind of list this is, in this case adexchangeseller#adClients.
         */
        kind: string;
        /**
         * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
         */
        nextPageToken: string;
    }
    interface IAdUnit {
        /**
         * Identity code of this ad unit, not necessarily unique across ad clients.
         */
        code: string;
        /**
         * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
         */
        id: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#adUnit.
         */
        kind: string;
        /**
         * Name of this ad unit.
         */
        name: string;
        /**
         * Status of this ad unit. Possible values are:
         * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
         * 
         * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
         * 
         * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
         */
        status: string;
    }
    interface IAdUnits {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The ad units returned in this list response.
         */
        items: IAdUnit[];
        /**
         * Kind of list this is, in this case adexchangeseller#adUnits.
         */
        kind: string;
        /**
         * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
         */
        nextPageToken: string;
    }
    interface ICustomChannel {
        /**
         * Code of this custom channel, not necessarily unique across ad clients.
         */
        code: string;
        /**
         * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
         */
        id: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#customChannel.
         */
        kind: string;
        /**
         * Name of this custom channel.
         */
        name: string;
        /**
         * The targeting information of this custom channel, if activated.
         */
        targetingInfo: {
            adsAppearOn: string;
            description: string;
            location: string;
            siteLanguage: string;
        };
    }
    interface ICustomChannels {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The custom channels returned in this list response.
         */
        items: ICustomChannel[];
        /**
         * Kind of list this is, in this case adexchangeseller#customChannels.
         */
        kind: string;
        /**
         * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
         */
        nextPageToken: string;
    }
    interface IReport {
        /**
         * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
         */
        averages: string[];
        /**
         * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
         */
        headers: {
            currency: string;
            name: string;
            type: string;
        }[];
        /**
         * Kind this is, in this case adexchangeseller#report.
         */
        kind: string;
        /**
         * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
         */
        rows: string[][];
        /**
         * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
         */
        totalMatchedRows: string; // int64
        /**
         * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
         */
        totals: string[];
        /**
         * Any warnings associated with generation of the report.
         */
        warnings: string[];
    }
    interface ISavedReport {
        /**
         * Unique identifier of this saved report.
         */
        id: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#savedReport.
         */
        kind: string;
        /**
         * This saved report's name.
         */
        name: string;
    }
    interface ISavedReports {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The saved reports returned in this list response.
         */
        items: ISavedReport[];
        /**
         * Kind of list this is, in this case adexchangeseller#savedReports.
         */
        kind: string;
        /**
         * Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
         */
        nextPageToken: string;
    }
    interface IUrlChannel {
        /**
         * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
         */
        id: string;
        /**
         * Kind of resource this is, in this case adexchangeseller#urlChannel.
         */
        kind: string;
        /**
         * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
         */
        urlPattern: string;
    }
    interface IUrlChannels {
        /**
         * ETag of this response for caching purposes.
         */
        etag: string;
        /**
         * The URL channels returned in this list response.
         */
        items: IUrlChannel[];
        /**
         * Kind of list this is, in this case adexchangeseller#urlChannels.
         */
        kind: string;
        /**
         * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
         */
        nextPageToken: string;
    }
}
