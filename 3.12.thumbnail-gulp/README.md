This will throw the following error as the code/modules/functions are placed in random order based on the filenames (see app.js - ThumbnailList is called before it's defined)

"Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."