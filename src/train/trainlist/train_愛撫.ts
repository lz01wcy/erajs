/**
 * エロＬＶ１
 */
import { TrainDef, Train, SourceTable, TrainStatus, 同性判定, getGaugeLevel, 調教行為実行判定 } from '../train'

const train = new TrainDef()
export default train

train.ID = 1
train.名前 = '愛撫'
train.属性.add('エロ', 'Ｃ', 'Ｂ', '愛撫', '前戯')

train.発動条件 = (ctx, target, player, commander) => {
  return true
}

train.許容判定 = (ctx, target, player, commander, array) => {
  array.push([train.名前, -20])
  調教行為実行判定(ctx, target, player, array)
}

train.内容取得 = (文脈, 対象, 実行者, 命令者) => {
  const 内容 = new TrainStatus(対象, 実行者, 命令者)
  const キスあり = false

  内容.命令者ソース.疲労 = 5
  内容.命令者ソース.消耗 = 5
  内容.命令者ソース.征服 = 30

  内容.実行者ソース.疲労 = 20
  内容.実行者ソース.消耗 = 20
  内容.実行者ソース.性行動 = 30
  内容.実行者ソース.達成 = 30
  内容.実行者ソース.奉仕 = 30
  内容.実行者ソース.不潔 = 30
  内容.実行者ソース.逸脱 = 20
  内容.実行者ソース.性的 = 30

  内容.対象者ソース.疲労 = 20
  内容.対象者ソース.消耗 = 20
  内容.接触追加(対象, '手', 実行者, '手')
  if (対象.特性.Ｃ有り) {
    内容.対象者ソース.快Ｃ = 30
    内容.接触追加(対象, 'Ｃ', 実行者, '手')
  }
  if (対象.特性.Ｐ有り) {
    内容.対象者ソース.快Ｐ = 30
    内容.接触追加(対象, 'Ｐ', 実行者, '手')
  }
  if (対象.特性.Ｂ有り) {
    内容.対象者ソース.快Ｂ = 30
    内容.接触追加(対象, 'Ｂ', 実行者, '手')
  }
  内容.対象者ソース.情愛 = 30
  内容.対象者ソース.性行動 = 30
  内容.対象者ソース.露出 = 30
  内容.対象者ソース.逸脱 = 20
  内容.対象者ソース.受動 = 20
  内容.対象者ソース.性的 = 20

  if (キスあり) {
    内容.属性追加('キス')

    内容.実行者ソース.不潔 += 20
    内容.実行者ソース.快Ｍ = 20

    内容.対象者ソース.不潔 += 20
    内容.対象者ソース.快Ｍ = 20
    内容.接触追加(対象, 'Ｍ', 実行者, 'Ｍ')
  }

  return 内容
}
