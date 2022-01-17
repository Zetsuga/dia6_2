# Subir un archivo a GIT
+ Primero verificaremos en que parte dse la rama eswtamos con el siguiente comando
git branch
+ Para meterte en la rama adecuada haremos un
git checkout <rama>
+ Para asegurarnos que tenemos la última versión de el main haremos una descarga de la raiz
git pull
+ Para subir la rama hay que hacerle
git merge
+ Otra vez hay que cambiar de rama con ello volvemos a repetir elcomando volviendo al main
git checkout main
+ una vez nos hemos cerciorado que todo funciona haremos un
git status
+ preparamos los archivos con un 
git add . ó git add <nombre de archivo>
+ volvemos a verificar el satus de los archivos con el comando status
git status
+ realizamos el comit de los archivos una vez de acuerdo
git commit -m "comentario para el commit"
+ Y por último realizamos la subida de los archivos
git push

Gracias por usar nuestros tutoriales