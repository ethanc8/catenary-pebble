# catenary-pebble

A Pebble watchapp/watchface written in C using the Pebble SDK.

## Building & running

```sh
pebble build                          # build for all targetPlatforms
pebble install --emulator emery       # install on the emery emulator
pebble install --emulator emery --logs # install on the emery emulator with logging enabled
pebble install --phone <ip>           # install to a paired phone
```

## Target platforms

`targetPlatforms` in `package.json` controls which watches you build for. The
modern Pebble hardware is **emery** (Pebble Time 2), **gabbro** (Pebble Round
2), and **flint** (Pebble 2 Duo); the original Pebble platforms (aplite,
basalt, chalk, diorite) are included by default for backwards compatibility.

## Project layout

```
src/c/           C source for the watchapp
src/pkjs/        PebbleKit JS (phone-side) source, if any
worker_src/c/    Background worker source, if any
resources/       Images, fonts, and other bundled resources
package.json     Project metadata (UUID, platforms, resources, message keys)
wscript          Build rules — usually no need to edit
```

By default this project is configured as a watchapp. To make it a watchface,
set `pebble.watchapp.watchface` to `true` in `package.json`.

## Documentation

Full SDK docs, tutorials, and API reference: <https://developer.repebble.com>

## Random notes

### Regenerating from protobufs

```bash
cd src/c/proto
../nanopb/generator/nanopb_generator.py departures_board.proto -L '#include "../nanopb/%s"'
npx pbjs -t static-module -w commonjs --keep-case --dts departures_board.proto -o departures_board.pb.js
```

### protobuf libraries and deps

We needed to install an old version of `long`, and the polyfill `fast-text-encoding`:

```bash
npm install long@3.2.0 --save
npm install fast-text-encoding
```
