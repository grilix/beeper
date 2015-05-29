# Beep as a service

## What?

Have you ever wanted to be able to beep your computer? ..programatically?
..from anywhere? no? really? Well, if you change your mind, this could
be useful.. or not.

## Why?

I wanted to have audible notifications based on events, like CPU
overheating, internet unreachable, updates available, whatever. So,
exposing a beep on the intranet was the best (and funny) idea :D.

## Requirements

- This app uses the beep command: `yum install beep` (for example).
- The module `pcspkr` should be loaded (or, built into the kernel),
running `modprobe pcspkr` should be enough.
- A user can only use the pc speaker if: 1. They own the local tty,
or 2. is root (right?). This means, that you should run this app as
root :(
- Then, the basic stuff: node, npm, and:

`npm install`

## Run

`sudo PORT=3000 node main.js`

## Use

Just POST a json to yourserver:3000/beep

The json would be: `{"beep": [BEEP_ITEM, BEEP_ITEM, ..]}`,
where `BEEP_ITEM` are objects with:

- `"frequency"` The frequency for that beep.
- `"repeat"` Repeat that beep n times.

### Example:

```bash
curl -H "Content-Type: application/json" -X POST -d '{"beep": [
  {"frequency": 600},
  {"frequency": 900},
  {"frequency": 1200, "repeat": 2}
]}' http://localhost:3000/beep
```
