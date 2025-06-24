type Properties = 'propA' | 'propB';

type MyNewType = MyMappedType<{a:'a',b:'b'}>

type MyMappedType<T> = {
    [P in keyof T]: T[P] ;
}

//pick
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P];
}
//Properties는 T에 포함되어 있어야 한다. 

type MyNewType2 = Pick1<{a:'a',b:'b',c:'c'}, 'a'>
//type MyNewType2 = {a: "a";}

//record

type Record1<K extends keyof any, T> = {
    [P in K]:T
 }

const myNewRecord: Record1<string,number> = {};
myNewRecord.a  =10;
myNewRecord.b  =10;


