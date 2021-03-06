// Type definitions for Google Resource Views API v1beta1
// Project: https://developers.google.com/compute/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/compute
//   View and manage your Google Compute Engine resources
// https://www.googleapis.com/auth/compute.readonly
//   View your Google Compute Engine resources
// https://www.googleapis.com/auth/ndev.cloudman
//   View and manage your Google Cloud Platform management resources and deployment status information
// https://www.googleapis.com/auth/ndev.cloudman.readonly
//   View your Google Cloud Platform management resources and deployment status information

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function resourceviews(version:string):typeof googleapis.resourceviews;
    function resourceviews(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.resourceviews;
}
/**
 * The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.
 */
declare module googleapis.resourceviews {
    var regionViews: {
        /**
         * Add resources to the view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         */
        addresources: (params: {
            projectName: string;
            region: string;
            resourceViewName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRegionViewsAddResourcesRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Delete a resource view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         */
        delete: (params: {
            projectName: string;
            region: string;
            resourceViewName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Get the information of a resource view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         */
        get: (params: {
            projectName: string;
            region: string;
            resourceViewName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IResourceView, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Create a resource view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         */
        insert: (params: {
            projectName: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IResourceView;
        }, callback: (err: IErrorResponse, response: IRegionViewsInsertResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List resource views.
         * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
         * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            projectName: string;
            region: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRegionViewsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List the resources in the view.
         * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
         * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         */
        listresources: (params: {
            maxResults?: number;
            pageToken?: string;
            projectName: string;
            region: string;
            resourceViewName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IRegionViewsListResourcesResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Remove resources from the view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} region The region name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         */
        removeresources: (params: {
            projectName: string;
            region: string;
            resourceViewName: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IRegionViewsRemoveResourcesRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    var zoneViews: {
        /**
         * Add resources to the view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        addresources: (params: {
            projectName: string;
            resourceViewName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IZoneViewsAddResourcesRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Delete a resource view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        delete: (params: {
            projectName: string;
            resourceViewName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Get the information of a zonal resource view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        get: (params: {
            projectName: string;
            resourceViewName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IResourceView, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Create a resource view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        insert: (params: {
            projectName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IResourceView;
        }, callback: (err: IErrorResponse, response: IZoneViewsInsertResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List resource views.
         * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
         * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
         * @params {string} projectName The project name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            projectName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IZoneViewsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * List the resources of the resource view.
         * @params {number} maxResults Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
         * @params {string} pageToken Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
         * @params {string} projectName The project name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        listresources: (params: {
            maxResults?: number;
            pageToken?: string;
            projectName: string;
            resourceViewName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IZoneViewsListResourcesResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Remove resources from the view.
         * @params {string} projectName The project name of the resource view.
         * @params {string} resourceViewName The name of the resource view.
         * @params {string} zone The zone name of the resource view.
         */
        removeresources: (params: {
            projectName: string;
            resourceViewName: string;
            zone: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IZoneViewsRemoveResourcesRequest;
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
    };
    /**
     * The Label to be applied to the resource views.
     */
    interface ILabel {
        /**
         * Key of the label.
         */
        key: string;
        /**
         * Value of the label.
         */
        value: string;
    }
    /**
     * The request to add resources to the resource view.
     */
    interface IRegionViewsAddResourcesRequest {
        /**
         * The list of resources to be added.
         */
        resources: string[];
    }
    /**
     * The response to a resource view insert request.
     */
    interface IRegionViewsInsertResponse {
        /**
         * The resource view object inserted.
         */
        resource: IResourceView;
    }
    /**
     * The response to the list resource request.
     */
    interface IRegionViewsListResourcesResponse {
        /**
         * The resources in the view.
         */
        members: string[];
        /**
         * A token used for pagination.
         */
        nextPageToken: string;
    }
    /**
     * The response to the list resource view request.
     */
    interface IRegionViewsListResponse {
        /**
         * A token used for pagination.
         */
        nextPageToken: string;
        /**
         * The list of resource views that meet the criteria.
         */
        resourceViews: IResourceView[];
    }
    /**
     * The request to remove resources from the resource view.
     */
    interface IRegionViewsRemoveResourcesRequest {
        /**
         * The list of resources to be removed.
         */
        resources: string[];
    }
    /**
     * The resource view object.
     */
    interface IResourceView {
        /**
         * The creation time of the resource view.
         */
        creationTime: string;
        /**
         * The detailed description of the resource view.
         */
        description: string;
        /**
         * [Output Only] The ID of the resource view.
         */
        id: string;
        /**
         * Type of the resource.
         */
        kind: string;
        /**
         * The labels for events.
         */
        labels: ILabel[];
        /**
         * The last modified time of the view. Not supported yet.
         */
        lastModified: string;
        /**
         * A list of all resources in the resource view.
         */
        members: string[];
        /**
         * The name of the resource view.
         */
        name: string;
        /**
         * The total number of resources in the resource view.
         */
        numMembers: number; // uint32
        /**
         * [Output Only] A self-link to the resource view.
         */
        selfLink: string;
    }
    /**
     * The request to add resources to the resource view.
     */
    interface IZoneViewsAddResourcesRequest {
        /**
         * The list of resources to be added.
         */
        resources: string[];
    }
    /**
     * The response to an insert request.
     */
    interface IZoneViewsInsertResponse {
        /**
         * The resource view object that has been inserted.
         */
        resource: IResourceView;
    }
    /**
     * The response to a list resource request.
     */
    interface IZoneViewsListResourcesResponse {
        /**
         * The full URL of resources in the view.
         */
        members: string[];
        /**
         * A token used for pagination.
         */
        nextPageToken: string;
    }
    /**
     * The response to a list request.
     */
    interface IZoneViewsListResponse {
        /**
         * A token used for pagination.
         */
        nextPageToken: string;
        /**
         * The result that contains all resource views that meet the criteria.
         */
        resourceViews: IResourceView[];
    }
    /**
     * The request to remove resources from the resource view.
     */
    interface IZoneViewsRemoveResourcesRequest {
        /**
         * The list of resources to be removed.
         */
        resources: string[];
    }
}
