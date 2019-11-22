# hack-day-ps-project-security

## Overview

This project will guide you in learning the basics linux
system operations. Here you will discover the tools used by professionals
in the IT and Security Ops fields.

## Setup

To get started you will need to run the `npm install` command in your terminal.

From here we have made it as easy as possible to spin up the docker images with the challenges you will complete.
All you have to do is run the `runner` script by typing `./runner.sh`

## Verify Setup

Lets make sure everything is working as we expected

First lets run `npm run test` to see that are tests are spinning up properly. As of now you should have no passing tests.
As you progress through the tasks and modules feel free to check your own progress by re running this command.

Now lets try getting into our docker container. We have designed the container to behave like a remote linux server
so rather than using any docker commands lets `ssh` into our container by typing 
`ssh root@localhost -p 1337` into our terminal. When asked for a password type in `HACKDAY` Any time we want to connect to our container we can run this command.
