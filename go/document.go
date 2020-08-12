type DocumentV2 struct {

	ContentUrl string `json:"contentUrl,omitempty"`

	Description string `json:"description,omitempty"`

	DocId string `json:"docId,omitempty"`

	DocReferences []DocReference `json:"docReferences,omitempty"`

	DocType string `json:"docType,omitempty"`

	DocVersion int32 `json:"docVersion,omitempty"`
}
