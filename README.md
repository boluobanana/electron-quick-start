# TestGPUProcess

* Electron version:
5.0.0
* Operating system:
Mac 10.13.6


### Expected behavior
When I close the browserWindow which used webGL context.
In Activity Monitor Electron Helper(GPU) will not requires high perf GPU.

### Actual behavior
When I close the browserWindow which used webGL context.
In Activity Monitor Electron Helper(GPU) still requires high perf GPU.

### How to reproduce

```
git clone git@github.com:boluobanana/electron-quick-start.git
npm i
npm run start

// click the btn openThreeJsDoc
// when the new page onload and In Activity Monitor Electron Helper(GPU) has requires high perf GPU. Close this page
// The helper still required high perf GPU
```

And I do the same things at Chrome 79.0.3945.88. When the website be closed. After 5s later, the Chrome Helper(GPU) not requires high perf GPU any more.

Is there some way can close the GPU process manually or stop require high perf GPU?

<!--

Your best chance of getting this bug looked at quickly is to provide a REPOSITORY that can be cloned and run.

You can fork https://github.com/electron/electron-quick-start and include a link to the branch with your changes.

If you provide a URL, please list the commands required to clone/setup/run your repo e.g.

  $ git clone $YOUR_URL -b $BRANCH
  $ npm install
  $ npm start || electron .

-->