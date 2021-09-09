export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// unknownの関数をそのまま実行し、計算することはできない
// let sumUnknown = numberUnknown + 10;

// if文で特定の型であるか判定してからなら計算を行うことができる。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
