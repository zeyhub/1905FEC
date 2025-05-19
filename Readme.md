# Backend ile birlikte çalışmak için yapılması gerekenler

## Docker ile mysql kurulumu yapılmalıdır

```bash
docker run --name mysql-blog \
  -e MYSQL_ROOT_PASSWORD=gizli_root_parola \
  -e MYSQL_USER=yazar \
  -e MYSQL_PASSWORD=guclu_yazar_parola \
  -e MYSQL_DATABASE=blog \
  -p 3306:3306 \
  -d mysql:latest
```

## Backend .env dosyasında bulunan değişkenler güncellenmelidir

```bash
PORT=3002
DB_HOST=localhost
DB_USER=yazar
DB_PASSWORD=guclu_yazar_parola
DB_NAME=blog
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:3000 
```

## Backend çalıştırılmalıdır

```bash
npm install
npm run dev
```
## Frontend çalıştırılmalıdır

```bash
!!!node 23.7.0 versiyonu ile çalıştırılmalıdır
!!!Eğer nvm kurulu değilse kurmalısınız
nvm install 23.7.0
nvm use 23.7.0
npm install
npm run dev
```

## Eğer database sağlıklı bir şekilde açılmadıysa aşağıdaki şekilde hata alabilirsiniz. Database'in açıldığına emin olun.

```bash
 {
  parent: Error: connect ECONNREFUSED ::1:3306
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1284:16) {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '::1',
    port: 3306,
    fatal: true
  },
  original: Error: connect ECONNREFUSED ::1:3306
      at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1284:16) {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '::1',
    port: 3306,
    fatal: true
  }
}
```

## Backend örnek istekler (Requestler) için Postman kullanılabilir.
