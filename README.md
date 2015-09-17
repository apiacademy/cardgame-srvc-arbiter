# cardgame-srvc-arbiter
Arbiter Service (Core Domain) of the CardGame

Documentation: https://github.com/apiacademy/cardgame-srvc-arbiter/wiki

## Installation

1. Install Docker and Docker Compose. For Ubuntu, you can use [Ansible Scripts we wrote](https://github.com/apiacademy/quizgame/tree/master/ansible).
1. Make sure your Docker daemon is up and running, e.g. on Ubuntu: `sudo service docker start`
1. Install developer container:
 
    ```console
    git clone https://github.com/apiacademy/cardgame-srvc-arbiter.git
    cd cardgame-srvc-arbiter
    docker-compose up -d
    ```
    
    or if there is a problem with using Docker Compose (as [it is on boot2docker](https://github.com/docker/compose/issues/1032)), you can instead use:
    
    ```console
    docker build -t cardgame .
    docker run -ti -d --name cardgame-redis redis
    docker run -ti -d -p 5000:3000 -v .:/opt/application --link cardgame-redis:cardgame-redis --name cardgame-api cardgame
    ```
    
1. You can view logs with: `docker logs -tf [containername]` where [containername] can be obtained by running `docker ps`
1. You can edit files directly in the git checkout. Container will hot-reload code on edits.
1. Please submit an issue to the [issue queue](https://github.com/apiacademy/cardgame-srvc-arbiter/issues) if you find any problems
