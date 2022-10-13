/*
방법1
import { hello1 } from './hello.js' ;
// 모듈일 경우 현재 페이지는 ./를 붙여줘야됌
import { hello2 } from './hello.js'
*/

/*
import {hello1, hello2 } from './hello.js'
{} 안에 여러개 작성해주기
*/


/*
import * as hello from './hello.js';
hello라는 이름으로 * (모두 다 갖고오기)
'./hello.js'에서
*/

import hello1 from './hello.js'
// default를 이용해서 hello1을 기본 값으로 설정해줬기 때문에 {}를 쓰면 안 됌

hello1();