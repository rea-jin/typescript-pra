import React from 'react';
import logo from './logo.svg';
import './App.css';
import Json from "./Json";
import Data from "./data.json"
import TestComponent from './TestComponent';

// 型推論でjsonの型を定義
// type JsonDataType = typeof Data;

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
// オブジェクトのデータタイプを指定して、OS
const PC1:PC = {
  id:1,
  os: OS.Linux
}
const PC2:PC = {
  id:2,
  os: OS.Mac
}

// 型の互換性
const comp1 = "test"; // 型は推論ではっきりしている comp1にはtestしかはいらない
let comp2:string = comp1; // アノテーションで文字列だとわかる

let comp3:string = "test";
// let comp4:"test" = comp3; // これはできない 抽象度の高いものを指定している

let func3 = (x:number)=>{}
let func4 = (x:string)=>{}
// func3 = func4; // 方が違うので、代入はできない

// ジェネリックす
interface GEN<T> { // 型のテンプレートだけ用意しておいて
  item: T;
}
// 実際に使う時に型を指定する
const gen0: GEN<string> = {item: "hello"}
// const get1: GEN = {item:"hello"} // <>をつけないとエラー
const gen2: GEN<number> = { item: 12} // 動的に変更できる

interface GEN1<T=string> { // デフォルトを指定しておく
  item: T;
}
const gen3: GEN1 = {item: "hello"} // 型を指定しなくてもデフォルトが適応される

// extends
interface GEN2<T extends string | number>{
  item :T;
}
const gen4: GEN2<number> = { item :1} // stringかnumberのみしていできる

// 関数の場合
function fncGen<T>(props: T){
  return { item: props}
}
const gen5 = fncGen("test"); // 型を指定しなくても推論が効く
const gen6 = fncGen<number>(12); //動的に指定できる かえってくるitemもpropsによりテンプレートで動的に指定できる
const gen7 = fncGen<string | null>(null);// nullもわたせる

function fncGen1<T extends string | null>(props: T){
  return {value:props};
}
const gen8 = fncGen1("hello"); // 
// const gen9 = fncGen1(1223);// eエラーになる

interface Props{
  price : number;
}
function fncGen3<T extends Props>(props: T){
  return {value : props.price}
}
const gen10 = fncGen3({price: 10}); // 渡すデータはinterfaceの数値型
// アロー関数
const fncGen4 = <T extends Props>(props: T)=>{
  return {value :props.price}
}

// functional componentの型
const App: React.FC = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="component"/>
      </header>
      <Json jsonData={Data}/>
    </div>
  );
}

export default App;
