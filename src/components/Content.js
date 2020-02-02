import React from 'react'


export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

