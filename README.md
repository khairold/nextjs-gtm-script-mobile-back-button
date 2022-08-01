# Describe the bug

Clicking or tapping the back button on a mobile device browser would only change the url, but not the content.
This will happen when initiating Moengage Web SDK.

Should you go to \_app.js and comment out the Script component, back button on a mobile device browser would behave as expected.

# Expected Behavior

Clicking the Back button on a mobile browser will go to the previous page

# Provide environment information

```
    Operating System:
      Platform: darwin
      Arch: arm64
      Version: Darwin Kernel Version 21.5.0: Tue Apr 26 21:08:29 PDT 2022; root:xnu-8020.121.3~4/RELEASE_ARM64_T8101
    Binaries:
      Node: 16.11.0
      npm: 8.0.0
      Yarn: 1.22.15
      pnpm: N/A
    Relevant packages:
      next: 12.2.4-canary.8
      eslint-config-next: N/A
      react: 17.0.2
      react-dom: 17.0.2
```

# To Reproduce

- Clode the reproduction repository
- run `npm install`
- run `npm run dev` to start the development server
- Use a mobile device OR Chrome mobile simulator OR Firefox mobile simulator to browse
- Go to [http://localhost:3000/a](http://localhost:3000/a)
- On the page, click on _Click here and go to the B page_
- You should now be on http://localhost:3000/b
- Click or Tap the browser's back button
- You now should be on http://localhost:3000/a
- The issue is, the url is changed back to http://localhost:3000/a but the content does not change
