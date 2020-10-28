import { Reducer } from 'redux'
import { DocumentContent, DocumentContentAction, DocumentContentActionType, SetDocumentContentAction } from './types'

export const initialState: DocumentContent = {
  content: ''
}

export const DocumentContentReducer: Reducer<DocumentContent, DocumentContentAction> = (state: DocumentContent = initialState, action: DocumentContentAction) => {
  switch (action.type) {
    case DocumentContentActionType.SET_DOCUMENT_CONTENT:
      return { content: (action as SetDocumentContentAction).content }
    default:
      return state
  }
}
