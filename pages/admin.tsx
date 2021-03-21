import { useEffect } from 'react';

import ArticlePreview from '../components/ArticlePreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('article', ArticlePreview);
    })();
  }, []);

  return <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>;
};

export default Admin;
