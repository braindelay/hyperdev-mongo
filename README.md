h1. hyperdev-mongo 

A plaything to hook hyperdev to mongo with a quick and dirty ui to show it working.


h2. Where is this running?

- You can find it running here: (https://flicker-sword.hyperdev.space/)
- The hyperdev source is here: (https://hyperdev.com/#!/project/flicker-sword)

h2. Config
Uses **mlab** as a back-end, you just need settings like this in your `.env` file.

```bash
MONG_USER=
MONG_PASS=
MONG_HOST=???.mlab.com
MONG_PORT=???
MONG_DB=???
```

**NOTE:** it expects a collection in here called `songs`