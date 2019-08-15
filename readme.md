# GBMD - Gamebook Markdown
A simple Gamebook engine using jQuery to display pages created with Markdown

# Development
- [Markdown Server](https://github.com/ypocat/gfms)
- Google Chrome

# Tested
- [Dillinger](http://dillinger.io/)

# Known Issues
- Loading md page in browser causes Javascript to execute multiple times and causes all sections to be hidden.
- Dynamic markdown pages only display correctly on autorefresh after md document save.
- Cannot use ) in section name. Workaround: `&#41;`

# Wish List
- Navigation shortcuts 

```Markdown
# Page 2

[Back to Page 1](-)
[Go to next page](+)
[Skip ahead to Page 4](++)
```
- Dev mode
  * See entire md document
  * Select start page
  * Override page navigation
- Enable browser back/forward buttons, bookmark (#anchor tags?)
