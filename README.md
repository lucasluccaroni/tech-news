# Tech-News
## Pagina de noticias acerca de tecnología

### Acerca de:
Pagina hecha sobre NodeJs, Express. Mediante un fetch a una API de noticias tecnologicas, se traen las mismas periódicamente cada X cantidad de tiempo y se almacenan en una base de datos en MongoDB Atlas. El frontEnd de la página es un buscador donde se pueden visualizar las noticias de la DB buscadas por titulo, palabras clave o todas las noticias disponibles si se le da al boton de 'buscar' sin escribir nada.
> Se crea imagen + container en Docker y se sube a DockerHub.
>  [Click aquí.](https://hub.docker.com/r/lucasluccaroni/tech-news) 

### Librerias utilizadas
- dotenv
- express
- express-compression
- mongodb
- mongoose
- [newsapi](https://newsapi.org/)
- winston
