// Type definitions for Google Google Cloud DNS API v1beta1
// Project: https://developers.google.com/cloud-dns
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/cloud-platform
//   View and manage your data across Google Cloud Platform services
// https://www.googleapis.com/auth/ndev.clouddns.readonly
//   View your DNS records hosted by Google Cloud DNS
// https://www.googleapis.com/auth/ndev.clouddns.readwrite
//   View and manage your DNS records hosted by Google Cloud DNS

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function dns(version:string):typeof googleapis.dns;
    function dns(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.dns;
}
/**
 * The Google Cloud DNS API provides services for configuring and serving authoritative DNS records.
 */
declare module googleapis.dns {
    var changes: {
        /**
         * Atomically update the ResourceRecordSet collection.
         * @params {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @params {string} project Identifies the project addressed by this request.
         */
        create: (params: {
            managedZone: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IChange;
        }, callback: (err: IErrorResponse, response: IChange, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Fetch the representation of an existing Change.
         * @params {string} changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
         * @params {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @params {string} project Identifies the project addressed by this request.
         */
        get: (params: {
            changeId: string;
            managedZone: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IChange, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Enumerate Changes to a ResourceRecordSet collection.
         * @params {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @params {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @params {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @params {string} project Identifies the project addressed by this request.
         * @params {string} sortBy Sorting criterion. The only supported value is change sequence.
         * @params {string} sortOrder Sorting order direction: 'ascending' or 'descending'.
         */
        list: (params: {
            managedZone: string;
            maxResults?: number;
            pageToken?: string;
            project: string;
            sortBy?: string;
            sortOrder?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IChangesListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var managedZones: {
        /**
         * Create a new ManagedZone.
         * @params {string} project Identifies the project addressed by this request.
         */
        create: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: IManagedZone;
        }, callback: (err: IErrorResponse, response: IManagedZone, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Delete a previously created ManagedZone.
         * @params {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @params {string} project Identifies the project addressed by this request.
         */
        delete: (params: {
            managedZone: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Fetch the representation of an existing ManagedZone.
         * @params {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @params {string} project Identifies the project addressed by this request.
         */
        get: (params: {
            managedZone: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IManagedZone, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Enumerate ManagedZones that have been created but not yet deleted.
         * @params {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @params {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @params {string} project Identifies the project addressed by this request.
         */
        list: (params: {
            maxResults?: number;
            pageToken?: string;
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IManagedZonesListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var projects: {
        /**
         * Fetch the representation of an existing Project.
         * @params {string} project Identifies the project addressed by this request.
         */
        get: (params: {
            project: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IProject, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var resourceRecordSets: {
        /**
         * Enumerate ResourceRecordSets that have been created but not yet deleted.
         * @params {string} managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
         * @params {number} maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
         * @params {string} name Restricts the list to return only records with this fully qualified domain name.
         * @params {string} pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
         * @params {string} project Identifies the project addressed by this request.
         * @params {string} type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
         */
        list: (params: {
            managedZone: string;
            maxResults?: number;
            name?: string;
            pageToken?: string;
            project: string;
            type?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: IResourceRecordSetsListResponse, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * An atomic update to a collection of ResourceRecordSets.
     */
    interface IChange {
        /**
         * Which ResourceRecordSets to add?
         */
        additions: IResourceRecordSet[];
        /**
         * Which ResourceRecordSets to remove? Must match existing data exactly.
         */
        deletions: IResourceRecordSet[];
        /**
         * Unique identifier for the resource; defined by the server (output only).
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dns#change".
         */
        kind: string;
        /**
         * The time that this operation was started by the server. This is in RFC3339 text format.
         */
        startTime: string;
        /**
         * Status of the operation. Can be one of the following: "PENDING" or "DONE" (output only).
         */
        status: string;
    }
    /**
     * The response to a request to enumerate Changes to a ResourceRecordSets collection.
     */
    interface IChangesListResponse {
        /**
         * The requested changes.
         */
        changes: IChange[];
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
         * 
         * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a "snapshot" of collections larger than the maximum page size.
         */
        nextPageToken: string;
    }
    /**
     * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
     */
    interface IManagedZone {
        /**
         * The time that this resource was created on the server. This is in RFC3339 text format. Output only.
         */
        creationTime: string;
        /**
         * A string to associate with this resource for the user's convenience. Has no effect on the managed zone's function.
         */
        description: string;
        /**
         * The DNS name of this managed zone, for instance "example.com.".
         */
        dnsName: string;
        /**
         * Unique identifier for the resource; defined by the server (output only)
         */
        id: string; // uint64
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dns#managedZone".
         */
        kind: string;
        /**
         * User assigned name for this resource. Must be unique within the project.
         */
        name: string;
        /**
         * Delegate your managed_zone to these virtual name servers; defined by the server (output only)
         */
        nameServers: string[];
    }
    interface IManagedZonesListResponse {
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * The managed zone resources.
         */
        managedZones: IManagedZone[];
        /**
         * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your page token.
         * 
         * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
         */
        nextPageToken: string;
    }
    /**
     * A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console.
     */
    interface IProject {
        /**
         * User assigned unique identifier for the resource (output only).
         */
        id: string;
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dns#project".
         */
        kind: string;
        /**
         * Unique numeric identifier for the resource; defined by the server (output only).
         */
        number: string; // uint64
        /**
         * Quotas assigned to this project (output only).
         */
        quota: IQuota;
    }
    /**
     * Limits associated with a Project.
     */
    interface IQuota {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dns#quota".
         */
        kind: string;
        /**
         * Maximum allowed number of managed zones in the project.
         */
        managedZones: number; // int32
        /**
         * Maximum allowed number of ResourceRecords per ResourceRecordSet.
         */
        resourceRecordsPerRrset: number; // int32
        /**
         * Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
         */
        rrsetAdditionsPerChange: number; // int32
        /**
         * Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
         */
        rrsetDeletionsPerChange: number; // int32
        /**
         * Maximum allowed number of ResourceRecordSets per zone in the project.
         */
        rrsetsPerManagedZone: number; // int32
        /**
         * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
         */
        totalRrdataSizePerChange: number; // int32
    }
    /**
     * A unit of data that will be returned by the DNS servers.
     */
    interface IResourceRecordSet {
        /**
         * Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet".
         */
        kind: string;
        /**
         * For example, www.example.com.
         */
        name: string;
        /**
         * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)
         */
        rrdatas: string[];
        /**
         * Number of seconds that this ResourceRecordSet can be cached by resolvers.
         */
        ttl: number; // int32
        /**
         * One of A, AAAA, SOA, MX, NS, TXT
         */
        type: string;
    }
    interface IResourceRecordSetsListResponse {
        /**
         * Type of resource.
         */
        kind: string;
        /**
         * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token.
         * 
         * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to retrieve a consistent snapshot of a collection larger than the maximum page size.
         */
        nextPageToken: string;
        /**
         * The resource record set resources.
         */
        rrsets: IResourceRecordSet[];
    }
}
