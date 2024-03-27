Visually Impaired People website

A website for Visually Impared People, Inc to share their news and provide
ways for their audience to get in touch or support the organization.

Contrib modules used:
  admin_toolbar: Improves the editorial experience
  editoria11y: Checks for accessibility in page content.
    @see /admin/config/content/editoria11y
  pathauto: Provide more readable urls to improve SEO.
    @see /admin/config/search/path/patterns
  recaptcha: Prevent spam on forms for anonymous visitors
    @see /admin/config/people/captcha
  xmlsitemap: Improves content visibility to search engines.
    @see /admin/config/search/xmlsitemap

** There are no custom modules in this site **

Contrib themes used:
  Tara: Used as custom theme base.

Custom themes used:
  VIP_Tara: Tweaks to make Tara fit our design.

Components:
  The frontpage title comes from the Frontpage view title.
    @see /admin/structure/views/view/frontpage

Hosting configuration:
  The .htaccess file has been updated to:
  - Use /web/ as the docroot
  - Force all traffic to ssl
  - Force all traffic to use the www subdomain
