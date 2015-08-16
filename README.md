# cardgame-srvc-arbiter
Arbiter Service (Core Domain) of the CardGame

Documentation: https://github.com/apiacademy/cardgame-srvc-arbiter/wiki

## Installation

1. Install Docker and Docker Compose. For Ubuntu, you can use [Ansible Scripts we wrote](https://github.com/apiacademy/quizgame/tree/master/ansible).
1. Install developer container:
 
    ```console
    git clone https://github.com/apiacademy/cardgame-srvc-arbiter.git
    cd cardgame-srvc-arbiter
    docker-compose up -d
    ```
1. You can view logs with: `docker logs -tf [containername]` where [containername] can be obtained by running `docker ps`
1. You can edit files directly in the git checkout. Container will hot-reload code on edits.
1. Please submit an issue to the issue queue if you find any problems
