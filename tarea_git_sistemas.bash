#!/bin/bash

#agregar todos los archivos del proyecto al commit
git add .

#Realiza el commit con el mensaje
git commit -m "Este es un commit automático"

#pusheo del commit
git push origin master

#mostrar status del commit
git status
