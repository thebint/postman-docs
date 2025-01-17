import React from 'react';
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';
const { v4: uuidv4 } = require('uuid');



const SearchBox = ({ currentRefinement, refine }) => (
  <div className="ais-SearchBox">
    <form noValidate action="" role="search" className="ais-SearchBox-form">
      <input
        className="ais-SearchBox-input"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  </div>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// on page load do not display
/* eslint-disable react/no-danger */
const Hits = ({ hits }) => {

  return (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li>No search results found</li> : ''}
    {hits.map((hit) => {
      // handles develop and prod Algolia index
      const excerpt = hit._snippetResult && hit._snippetResult.excerpt.value ? hit._snippetResult.excerpt.value : hit.excerpt
      return (
      <li key={uuidv4()}>
        { !!hit && hit.slug && hit.title && hit.excerpt ? (
          <a href={hit.slug}>
            <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
            <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          </a>
        ) : (
          <p>Search is currently not available.</p>
        )}

      </li>
    )})}
  </ul>
)};
/* eslint-enable */

export const CustomHits = connectHits(Hits);