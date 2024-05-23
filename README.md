# Text-Editor--PWA-
Single-page text editor that runs in the browser.


## Description

A single-page text editor that runs in the browser. It provides an app-like experience for users, despite running in the browser, as it a PWA. This app can also be installed and run offline. Thanks to IndexedDB, this PWA is able to store data locally in the browser, which is what allows users to use this app offline.

IndexedDB is also used by PWAs to cache resources such as HTML, CSS, JavaScript, and other assets. This caching mechanism allows PWAs to load faster and provide a smoother user experience, especially on repeat visits or when there's limited network connectivity.



## What was the motivation?

To learn the advantages of offline functionality for browsers, and how caching can save resources and loading time when a page is loaded.



## What problems does it solve?

PWAs help users overcome limited or no online connectivity. This is possible with service workers and local storage mechanisms, like IndexedDB, to cache content and enable offline functionality. This also makes loading times quicker since assets are preloaded, leading to a more positive user experience.

PWAs can also be installed directly from the browser with a simple prompt, making the installation process more seamless and user-friendly. And since PWAs are accessible through browsers, they can be shared by sending its URL, and are more discoverable via search engines. This makes them easier to share compared to native apps that are restricted to specific app stores.

## What was learned?

How to build a PWA with caching and offline functionality. How webpack.config outputs a dist folder with a new index.html that was built with the css and js of the app.


## Link to Deployed Application

https://text-editor-pwa-niyh.onrender.com