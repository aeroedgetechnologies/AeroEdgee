import React, { useState, useEffect } from 'react';

const DEFAULT_PREVIEW_CHARS = 420;

export default function ReadMoreLess({
  children,
  previewChars = DEFAULT_PREVIEW_CHARS,
  className = '',
}) {
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const fullText = typeof children === 'string' ? children.trim() : '';
  const previewText =
    fullText.length > previewChars
      ? `${fullText.slice(0, previewChars).trim()}…`
      : fullText;

  useEffect(() => {
    setNeedsToggle(fullText.length > previewChars);
    setExpanded(false);
  }, [fullText, previewChars]);

  if (!fullText) return null;

  return (
    <div className={`read-more-block ${className}`}>
      <p className="text-lg text-gray-700 leading-relaxed">
        {expanded || !needsToggle ? fullText : previewText}
      </p>
      {needsToggle && (
        <button
          type="button"
          className="read-more-btn"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}
