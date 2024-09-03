export const 
	//All
	COLLECTIONS_LOAD_PRE 			= 'COLLECTIONS_LOAD_PRE',
	COLLECTIONS_LOAD_REQ 			= 'COLLECTIONS_LOAD_REQ',
	COLLECTIONS_LOAD_SUCCESS 		= 'COLLECTIONS_LOAD_SUCCESS',
	COLLECTIONS_LOAD_ERROR 			= 'COLLECTIONS_LOAD_ERROR',

	COLLECTIONS_REFRESH_REQ 		= 'COLLECTIONS_REFRESH_REQ',

	//Single
	COLLECTION_CREATE_REQ 			= 'COLLECTION_CREATE_REQ',
	COLLECTION_CREATE_SUCCESS 		= 'COLLECTION_CREATE_SUCCESS',
	COLLECTION_CREATE_ERROR 		= 'COLLECTION_CREATE_ERROR',

	COLLECTION_UPDATE_REQ	 		= 'COLLECTION_UPDATE_REQ',
	COLLECTION_UPDATE_SUCCESS 		= 'COLLECTION_UPDATE_SUCCESS',
	COLLECTION_UPDATE_ERROR 		= 'COLLECTION_UPDATE_ERROR',
	COLLECTION_UPDATE_COUNT 		= 'COLLECTION_UPDATE_COUNT',

	COLLECTION_REMOVE_REQ 			= 'COLLECTION_REMOVE_REQ',
	COLLECTION_REMOVE_SUCCESS 		= 'COLLECTION_REMOVE_SUCCESS',
	COLLECTION_REMOVE_ERROR 		= 'COLLECTION_REMOVE_ERROR',

	COLLECTION_ADD_BLANK			= 'COLLECTION_ADD_BLANK',
	COLLECTION_CREATE_FROM_BLANK	= 'COLLECTION_CREATE_FROM_BLANK',
	COLLECTION_REMOVE_BLANK			= 'COLLECTION_REMOVE_BLANK',

	COLLECTION_COVER_UPLOAD_REQ		= 'COLLECTION_COVER_UPLOAD_REQ',

	//Drafts
	COLLECTION_DRAFT_LOAD_REQ		= 'COLLECTION_DRAFT_LOAD_REQ',
	COLLECTION_DRAFT_LOAD_SUCCESS	= 'COLLECTION_DRAFT_LOAD_SUCCESS',
	COLLECTION_DRAFT_LOAD_ERROR		= 'COLLECTION_DRAFT_LOAD_ERROR',
	COLLECTION_DRAFT_CHANGE 		= 'COLLECTION_DRAFT_CHANGE',
	COLLECTION_DRAFT_COMMIT 		= 'COLLECTION_DRAFT_COMMIT',

	//Sharing
	SHARING_LOAD_REQ				= 'SHARING_LOAD_REQ',
	SHARING_LOAD_SUCCESS			= 'SHARING_LOAD_SUCCESS',
	SHARING_LOAD_ERROR 				= 'SHARING_LOAD_ERROR',

	SHARING_UPDATE_USER_REQ			= 'SHARING_UPDATE_USER_REQ',
	SHARING_UPDATE_USER_SUCCESS		= 'SHARING_UPDATE_USER_SUCCESS',
	SHARING_UPDATE_USER_ERROR 		= 'SHARING_UPDATE_USER_ERROR',

	SHARING_REMOVE_USER_REQ			= 'SHARING_REMOVE_USER_REQ',
	SHARING_REMOVE_USER_SUCCESS		= 'SHARING_REMOVE_USER_SUCCESS',
	SHARING_REMOVE_USER_ERROR 		= 'SHARING_REMOVE_USER_ERROR',

	SHARING_SEND_INVITES_REQ		= 'SHARING_SEND_INVITES_REQ',
	SHARING_SEND_INVITES_SUCCESS	= 'SHARING_SEND_INVITES_SUCCESS',
	SHARING_SEND_INVITES_ERROR 		= 'SHARING_SEND_INVITES_ERROR',

	SHARING_UNSHARE_REQ				= 'SHARING_UNSHARE_REQ',
	SHARING_UNSHARE_SUCCESS			= 'SHARING_UNSHARE_SUCCESS',
	SHARING_UNSHARE_ERROR 			= 'SHARING_UNSHARE_ERROR',

	SHARING_JOIN					= 'SHARING_JOIN',

	//Multiple helpers
	COLLECTIONS_DEFAULTS_CHANGE 	= 'COLLECTIONS_DEFAULTS_CHANGE',
	COLLECTIONS_REORDER			 	= 'COLLECTIONS_REORDER',
	COLLECTIONS_EXPAND_TO			= 'COLLECTIONS_EXPAND_TO',
	COLLECTIONS_TOGGLE_ALL			= 'COLLECTIONS_TOGGLE_ALL',
	COLLECTIONS_CHANGE_VIEW			= 'COLLECTIONS_CHANGE_VIEW',

	//Single helpers
	COLLECTION_TOGGLE 				= 'COLLECTION_TOGGLE',
	COLLECTION_REORDER 				= 'COLLECTION_REORDER',
	COLLECTION_CHANGE_VIEW 			= 'COLLECTION_CHANGE_VIEW',
	COLLECTION_EMPTY_TRASH 			= 'COLLECTION_EMPTY_TRASH',

	//Single group
	GROUP_CREATE					= 'GROUP_CREATE',
	GROUP_TOGGLE					= 'GROUP_TOGGLE',
	GROUP_RENAME					= 'GROUP_RENAME',
	GROUP_REORDER 					= 'GROUP_REORDER',
	GROUP_REMOVE 					= 'GROUP_REMOVE',
	GROUP_APPEND_COLLECTION 		= 'GROUP_APPEND_COLLECTION',
	GROUP_REMOVE_COLLECTION 		= 'GROUP_REMOVE_COLLECTION',

	//All groups
	GROUPS_SAVE_REQ					= 'GROUPS_SAVE_REQ',
	GROUPS_SAVE_SUCCESS				= 'GROUPS_SAVE_SUCCESS',
	GROUPS_SAVE_ERROR 				= 'GROUPS_SAVE_ERROR',

	//Select mode
	COLLECTIONS_SELECT_ONE			= 'COLLECTIONS_SELECT_ONE',
	COLLECTIONS_UNSELECT_ONE		= 'COLLECTIONS_UNSELECT_ONE',
	COLLECTIONS_SELECT_ALL			= 'COLLECTIONS_SELECT_ALL',
	COLLECTIONS_UNSELECT_ALL		= 'COLLECTIONS_UNSELECT_ALL',

	COLLECTIONS_SELECTED_MERGE		= 'COLLECTIONS_SELECTED_MERGE',
	COLLECTIONS_SELECTED_REMOVE		= 'COLLECTIONS_SELECTED_REMOVE',
	COLLECTIONS_SELECTED_FAILED		= 'COLLECTIONS_SELECTED_FAILED',

	COLLECTIONS_REMOVE_ALL			= 'COLLECTIONS_REMOVE_ALL',
	
	COLLECTIONS_CLEAN_REQ			= 'COLLECTIONS_CLEAN_REQ',
	COLLECTIONS_CLEAN_SUCCESS		= 'COLLECTIONS_CLEAN_SUCCESS',
	COLLECTIONS_CLEAN_ERROR			= 'COLLECTIONS_CLEAN_ERROR'