# catenary-pebble

Pebble version of [Catenary Maps](https://catenarymaps.org/en/home/), a transit application.

## Target platforms

The following platforms are supported:
* `chalk` (Pebble Technology Corp - Pebble Time Round)
* `diorite` (Pebble Technology Corp - Pebble 2)
* `emery` (Core Devices - Pebble Time 2)
* `flint` (Core Devices - Pebble 2 Duo)
* `gabbro` (Core Devices - Pebble Round 2)

Note that support for round devices is not the best; UI design for the round devices is somewhat difficult, and the authors of this application do not own any round devices.

The following platforms are not supported:
* `aplite` (Pebble Technology Corp - Pebble Classic, Pebble Steel)
  * Aplite doesn't have enough memory to load the departures board.
* `basalt` (Pebble Technology Corp - Pebble Time, Pebble Time Steel)
  * There is a crash in `menu_cell_basic_draw` that we were not able to debug.

## Development

### Building & running

```sh
# Build and run on emery emulator
pebble build -- --emulator && pebble install --emulator emery --logs

# Build and debug on emery emulator
pebble build -- --emulator --debugger && pebble install --emulator emery --logs
pebble gdb --emulator emery

# Build and install to a paired phone
pebble build && pebble install --phone <ip>
```

### Project layout

```
src/c/           C source for the watchapp
src/pkjs/        PebbleKit JS (phone-side) source, if any
worker_src/c/    Background worker source, if any
resources/       Images, fonts, and other bundled resources
package.json     Project metadata (UUID, platforms, resources, message keys)
wscript          Build rules — usually no need to edit
```

### Random notes

#### Regenerating from protobufs

```bash
cd src/c/proto
../nanopb/generator/nanopb_generator.py departures_board.proto -L '#include "../nanopb/%s"'
npx pbjs -t static-module -w commonjs --keep-case --dts departures_board.proto -o departures_board.pb.js
```

#### protobuf libraries and deps

We needed to install an old version of `long`, and the polyfill `fast-text-encoding`:

```bash
npm install long@3.2.0 --save
npm install fast-text-encoding
```
