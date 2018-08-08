export const DOM_READY = "DOM_READY";
export const domReady = () => ({
    type: DOM_READY
});

export const LOAD_COMMIT = "LOAD_COMMIT";
export const loadCommit = (url, isMainFrame) => ({
    type: LOAD_COMMIT,
    url,
    isMainFrame
});

export const DID_START_LOADING = "DID_START_LOADING";
export const DID_STOP_LOADING = "DID_STOP_LOADING";
export const DID_FINISH_LOAD = "DID_FINISH_LOAD";
export const DID_FRAME_FINISH_LOAD = "DID_FRAME_FINISH_LOAD";
export const DID_FAIL_LOAD = "DID_FAIL_LOAD";

export const didStartLoading = () => ({
    type: DID_START_LOADING
});
export const didStopLoading = () => ({
    type: DID_STOP_LOADING
});
export const didFinishLoad = () => ({
    type: DID_FINISH_LOAD
});
export const didFrameFinishLoad = isMainFrame => ({
    type: DID_FRAME_FINISH_LOAD,
    isMainFrame
});
export const didFailLoad = (
    errorCode,
    errorDescription,
    validatedURL,
    isMainFrame
) => ({
    type: DID_FAIL_LOAD,
    errorCode,
    errorDescription,
    validatedURL,
    isMainFrame
});

export const DID_GET_RESPONSE_DETAILS = "DID_GET_RESPONSE_DETAILS";
export const didGetResponseDetails = (
    status,
    newUrl,
    originalUrl,
    httpResponseCode,
    requestMethod,
    referrer,
    headers,
    resourceType
) => ({
    type: DID_GET_RESPONSE_DETAILS,
    status,
    newUrl,
    originalUrl,
    httpResponseCode,
    requestMethod,
    referrer,
    headers,
    resourceType
});

export const DID_GET_REDIRECT_REQUEST = "DID_GET_REDIRECT_REQUEST";
export const didGetRedirectRequest = (oldUrl, newUrl, isMainFrame) => ({
    type: DID_GET_REDIRECT_REQUEST,
    oldUrl,
    newUrl,
    isMainFrame
});

export const PAGE_TITLE_UPDATED = "PAGE_TITLE_UPDATED";
export const PAGE_FAVICON_UPDATED = "PAGE_FAVICON_UPDATED";

export const pageTitleUpdated = (title, explicitSet) => ({
    type: PAGE_TITLE_UPDATED,
    title,
    explicitSet
});
export const pageFaviconUpdated = favicons => ({
    type: PAGE_FAVICON_UPDATED,
    favicons
});

export const ENTER_HTML_FULL_SCREEN = "ENTER_HTML_FULL_SCREEN";
export const LEAVE_HTML_FULL_SCREEN = "LEAVE_HTML_FULL_SCREEN";

export const enterHtmlFullScreen = () => ({
    type: ENTER_HTML_FULL_SCREEN
});
export const leaveHtmlFullScreen = () => ({
    type: LEAVE_HTML_FULL_SCREEN
});

export const CONSOLE_MESSAGE = "CONSOLE_MESSAGE";
export const consoleMessage = (level, message, line, sourceId) => ({
    type: CONSOLE_MESSAGE,
    level,
    message,
    line,
    sourceId
});

export const FOUND_IN_PAGE = "FOUND_IN_PAGE";
export const foundInPage = ({
    requestId,
    activeMatchOrdinal,
    matches,
    selectionArea,
    finalUpdate
}) => ({
    type: FOUND_IN_PAGE,
    requestId,
    activeMatchOrdinal,
    matches,
    selectionArea,
    finalUpdate
});

export const NEW_WINDOW = "NEW_WINDOW";
export const newWindow = (url, frameName, disposition, options) => ({
    type: NEW_WINDOW,
    url,
    frameName,
    disposition,
    options
});

export const WILL_NAVIGATE = "WILL_NAVIGATE";
export const DID_NAVIGATE = "DID_NAVIGATE";
export const DID_NAVIGATE_IN_PAGE = "DID_NAVIGATE_IN_PAGE";

export const willNavigate = url => ({
    type: WILL_NAVIGATE,
    url
});
export const didNavigate = url => ({
    type: DID_NAVIGATE,
    url
});
export const didNavigateInPage = (isMainFrame, url) => ({
    type: DID_NAVIGATE_IN_PAGE,
    isMainFrame,
    url
});

export const CLOSE = "CLOSE";
export const close = () => ({
    type: CLOSE
});

export const IPC_MESSAGE = "IPC_MESSAGE";
export const ipcMessage = (channel, args) => ({
    type: IPC_MESSAGE,
    channel,
    args
});

export const CRASHED = "CRASHED";
export const crashed = () => ({
    type: CRASHED
});

export const GPU_CRASHED = "GPU_CRASHED";
export const gpuCrashed = () => ({
    type: GPU_CRASHED
});

export const PLUGIN_CRASHED = "PLUGIN_CRASHED";
export const pluginCrashed = (name, version) => ({
    type: PLUGIN_CRASHED,
    name,
    version
});

export const DESTROYED = "DESTROYED";
export const destroyed = () => ({
    type: DESTROYED
});

export const MEDIA_STARTED_PLAYING = "MEDIA_START_PLAYING";
export const mediaStartedPlaying = () => ({
    type: MEDIA_STARTED_PLAYING
});

export const MEDIA_PAUSED = "MEDIA_PAUSED";
export const mediaPaused = () => ({
    type: MEDIA_PAUSED
});

export const DID_CHANGE_THEME_COLOR = "DID_CHANGE_THEME_COLOR";
export const didChangeThemeColor = themeColor => ({
    type: DID_CHANGE_THEME_COLOR,
    themeColor
});

export const UPDATE_TARGET_URL = "UPDATE_TARGET_URL";
export const updateTargetUrl = url => ({
    type: UPDATE_TARGET_URL,
    url
});

export const DEV_TOOLS_OPENED = "DEV_TOOLS_OPENED";
export const DEV_TOOLS_FOCUSED = "DEV_TOOLS_FOCUSED";
export const DEV_TOOLS_CLOSED = "DEV_TOOLS_CLOSED";

export const devToolsOpened = () => ({
    type: DEV_TOOLS_OPENED
});

export const devToolsFocused = () => ({
    type: DEV_TOOLS_FOCUSED
});

export const devToolsClosed = () => ({
    type: DEV_TOOLS_CLOSED
});
