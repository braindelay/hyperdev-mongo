# hyperdev-mongo 

A plaything to hook hyperdev to mongo with a quick and dirty ui to show it working.


## Where is this running?

- You can find it running here: (https://flicker-sword.hyperdev.space/)
- The hyperdev source is here: (https://hyperdev.com/#!/project/flicker-sword)

## Config

The sample uses **mlab** as a back-end, but you can use any mongo that you can connect to using a url, you just need settings like this in your `.env` file.

```bash
MONG_USER=
MONG_PASS=
MONG_HOST=???.mlab.com
MONG_PORT=???
MONG_DB=???
```

Connects through: `mongodb://$MONG_USER:$MONG_PASS@$MONG_HOST:$MONG_PORT/$MONG_DB`

**NOTE:** it expects a collection in here called `songs`