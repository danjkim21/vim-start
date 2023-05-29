export default function Tag({ children, tagName, tagColor }) {
  // custom styling for html element tags
  return (
    <>
      <span>{`<`}</span>
      <span className={tagColor}>{tagName}</span>
      <span>{`>`}</span>

      {children}

      <span>{`</`}</span>
      <span className={tagColor}>{tagName}</span>
      <span>{`>`}</span>
    </>
  );
}
