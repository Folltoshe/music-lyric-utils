import { Parser, Player } from '../src'
import ExampleLyric from './lyric.json'

const lyricParser = new Parser.LyricParser()
const lyricInfo = lyricParser.parse({
  original: ExampleLyric.wy_2145677987.original,
  translated: ExampleLyric.wy_2145677987.translated,
  roman: ExampleLyric.wy_2145677987.roman,
  dynamic: ExampleLyric.wy_2145677987.dynamic,
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
