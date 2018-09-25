if [ -d $1 ]; then
  echo '目录已经存在了，直接退出。'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo '<!DOCTYPE>' > index.html
  echo '<title>Hello</title>' >> index.html
  echo '<h1>Hi</h1>' >> index.html
  echo 'h1{color: red;}' > css/style.css
  echo 'var string = "Hello World"' > js/main.js
  echo 'alert(string)' >> js/main.js
  echo '成功创建目录'$1
  exit
fi