import { useEffect } from 'react';

import RecipePreview from '../components/RecipePreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      CMS.registerPreviewTemplate('recipes', RecipePreview);
    })();
  }, []);

  return <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>;
};

export default Admin;
