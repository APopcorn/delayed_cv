import { useState, useEffect } from 'react';

interface TextProps {
  text: any;
}

const ExpandableTextArea = ({ text }: TextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textToShow, setTextToShow] = useState('');
  const [maxCharacters, setMaxCharacters] = useState(100); // initial character limit

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxCharacters(50);
      } else if (window.innerWidth < 1024) {
        setMaxCharacters(100);
      } else {
        setMaxCharacters(150);
      }
    };

    handleResize(); // Set the initial character limit
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setTextToShow(isExpanded ? text : text.slice(0, maxCharacters) + '...');
  }, [isExpanded, maxCharacters, text]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <p
        className="w-full p-2 rounded resize-none overflow-y-scroll"
      >{textToShow}</p>
      {text.length > maxCharacters && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-blue-500 hover:underline focus:outline-none"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ExpandableTextArea;
