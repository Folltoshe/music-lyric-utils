# music-lyric-utils

A Lyric Utils

## Installation

- Npm Install

```bash
npm install lrc-file-parser
```

- Script Link

```html
<script src="./music-lyric-utils.iife.js"></script>
```

# Use

- Node

```js
import { Parser, Player } from 'music-lyric-utils'

// parser
const lyricParser = new Parser.LyricParser()

// parser info
const lyricInfo = lyricParser.parse({
  original: '',
  translated: '',
  roman: '',
  dynamic: '',
})

// player
const lyricPlayer = new Player.LyricPlayer({
  onSetLyric(info) {
    console.log('onSetLyric', info)
  },
  onLinePlay(lineNum, info) {
    console.log('onLinePlay', lineNum, info)
  },
})

// update lyric
lyricPlayer.updateLyric(lyricInfo)

// play lyric
lyricPlayer.play(0)
```

- Web

```html
<script>
  const { Parser, Player } = MusicLyricUtils

  const lyricParser = new Parser.LyricParser()
  const lyricInfo = lyricParser.parse({
    original: '',
    translated: '',
    roman: '',
    dynamic: '',
  })

  const player = new Player.LyricPlayer({
    onSetLyric(info) {
      console.log('onSetLyric', info)
    },
    onLinePlay(lineNum, info) {
      console.log('onLinePlay', lineNum, info)
    },
  })
  player.updateLyric(lyricInfo)

  player.play(0)
</script>
```

## LICENSE

MIT
