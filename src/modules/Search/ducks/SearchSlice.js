import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  highlightedCardIndex: -1,
  searchResult: {
    noMatch: false,
    items: []
  },
  navigationType: '' // keyboard/mouse
}

// Action Handlers

function onUpdateSearchQuery(state, action) {
  state.searchQuery = action.payload ?? '';
}

function onUpdateHighlightedCardIndex(state, action) {
  state.highlightedCardIndex = action.payload ?? -1;
}

function onUpdateNavigationType(state, action) {
  state.navigationType = action.payload ?? '';
}

function onUpdateSearchResult(state, action) {
  state.searchResult = action.payload ?? {};
}

function onIncrementHighlightedCardIndex(state) {

  if(state.highlightedCardIndex < (state.searchResult.items.length -1)) {
    state.highlightedCardIndex = state.highlightedCardIndex + 1;
  }
  // Highlight first card (cyclic)
  else {
    state.highlightedCardIndex = 0;
  }
}

function onDecrementHighlightedCardIndex(state) {
  let cardIndex = state.highlightedCardIndex;

  if(state.highlightedCardIndex > 0) {
    state.highlightedCardIndex = cardIndex - 1;
  }
}

function onResetHighlightedCardIndex(state) {
  state.highlightedCardIndex = -1;
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery: onUpdateSearchQuery,
    updateHighlightedCardIndex: onUpdateHighlightedCardIndex,
    incrementHighlightedCardIndex: onIncrementHighlightedCardIndex,
    decrementHighlightedCardIndex: onDecrementHighlightedCardIndex,
    resetHighlightedCardIndex: onResetHighlightedCardIndex,
    updateSearchResult: onUpdateSearchResult,
    updateNavigationType: onUpdateNavigationType
  }
})

// Selectors

export function selectSearchQuery(state) {
  return state.search.searchQuery;
}

export function selectHighlightedCardIndex(state) {
  return state.search.highlightedCardIndex;
}

export function selectSearchResult(state) {
  return state.search.searchResult;
}

export function selectNavigationType(state) {
  return state.search.navigationType;
}

export const { updateSearchQuery, updateHighlightedCardIndex, updateSearchResult, updateNavigationType,
  incrementHighlightedCardIndex, decrementHighlightedCardIndex, resetHighlightedCardIndex } = searchSlice.actions;

export default searchSlice.reducer;