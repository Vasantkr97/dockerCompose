## Manual Installation
-Install NodeJs locally 
-Clone the repo
-Install the dependencies (npm install)
-Start the DB locally
    -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    -Go to neon.tech and get yourself a new DB
- Change the .env file and update y our DB Credentials
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker Installation
- Install docker
- start postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image - `docker build -t user_project .`
- Start the image - `docker run -p 3000:3000 user_project`


## Docker Compose installation steps
-Install docker, docker-compose
- run `docker-compose up`