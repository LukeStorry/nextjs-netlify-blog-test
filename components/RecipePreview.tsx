// PreviewTemplate docs -> https://www.netlifycms.org/docs/customization/#registerpreviewtemplate
// TODO make this just convert to / create a new recipe object to pass into the recipe components

const RecipePreview = ({ entry, getAsset }) => {
  const title = entry.getIn(['data', 'title']);
  const body = entry.getIn(['data', 'body']);
  const thumbnail = entry.getIn(['data', 'thumbnail']);
  var image = getAsset(thumbnail);
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} />
      <p>{body}</p>
    </div>
  );
};
export default RecipePreview;
