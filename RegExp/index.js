function urlCheck(url) {
  const expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

  const regex = new RegExp(expression);

  if (url.match(regex)) {
    return true;
  } else {
    return false;
  }
}

console.log(
  urlCheck(
    'https://hotline.ua/ua/auto-avtoshiny-i-motoshiny/tigar-winter-20555-r16-94h/?tab=prices&gad_source=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buNOQM6KCJqlZldBkbar-GyEtY7bzMocpF7a9IagZRfGY29I6EhzC1AaAgp3EALw_wcB'
  )
);
