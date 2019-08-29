#! bin/bash

git remote add origin git@github.com:ElTioLAG/appchuck.git

if [ $? -eq 0 ];then
	echo "El respositorio remoto se configuro con exito"
	git remote -v
else
	echo $?
	git remote -v
fi
