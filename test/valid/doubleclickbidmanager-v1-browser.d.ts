// Type definitions for Google DoubleClick Bid Manager API v1
// Project: https://developers.google.com/bid-manager/
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

/// <reference path="./googleapis-browser-common.d.ts" />

declare module gapi.client {
    /**
     * API for viewing and managing your reports in DoubleClick Bid Manager.
     */
    module doubleclickbidmanager {
        var lineitems: {
            /**
             * Retrieves line items in CSV format.
             */
            downloadlineitems: (params: {
                resource?: IDownloadLineItemsRequest;
            }) => { execute(callback: (data: IResponse<IDownloadLineItemsResponse>, original: string) => void):void; };
            /**
             * Uploads line items in CSV format.
             */
            uploadlineitems: (params: {
                resource?: IUploadLineItemsRequest;
            }) => { execute(callback: (data: IResponse<IUploadLineItemsResponse>, original: string) => void):void; };
        };
        var queries: {
            /**
             * Creates a query.
             */
            createquery: (params: {
                resource?: IQuery;
            }) => { execute(callback: (data: IResponse<IQuery>, original: string) => void):void; };
            /**
             * Deletes a stored query as well as the associated stored reports.
             * @params {string} queryId Query ID to delete.
             */
            deletequery: (params: {
                queryId: string;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
            /**
             * Retrieves a stored query.
             * @params {string} queryId Query ID to retrieve.
             */
            getquery: (params: {
                queryId: string;
            }) => { execute(callback: (data: IResponse<IQuery>, original: string) => void):void; };
            /**
             * Retrieves stored queries.
             */
            listqueries: (params: {
            }) => { execute(callback: (data: IResponse<IListQueriesResponse>, original: string) => void):void; };
            /**
             * Runs a stored query to generate a report.
             * @params {string} queryId Query ID to run.
             */
            runquery: (params: {
                queryId: string;
                resource?: IRunQueryRequest;
            }) => { execute(callback: (data:any, original: string) => void):void; }; // void
        };
        var reports: {
            /**
             * Retrieves stored reports.
             * @params {string} queryId Query ID with which the reports are associated.
             */
            listreports: (params: {
                queryId: string;
            }) => { execute(callback: (data: IResponse<IListReportsResponse>, original: string) => void):void; };
        };
        /**
         * Request to fetch stored line items.
         */
        interface IDownloadLineItemsRequest {
            /**
             * Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned.
             */
            filterIds: string /* int64 */ [];
            /**
             * Filter type used to filter line items to fetch.
             */
            filterType: string;
            /**
             * Format in which the line items will be returned. Default to CSV.
             */
            format: string;
        }
        /**
         * Download line items response.
         */
        interface IDownloadLineItemsResponse {
            /**
             * Retrieved line items in CSV format. Refer to  Entity Write File Format for more information on file format.
             */
            lineItems: string;
        }
        /**
         * Filter used to match traffic data in your report.
         */
        interface IFilterPair {
            /**
             * Filter type.
             */
            type: string;
            /**
             * Filter value.
             */
            value: string;
        }
        /**
         * List queries response.
         */
        interface IListQueriesResponse {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
             */
            kind: string;
            /**
             * Retrieved queries.
             */
            queries: IQuery[];
        }
        /**
         * List reports response.
         */
        interface IListReportsResponse {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
             */
            kind: string;
            /**
             * Retrieved reports.
             */
            reports: IReport[];
        }
        /**
         * Parameters of a query or report.
         */
        interface IParameters {
            /**
             * Filters used to match traffic data in your report.
             */
            filters: IFilterPair[];
            /**
             * Data is grouped by the filters listed in this field.
             */
            groupBys: string[];
            /**
             * Whether to include data from Invite Media.
             */
            includeInviteData: boolean;
            /**
             * Metrics to include as columns in your report.
             */
            metrics: string[];
            /**
             * Report type.
             */
            type: string;
        }
        /**
         * Represents a query.
         */
        interface IQuery {
            /**
             * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".
             */
            kind: string;
            /**
             * Query metadata.
             */
            metadata: IQueryMetadata;
            /**
             * Query parameters.
             */
            params: IParameters;
            /**
             * Query ID.
             */
            queryId: string; // int64
            /**
             * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
             */
            reportDataEndTimeMs: string; // int64
            /**
             * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.
             */
            reportDataStartTimeMs: string; // int64
            /**
             * Information on how often and when to run a query.
             */
            schedule: IQuerySchedule;
            /**
             * Canonical timezone code for report data time. Defaults to America/New_York.
             */
            timezoneCode: string;
        }
        /**
         * Query metadata.
         */
        interface IQueryMetadata {
            /**
             * Range of report data.
             */
            dataRange: string;
            /**
             * Format of the generated report.
             */
            format: string;
            /**
             * The path to the location in Google Cloud Storage where the latest report is stored.
             */
            googleCloudStoragePathForLatestReport: string;
            /**
             * The path in Google Drive for the latest report.
             */
            googleDrivePathForLatestReport: string;
            /**
             * The time when the latest report started to run.
             */
            latestReportRunTimeMs: string; // int64
            /**
             * Number of reports that have been generated for the query.
             */
            reportCount: number; // int32
            /**
             * Whether the latest report is currently running.
             */
            running: boolean;
            /**
             * Whether to send an email notification when a report is ready. Default to false.
             */
            sendNotification: boolean;
            /**
             * List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
             */
            shareEmailAddress: string[];
            /**
             * Query title. It is used to name the reports generated from this query.
             */
            title: string;
        }
        /**
         * Information on how frequently and when to run a query.
         */
        interface IQuerySchedule {
            /**
             * Datetime to periodically run the query until.
             */
            endTimeMs: string; // int64
            /**
             * How often the query is run.
             */
            frequency: string;
            /**
             * Time of day at which a new report will be generated, represented as minutes past midnight Range is 0 to 1439. Only applies to scheduled reports.
             */
            nextRunMinuteOfDay: number; // int32
            /**
             * Canonical timezone code for report generation time. Defaults to America/New_York.
             */
            nextRunTimezoneCode: string;
        }
        /**
         * Represents a report.
         */
        interface IReport {
            /**
             * Key used to identify a report.
             */
            key: IReportKey;
            /**
             * Report metadata.
             */
            metadata: IReportMetadata;
            /**
             * Report parameters.
             */
            params: IParameters;
        }
        /**
         * An explanation of a report failure.
         */
        interface IReportFailure {
            /**
             * Error code that shows why the report was not created.
             */
            errorCode: string;
        }
        /**
         * Key used to identify a report.
         */
        interface IReportKey {
            /**
             * Query ID.
             */
            queryId: string; // int64
            /**
             * Report ID.
             */
            reportId: string; // int64
        }
        /**
         * Report metadata.
         */
        interface IReportMetadata {
            /**
             * The path to the location in Google Cloud Storage where the report is stored.
             */
            googleCloudStoragePath: string;
            /**
             * The ending time for the data that is shown in the report.
             */
            reportDataEndTimeMs: string; // int64
            /**
             * The starting time for the data that is shown in the report.
             */
            reportDataStartTimeMs: string; // int64
            /**
             * Report status.
             */
            status: IReportStatus;
        }
        /**
         * Report status.
         */
        interface IReportStatus {
            /**
             * If the report failed, this records the cause.
             */
            failure: IReportFailure;
            /**
             * The time when this report either completed successfully or failed.
             */
            finishTimeMs: string; // int64
            /**
             * The file type of the report.
             */
            format: string;
            /**
             * The state of the report.
             */
            state: string;
        }
        /**
         * Represents the upload status of a row in the request.
         */
        interface IRowStatus {
            /**
             * Whether the stored entity is changed as a result of upload.
             */
            changed: boolean;
            /**
             * Entity Id.
             */
            entityId: string; // int64
            /**
             * Entity name.
             */
            entityName: string;
            /**
             * Reasons why the entity can't be uploaded.
             */
            errors: string[];
            /**
             * Whether the entity is persisted.
             */
            persisted: boolean;
            /**
             * Row number.
             */
            rowNumber: number; // int32
        }
        /**
         * Request to run a stored query to generate a report.
         */
        interface IRunQueryRequest {
            /**
             * Report data range used to generate the report.
             */
            dataRange: string;
            /**
             * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
             */
            reportDataEndTimeMs: string; // int64
            /**
             * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
             */
            reportDataStartTimeMs: string; // int64
            /**
             * Canonical timezone code for report data time. Defaults to America/New_York.
             */
            timezoneCode: string;
        }
        /**
         * Request to upload line items.
         */
        interface IUploadLineItemsRequest {
            /**
             * Set to true to get upload status without actually persisting the line items.
             */
            dryRun: boolean;
            /**
             * Format the line items are in. Default to CSV.
             */
            format: string;
            /**
             * Line items in CSV to upload. Refer to  Entity Write File Format for more information on file format.
             */
            lineItems: string;
        }
        /**
         * Upload line items response.
         */
        interface IUploadLineItemsResponse {
            /**
             * Status of upload.
             */
            uploadStatus: IUploadStatus;
        }
        /**
         * Represents the status of upload.
         */
        interface IUploadStatus {
            /**
             * Reasons why upload can't be completed.
             */
            errors: string[];
            /**
             * Per-row upload status.
             */
            rowStatus: IRowStatus[];
        }
    }
}
