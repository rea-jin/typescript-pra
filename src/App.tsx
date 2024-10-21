import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = "hello";
let user: string = "username"; // 最初に型定義をすることをアノテーションという。
// 自動で型判定するので定義する必要はな
let array1 = [0,1,true,false]; // (number | string)[] という型になる
// オブジェクトはinterface として、オブジェクトの中身を定義できる
// TypeScriptのインターフェースは、基本的にはオブジェクトの構造を表すための型定義方法です
interface NAME {
  first:string;
  last : string | null; // nullでもえらーがでない
  middle?:string; // ?をつけるとnull,プロパティがない場合でもエラーは出ない
}

let nameObj: NAME = {
  first:"yamada", last:"tarou"
}

// 複数のインターフェースを継承して型の合成が可能
interface Name {
  firstName: string;
  lastName: string;
}
interface Age {
  age: number;
}
interface Person extends Name, Age {}
let person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// 関数の場合 返り値の方は指定しなくてもいい
const func1 = (x: number, y:number):number=>{
  return x + y;
};

// intersection Types
// typeとintrerfaceはどちらもオブジェクトの構造や型を定義するために使われる。エイリアス
// ユニオン型、交差型がある

type PROFILE ={
  age:number;
  city:string;
}
type LOGIN ={
  username:string;
  password:string;
}
// 型２つを結合することをintersection typesという
type USER = PROFILE & LOGIN;

const userObj :USER= {
  age:20,
  city:"tokyo",
  username:"yamada",
  password:"tarou"
}

// union types データ型を制限できる
// type ID = number | string;  // ユニオン型
// type Name = { firstName: string } & { lastName: string };  // 交差型
// type MyTuple = [number, string]; // タプル型
// type Add = (a: number, b: number) => number; // 関数型
let value: boolean | number
value = true;
value = 19;

let arrayUni :(number | string)[];
arrayUni = [0,1,2,"hello"];

// literal type 定義したもの以外はエラーになる
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon"

let animal = {cat:"small cat"}; // 型推論できまる
let newAnimal: typeof animal = {cat:"big cat"};

// typeof すでに宣言した型を使って定義する
let msg: string = "hi";
let msg2: typeof msg;
msg2 = "hello";

// jsonのプロパティの型
type KEYS = {
  primary:string;
  secondary:string;
}
let key: keyof KEYS; // keyはunion型によって primary or secondary のキーになる
key = "primary";

// typeof * keyof
const SPORTS = {
  soccer : "Soccker",
  baseball: "baseboll"
};
let keySports: keyof typeof SPORTS; // データ構造とキーを定義 keyはsoccor, baseballしかうけつけない

// enum

enum OS {
  Windows,
  Mac,
  Linux
}
interface PC {
  id:number;
  os: OS; // ここでenumを設定
}

const PC1:PC = {
  id:1,
  os: OS.Linux
}
const PC2:PC = {
  id:2,
  os: OS.Mac
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
