let creatMail = ( recv, bill ) => {
  let msg = recv + '様\n'
  + 'PT企画の齊藤です。\n'
  + '今月の請求額は' + bill + '円です。';
  console.log( msg );
};

creatMail( '山本', 40000 );
