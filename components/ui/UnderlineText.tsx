import React from 'react';

interface UnderlineTextProps {
  /** The full text to display */
  text: string;
  /** The specific word to underline. If left empty, the entire text is underlined. */
  wordToUnderline?: string;
  /** Choose between underline, coloring the text to brand color, or both */
  variant?: 'underline' | 'color' | 'both';
  /** Make the highlighted text bold */
  bold?: boolean;
  /** Custom text size class (e.g. 'text-3xl') */
  textSize?: string;
  /** Optional custom styling */
  className?: string;
}

export default function UnderlineText({ 
  text, 
  wordToUnderline,
  variant = 'underline',
  bold = false,
  textSize = "",
  className = ""
}: UnderlineTextProps) {
  
  let variantClasses = "";
  if (variant === 'underline' || variant === 'both') {
    variantClasses += "underline decoration-[var(--color-brand-primary)] underline-offset-4 decoration-[1.5px] ";
  }
  if (variant === 'color' || variant === 'both') {
    variantClasses += "text-[var(--color-brand-primary)] ";
  }

  // Combine our variant styles with any custom bold/textSize/className props
  const finalClassName = `${variantClasses}${
    bold ? 'font-extrabold ' : ''
  }${textSize ? textSize + ' ' : ''}${className}`.trim();

  // If no specific word is provided, underline the entire text
  if (!wordToUnderline) {
    return <span className={finalClassName}>{text}</span>;
  }

  // Split the text around the word to underline (case-insensitive)
  const parts = text.split(new RegExp(`(${wordToUnderline})`, 'gi'));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === wordToUnderline.toLowerCase() ? (
          <span key={index} className={finalClassName}>
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
}
