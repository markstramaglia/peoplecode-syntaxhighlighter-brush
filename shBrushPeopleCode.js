/**
 * Custom PeopleCode Brush for SyntaxHighlighter
 * Brush written by Mark Stramaglia
 * GitHub: https://github.com/markstramaglia/peoplecode-syntaxhighlighter-brush
 *
 * Brush @version
 * 1.0.1 (February 25 2015)
 *
 * Credit to Alex Gorbatchev for SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * PeopleCode is Copyright Oracle Corporation.
 */
 
;(function()
{
  // CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush()
  {
    
    // Keyword list current as of PeopleTools 8.54
    var keywords =  
      // Conventional Data Types
      'Any Boolean Date DateTime Float Integer Number String Time Array ' +
      
      // Object Data Types
      'Field Record Row Rowset AnalyticGrid Chart Gantt Grid GridColumn OrgChart ' +
      'Page RatingBoxChart Cookie Request Response Session XmlDoc ' +
      
      // Language Constructs
      'If End-If Else Then And Or For End-For While End-While Break Continue Exit ' +
      'Evaluate When When-Other End-Evaluate Repeat Until Try Catch Throw ' +
      'Function End-Function Method End-Method Class End-Class Local Global Constant ' +
      'Property As Of Protected Import Set End-Set Get End-Get instance ' +
      
      // PeopleCode Built-In Functions
      'Abs AccruableDays AccrualFactor Acos ActiveRowCount AddAttachment AddEmailAddress ' +
      'AddJavaScript AddKeyListItem AddMetaTag AddOnLoadScript AddStyleSheet AddSystemPauseTimes ' +
      'AddToDate AddToDateTime AddToTime All AllOrNone AllowEmplIdChg Amortize Asin Atan ' +
      'BlackScholesCall BlackScholesPut BootstrapYTMs Break BulkDeleteField BulkInsertField ' +
      'BulkModifyPageFieldOrder BulkUpdateIndexes CallAppEngine CancelPubHeaderXmlDoc ' +
      'CancelPubXmlDoc CancelSubXmlDoc ChangeEmailAddress Char CharType ChDir ChDrive ' +
      'CheckMenuItem ChunkText Clean CleanAttachments ClearKeyList ClearSearchDefault ' +
      'ClearSearchEdit Code Codeb CollectGarbage CommitWork CompareLikeFields ' +
      'CompareStrings CompareTextDiff Component ComponentChanged ConnectorRequest ' +
      'ConnectorRequestURL ContainsCharType ContainsOnlyCharType Continue ' +
      'ConvertChar ConvertCurrency ConvertDatetimeToBase ConvertRate ConvertTimeToBase ' +
      'CopyAttachments CopyFields CopyFromJavaArray CopyRow CopyToJavaArray Cos Cot ' +
      'CreateAnalyticInstance CreateArray CreateArrayAny CreateArrayRept CreateBreadcrumb ' +
      'CreateDirectory CreateDocument CreateDocumentKey CreateException CreateJavaArray ' +
      'CreateJavaObject CreateMCFIMInfo CreateMessage CreateObject CreateObjectArray ' +
      'CreateProcessRequest CreateRecord CreateRowset CreateRowsetCache CreateSearchRowset ' +
      'CreateSOAPDoc CreateSQL CreateWSDLMessage CreateXmlDoc CropImage CubicSpline ' +
      'CurrEffDt CurrEffRowNum CurrEffSeq CurrentLevelNumber CurrentRowNumber Date Date3 ' +
      'DatePart DateTime6 DateTimeToHTTP DateTimeToISO DateTimeToLocalizedString DateTimeToTimeZone ' +
      'DateTimeToUserFormat DateTimeValue DateValue Day Days Days360 Days365 DBCSTrim ' +
      'DBPatternMatch DeChunkText Declare Decrypt Degrees DeleteAttachment DeleteEmailAddress ' +
      'DeleteImage DeleteRecord DeleteRow DeleteSQL DeleteSystemPauseTimes DeQueue ' +
      'DetachAttachment DisableMenuItem DiscardRow DoCancel DoModal DoModalComponent ' +
      'DoModalComponentPopup DoModalX DoModalXComponent DoModalPanelGroup DoModalPopup ' +
      'DoSave DoSaveNow EnableMenuItem EncodeSearchCode EncodeURL ' +
      'EncodeURLForQueryString Encrypt EncryptNodePswd EndMessage EndModal EndModalComponent ' +
      'EnQueue Error EscapeHTML EscapeJavascriptString EscapeWML Evaluate Exact Exec ExecuteRolePeopleCode ' +
      'ExecuteRoleQuery ExecuteRoleWorkflowQuery ExecuteSearchSavePC Exit Exp ExpandBindVar ExpandEnvVar ' +
      'ExpandSqlBinds Fact FetchSQL FetchValue FieldChanged FileExists Find Findb FindCodeSetValues ' +
      'FindFiles FlushBulkInserts For FormatDateTime Forward Function GenABNNodeURL GenDynABNElement ' +
      'GenerateActGuideContentUrl GenerateActGuidePortalUrl GenerateActGuideRelativeUrl ' +
      'GenerateComponentContentRelURL GenerateComponentContentURL GenerateComponentPortalRelURL ' +
      'GenerateComponentPortalURL GenerateComponentRelativeURL GenerateExternalPortalURL ' +
      'GenerateExternalRelativeURL GenerateHomepagePortalURL GenerateHomepageRelativeURL ' +
      'GenerateQueryContentURL GenerateQueryPortalURL GenerateQueryRelativeURL GenerateScriptContentRelURL ' +
      'GenerateScriptContentURL GenerateScriptPortalRelURL GenerateScriptPortalURL GenerateScriptRelativeURL ' +
      'GenerateTree GenerateWorklistPortalURL GenerateWorklistRelativeURL GenHTMLMenu GenToken ' +
      'GetABNChartRowSet GetABNInitialNode GetABNNode GetABNRelActnRowSet GetABNReqParameters ' +
      'GetABNTreeEffdt GetABNTreeName GetABNTreeSetid GetABNTreeUserKey GetAddSearchRecName ' +
      'GetAESection GetAnalyticGrid GetAnalyticInstance GetArchPubHeaderXmlDoc ' +
      'GetArchPubXmlDoc GetArchSubXmlDoc GetAttachment GetAttachmentURL GetBiDoc GetBreadcrumbs ' +
      'GetCalendarDate GetChart GetChartURL GetCwd GetDialGauge GetEnv GetField ' +
      'GetFile GetGanttChart GetGrid GetHTMLText GetImageExtents GetInterlink GetJavaClass ' +
      'GetLEDGauge GetLevel0 GetMethodNames GetMessage GetMessageInstance GetMessageXmlDoc ' +
      'GetNextNumber GetNextNumberWithGaps GetNextNumberWithGapsCommit GetNextProcessInstance ' +
      'GetNRXmlDoc GetOrgChart GetPage ' +
      'GetPageField GetPageTitle GetPageType GetProgramFunctionInfo GetPubContractInstance GetPubHeaderXmlDoc ' +
      'GetPubXmlDoc GetRatingBoxChart GetRecord GetReferenceArea GetReferenceLine GetRelField ' +
      'GetRow GetRowset GetRowsetCache GetSearchRecName GetSelectedTreeNode GetSession GetSetId ' +
      'GetSQL GetStatusMeterGauge GetStoredFormat GetSubContractInstance GetSubXmlDoc ' +
      'GetSyncLogData GetTempFile GetThreshold GetTreeNodeParent GetTreeNodeRecordName ' +
      'GetTreeNodeValue GetURL GetUserOption GetWLFieldValue Global Gray GrayMenuItem Hash HashWithSalt ' +
      'HermiteCubic Hide HideMenuItem HideRow HideScroll HistVolatility Hour IBPurgeDomainStatus ' +
      'IBPurgeNodesDown Idiv If InboundPublishXmlDoc InitChat InsertImage InsertRow ' +
      'Int Integer IsAddMode IsAlpha IsAlphaNumeric IsBackEnabled IsDate IsDateTime ' +
      'IsDaylightSavings IsDigits IsFluidMode IsFluidSearchStart IsGroupletRequest IsHidden ' +
      'IsHomeEnabled IsLogoutEnabled IsMenuItemAuthorized IsMessageActive IsModal ' +
      'IsModalComponent IsModalPanelGroup IsNavBarEnabled IsNextInListEnabled ' +
      'IsNotifyEnabled IsNumber IsOperatorInClass ISOToDate ISOToDateTime IsPinEnabled ' +
      'IsPrevInListEnabled IsSaveEnabled IsSearchEnabled IsSearchDialog IsTime IsUserInPermissionList ' +
      'IsUserInRole IsUserNumber Left Len Lenb LinearInterp Ln LoadABN Local LogObjectUse ' +
      'Log10 Lower LTrim MAddAttachment MarkPrimaryEmailAddress MarkWLItemWorked ' +
      'Max MCFBroadcast MessageBox Min Minute Mod Month MsgGet MsgGetExplainText ' +
      'MsgGetText NextEffDt NextRelEffDt NodeDelete NodeRename NodeSaveAs NodeTranDelete ' +
      'None NotifyQ NumberToDisplayString NumberToString ObjectDoMethod ObjectDoMethodArray ' +
      'ObjectGetProperty ObjectSetProperty OnlyOne OnlyOneOrNone OverrideCNAVDisplayMode ' +
      'PanelGroupChanged PingNode PriorEffDt PriorRelEffDt PriorValue Product Prompt ' +
      'Proper PublishXmlDoc PutAttachment Quote Radians Rand RecordChanged RecordDeleted ' +
      'RecordNew RefreshTree RelNodeTranDelete RemoteCall RemoveDirectory RenameDBField ' +
      'RenamePage RenameRecord Repeat Replace Rept ResizeImage ReSubmitPubHeaderXmlDoc ' +
      'ReSubmitPubXmlDoc ReSubmitSubXmlDoc Return ReturnToServer ReValidateNRXmlDoc ' +
      'RevalidatePassword Right Round RoundCurrency RowFlush RowScrollSelect ' +
      'RowScrollSelectNew RTrim ScheduleProcess ScrollFlush ScrollSelect ' +
      'ScrollSelectNew Second SecureRandomGen SendMail SetAddMode SetAuthenticationResult ' +
      'SetChannelStatus SetComponentChanged SetControlValue SetCursorPos SetDBFieldAuxFlag ' +
      'SetDBFieldCharDefn SetDBFieldFormat SetDBFieldFormatLength SetDBFieldLabel ' +
      'SetDBFieldLength SetDBFieldNotUsed SetDefault SetDefaultAll SetDefaultNext ' +
      'SetDefaultNextRel SetDefaultPrior SetDefaultPriorRel SetDisplayFormat SetLabel ' +
      'SetLanguage SetMessageStatus SetNextPanel SetNextPage SetPageFieldPageFieldName ' +
      'SetPasswordExpired SetPostReport SetRecFieldEditTable SetRecFieldKey SetReEdit ' +
      'SetSearchDefault SetSearchDialogBehavior SetSearchEdit SetTempTableInstance ' +
      'SetThemeId SetTracePC SetTraceSQL SetTransferAttributes SetupScheduleDefnItem ' +
      'SetUserOption ShouldSuppressCREF Sign Sin SinglePaymentPV SortScroll Split ' +
      'SQLExec Sqrt StartWork StopFetching StoreSQL String StripOffHTMLTags Substitute ' +
      'Substring Substringb SwitchUser SyncRequestXmlDoc Tan throw Time Time3 TimePart ' +
      'TimeToTimeZone TimeValue TimeZoneOffset TotalRowCount Transfer TransferExact ' +
      'TransferModeless TransferNode TransferPanel TransferPage TransferPortal Transform ' +
      'TransformEx TransformExCache TreeDetailInNode TriggerBusinessEvent Truncate try ' +
      'UIDisplayMode UnCheckMenuItem Unencode Ungray Unhide UnhideRow UnhideScroll ' +
      'UniformSeriesPV UpdateSysVersion UpdateValue UpdateXmlDoc Upper Value ' +
      'ValueUser VerifyHash VerifyOprPassword ViewAttachment ViewContentURL ViewURL ' +
      'Warning Weekday While WinEscape WinExec WinMessage WriteToLog Year';

    this.regexList = [
      { regex: new RegExp('REM.*', 'g'),                       css: 'comments' },  // one line comments
      { regex: /\/\*[^]*?\*\//g,                               css: 'comments' },  // multiline comments - /* */
      { regex: /\/\+[^]*?\+\//g,                               css: 'comments' },  // multiline comments - /+ +/
      { regex: /\<\*[^]*?\*\>/g,                               css: 'comments' },  // multiline comments - <* *>
      { regex: SyntaxHighlighter.regexLib.doubleQuotedString,  css: 'color3' },    // strings
      { regex: SyntaxHighlighter.regexLib.singleQuotedString,  css: 'color3' },    // strings
      { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,          css: 'constants' }, // numbers
      { regex: /\%this\b/ig,                                   css: 'keyword' },   // %this keyword
      { regex: new RegExp(this.getKeywords(keywords), 'igm'),  css: 'keyword' }    // PeopleCode keywords
      ];

    this.forHtmlScript({
      left  : /(&lt;|<)%[@!=]?/g, 
      right : /%(&gt;|>)/g 
    });
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['peoplecode'];

  SyntaxHighlighter.brushes.PeopleCode = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
