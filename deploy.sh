#!/usr/bin/sh

cd /deployments/

if [ -d "yoko-portfolio" ]; then
  echo "Directory yoko-portfolio exists."
  cd yoko-portfolio
  git checkout main
  git pull
else
  echo "Directory yoko-portfolio does not exist. Cloning repository"
  git clone https://GITHUB_TOKEN@github.com/albercldev/yoko-portfolio
  cd yoko-portfolio
fi

docker-compose up --build --no-start
docker-compose down
docker-compose up -d
