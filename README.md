# hyperdev-mongo 

I was playing about with *hyperdev* and I wanted to hook it up to some DB and do bits and bobs with it.

So, this is a plaything to hook (hyperdev.com) to mongo with a quick and dirty ui to show it working.

Check out *[hyperdev](http://www.joelonsoftware.com/items/2016/05/30.html)*, it's pretty cool.


## Where is this running?

- You can find it running here: (https://fern-warrior.hyperdev.space/)
- The hyperdev source is here: (https://hyperdev.com/#!/project/fern-warrior)

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