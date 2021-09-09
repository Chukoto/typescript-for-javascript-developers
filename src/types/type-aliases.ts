export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

// 自分で型を書いてるから合理的ではない
const example2: Profile = {
  name: 'Ham',
  age: 43,
};

// example1を追従して、型が変わった場合も対応できるので推奨
type Profile2 = typeof example1;
