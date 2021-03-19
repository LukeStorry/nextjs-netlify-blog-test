const ArticlePreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const body = entry.getIn(['data', 'body']);

  return (
    <div>
      <h1>{title}</h1>
      <small>{date}</small>
      {body}
    </div>
  );
};
export default ArticlePreview;
