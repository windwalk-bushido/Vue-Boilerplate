#!/bin/bash


cd ~/Projects
pass=false
while [ $pass == false ]
do
  echo -e "\nEnter project name (min. three chars -> spider-case):\n"
  read project_name
  length=${#project_name}
  if [ $length -ge 3 ]; then
    pass=true
  fi
done


npm create vite@latest $project_name -- --template vue
cd $project_name
npm i -D tailwindcss postcss autoprefixer
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/vue-fontawesome@prerelease
npm i vue-router@4
npm i pinia
npm i axios


mv package.json ~/Vue-Boilerplate
mv package-lock.json ~/Vue-Boilerplate
cd ~/Projects
rm -r $project_name
mv ~/Vue-Boilerplate ~/$project_name
mv ~/$project_name .
cd ~/Projects/$project_name
npm i
echo $project_name > README.md
sudo rm -r .git
mv gitignore .gitignore

echo "Now just remove this shell script ('install.sh'). Enjoy"
