export default function Tag({ children, tagName, tagColor }) {
  // custom styling for html element tags
  return (
    <>
      <span className="text-indigo-200">{`<`}</span>
      <span className={tagColor}>{tagName}</span>
      <span className="text-indigo-200">{`>`}</span>

      {children}

      <span className="text-indigo-200">{`</`}</span>
      <span className={tagColor}>{tagName}</span>
      <span className="text-indigo-200">{`>`}</span>
    </>
  );
}
